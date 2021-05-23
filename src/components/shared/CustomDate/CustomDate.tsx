import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './CustomDate.css'
import cn from 'classnames'
import { TimeType } from '../../../types/types'

type Props = {
    className?: string
    sendDate: (date: TimeType) => void
}

const CustomDate = (props: Props): JSX.Element => {
    const { sendDate, className } = props

    const defaultValue = 'Select date'
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState(defaultValue)
    const [minDate, setMinDate] = useState('')
    const [maxDate, setMaxDate] = useState('')

    useEffect(() => {
        const date1 = new Date()
        const date2 = new Date()
        setMinDate(
            new Date(date2.getTime() - 1000 * 24 * 60 * 60 * 5)
                .toLocaleString('en-GB')
                .split(',')[0]
                .split('/')
                .reverse()
                .join('-')
        )
        setMaxDate(
            new Date(date1.getTime() - 1000 * 24 * 60 * 60)
                .toLocaleString('en-GB')
                .split(',')[0]
                .split('/')
                .reverse()
                .join('-')
        )
    }, [])

    const getDateNow = (e: ChangeEvent<HTMLInputElement>): void => {
        const dateNow = new Date(e.target.value)
        sendDate(dateNow.getTime() / 1000)
        setValue(dateNow.toLocaleString('en-GB').split(',')[0])
    }

    return (
        <div className={cn('input-date-container', className)}>
            <input
                className="input-date-container__input"
                ref={inputRef}
                type="date"
                // value="2018-07-22"
                min={minDate}
                max={maxDate}
                onChange={getDateNow}
            ></input>
            <p
                className={cn('input-date-container__value', {
                    'input-date-container__value_active':
                        defaultValue !== value,
                })}
            >
                {value}
            </p>
        </div>
    )
}

export default CustomDate
