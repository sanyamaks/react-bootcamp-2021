/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, {
    useState,
    useRef,
    MouseEvent,
    useEffect,
    useCallback,
    ChangeEvent,
} from 'react'
import './CustomSelect.css'
import cn from 'classnames'
import {
    connectCustomSelect,
    ConnectPropsType,
} from '../../../containers/shared/CustomSelect'
import { CityType, CoordinatesType } from '../../../types/types'
import { ReactComponent as Icon } from '../../../assets/icons/chevron-top.svg'

type Props = {
    sendCoordinates: (coordinates: CoordinatesType) => void
}

const CustomSelect = (props: ConnectPropsType & Props): JSX.Element => {
    const { cities, sendCoordinates } = props

    const defaultValue = 'Select city'
    const [isActive, setActive] = useState(false)
    const [isAriaHidden, setAriaHidden] = useState(true)
    const [placeholder, setPlaceholder] = useState(defaultValue)
    const [optionHoveredIndex, setOptionHoveredIndex] = useState(-1)
    const [optionTempIndex, setOptionTempIndex] = useState(-1)
    const [optionCheckedIndex, setOptionCheckedIndex] = useState(-1)
    const currentOptionRef = useRef<HTMLSelectElement>(null)
    const customOptionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isActive) {
            document.addEventListener('keydown', supportKeyboardNavigation)
            document.addEventListener('click', watchClickOutside)
        }
        return (): void => {
            document.removeEventListener('keydown', supportKeyboardNavigation)
            document.removeEventListener('click', watchClickOutside)
        }
    }, [optionHoveredIndex])

    const watchClickOutside = useCallback(function (e: Event): void {
        if (customOptionsRef.current && e.target instanceof HTMLElement) {
            if (!customOptionsRef.current.contains(e.target)) {
                if (optionCheckedIndex !== -1) {
                    setOptionCheckedIndex(optionTempIndex)
                    setOptionTempIndex(-1)
                }

                closeCustomOptions()
            }
        }
    }, [])

    const supportKeyboardNavigation = useCallback(
        function (e: KeyboardEvent): void {
            if (
                e.key === 'ArrowDown' &&
                optionHoveredIndex < cities.length - 1
            ) {
                e.preventDefault()
                setOptionCheckedIndex(-1)
                setOptionHoveredIndex(optionHoveredIndex + 1)
            }

            if (e.key === 'ArrowUp' && optionHoveredIndex > 0) {
                e.preventDefault()
                setOptionCheckedIndex(-1)
                setOptionHoveredIndex(optionHoveredIndex - 1)
            }

            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault()

                const option = cities[optionHoveredIndex]

                const value = option?.name
                if (value) {
                    if (currentOptionRef.current) {
                        currentOptionRef.current.value = value
                    }
                    setPlaceholder(value)
                    setOptionCheckedIndex(optionHoveredIndex)
                    setOptionTempIndex(-1)

                    sendCoordinates(cities[optionHoveredIndex].coordinates)

                    closeCustomOptions()
                }
            }

            if (e.key === 'Escape') {
                if (optionTempIndex !== -1) {
                    setOptionCheckedIndex(optionTempIndex)
                    setOptionTempIndex(-1)
                } else {
                    setOptionCheckedIndex(optionTempIndex)
                    setOptionTempIndex(-1)
                }

                closeCustomOptions()
            }
        },
        [optionHoveredIndex]
    )

    const openCustomOptions = (): void => {
        setActive(true)

        setAriaHidden(false)

        if (optionCheckedIndex !== -1) {
            setOptionHoveredIndex(optionCheckedIndex)
            setOptionTempIndex(optionCheckedIndex)
            setOptionCheckedIndex(-1)
        } else {
            setOptionHoveredIndex(-1)
        }

        document.addEventListener('click', watchClickOutside)
        document.addEventListener('keydown', supportKeyboardNavigation)
    }

    function closeCustomOptions(): void {
        setActive(false)

        setAriaHidden(true)
        document.removeEventListener('click', watchClickOutside)
        document.removeEventListener('keydown', supportKeyboardNavigation)
    }

    const handleClickCustomOptions = (e: MouseEvent): void => {
        if (!isActive) {
            openCustomOptions()
            e.stopPropagation()
        } else {
            closeCustomOptions()
        }
    }

    const chooseCustomOption = (index: number, city: CityType): void => {
        if (currentOptionRef.current) {
            currentOptionRef.current.value = city.name
        }
        setPlaceholder(city.name)
        setOptionCheckedIndex(index)
        setOptionTempIndex(-1)

        sendCoordinates(city.coordinates)

        closeCustomOptions()
    }

    const chooseNativeOption = (e: ChangeEvent<HTMLSelectElement>): void => {
        setPlaceholder(e.target.value)
        setOptionCheckedIndex(
            cities.findIndex((city) => city.name === e.target.value)
        )

        const citiesItem = cities.find((city) => city.name === e.target.value)
        if (citiesItem) {
            sendCoordinates(citiesItem.coordinates)
        }
        setOptionTempIndex(-1)
    }

    return (
        <div className="select">
            <select
                className="select__main"
                ref={currentOptionRef}
                onChange={(e: ChangeEvent<HTMLSelectElement>): void => {
                    chooseNativeOption(e)
                }}
            >
                <option
                    className="select__option"
                    disabled={true}
                    value={placeholder}
                    selected={true}
                >
                    {placeholder}
                </option>
                {cities.map((city) => {
                    return (
                        <option
                            key={city.id}
                            className="select__option"
                            value={city.name}
                        >
                            {city.name}
                        </option>
                    )
                })}
            </select>

            <div className="select__custom" aria-hidden={isAriaHidden}>
                <div
                    className={cn('select__custom-placeholder-container', {
                        'select__custom-placeholder-container_active': isActive,
                    })}
                    onClick={handleClickCustomOptions}
                >
                    <p
                        className={cn('select__custom-placeholder', {
                            'select__custom-placeholder_active':
                                placeholder !== defaultValue,
                        })}
                    >
                        {placeholder}
                    </p>
                    <Icon
                        className={cn('select__custom-arrow', {
                            'select__custom-arrow_rotate': isActive,
                        })}
                    />
                </div>
                {isActive && (
                    <div
                        className="select__custom-options"
                        ref={customOptionsRef}
                    >
                        {cities.map((city, index) => {
                            return (
                                <div
                                    key={city.id}
                                    className={cn('select__custom-option', {
                                        'select__custom-option_hover':
                                            optionHoveredIndex === index,
                                        'select__custom-option_active':
                                            optionCheckedIndex === index,
                                    })}
                                    data-value={city.name}
                                    onClick={(): void => {
                                        chooseCustomOption(index, city)
                                    }}
                                >
                                    <p className="select__custom-option-text">
                                        {' '}
                                        {city.name}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default connectCustomSelect(React.memo(CustomSelect))
