import React from 'react'
import './NotFoundCards.css'
import cn from 'classnames'
// eslint-disable-next-line max-len
import { ReactComponent as Icon } from '../../../assets/icons/Academy-Weather-bg160.svg'
import { ErrorType, isLoadingType } from '../../../types/types'

type Props = {
    className?: string
    errorMessage: ErrorType
    isLoad: isLoadingType
}

const NotFoundCards = (props: Props): JSX.Element => {
    const { className, errorMessage, isLoad } = props

    return (
        <div className={cn('not-found-cards', className)}>
            <Icon
                className={cn('not-found-cards__icon', {
                    'not-found-cards__icon_load': isLoad,
                })}
            />
            <p className="not-found-cards__message">
                {errorMessage ||
                    'Fill in all the fields and the weather will be displayed'}
            </p>
        </div>
    )
}

export default React.memo(NotFoundCards)
