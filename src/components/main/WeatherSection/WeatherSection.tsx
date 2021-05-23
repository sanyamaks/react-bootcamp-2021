import React from 'react'
import './WeatherSection.css'
import cn from 'classnames'
import CustomSelect from '../../shared/CustomSelect/CustomSelect'
import CustomDate from '../../shared/CustomDate/CustomDate'
import {
    CoordinatesType,
    isLoadingType,
    TimeType,
    Weather7DaysCardsType,
    ErrorType,
} from '../../../types/types'
import NotFoundCards from '../NotFoundCards/NotFoundCards'
import Cards from '../Cards/Cards'

type Props = {
    title: string
    className?: string
    numberCards: number
    errorMessage: ErrorType
    isLoad: isLoadingType
    cards: Weather7DaysCardsType
    sendCoordinates: (coordinates: CoordinatesType) => void
    sendDate?: (date: TimeType) => void
}

const WeatherSection = (props: Props): JSX.Element => {
    const {
        className,
        title,
        numberCards,
        errorMessage,
        isLoad,
        cards,
        sendCoordinates,
        sendDate,
    } = props

    return (
        <section className={cn('weather-section', className)}>
            <h2 className="weather-section__title">{title}</h2>
            <div className="weather-section__inputs">
                <CustomSelect sendCoordinates={sendCoordinates} />
                {sendDate && (
                    <CustomDate
                        className="weather-section__input-date"
                        sendDate={sendDate}
                    />
                )}
            </div>
            {(errorMessage || cards.length === 0 || isLoad) && (
                <NotFoundCards
                    className="weather-section__not-found-cards"
                    errorMessage={errorMessage}
                    isLoad={isLoad}
                />
            )}
            {!errorMessage && cards.length > 0 && !isLoad && (
                <Cards
                    className="weather-section__cards"
                    numberCards={numberCards}
                    cards={cards}
                />
            )}
        </section>
    )
}

export default React.memo(WeatherSection)
