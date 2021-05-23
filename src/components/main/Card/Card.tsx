import React, { useCallback, useEffect, useState } from 'react'
import './Card.css'
import cn from 'classnames'
import { WeatherCardType } from '../../../types/types'

type Props = {
    className?: string
    card: WeatherCardType
}

const Card = (props: Props): JSX.Element => {
    const { className, card } = props
    const [temperature, setTemperature] = useState('')
    const [date, setDate] = useState('')

    const month = useCallback(
        (index: number): string =>
            [
                'jan',
                'feb',
                'mar',
                ' apr',
                'may',
                'jun',
                'jul',
                'aug',
                'sep',
                'oct',
                'nov',
                'dec',
            ][index],
        []
    )

    useEffect(() => {
        if (card) {
            if (!card.temperature) {
                setTemperature('')
            } else {
                const temp = Math.round(card?.temperature)
                if (temp > 0) {
                    setTemperature(`+${temp}`)
                }
            }

            if (!card.date) {
                setDate('')
            } else {
                const currentDate = new Date(card?.date * 1000)
                const currentDay = currentDate.getDate()
                const currentMonth = month(currentDate.getMonth())
                const currentYear = currentDate.getFullYear()
                setDate(`${currentDay} ${currentMonth} ${currentYear}`)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [card])

    return (
        <article className={cn('card', className)}>
            <p className="card__date">{date}</p>
            <img
                className="card__icon"
                src={card?.image || ''}
                alt="Weather icon"
            />
            <p className="card__temperature">{`${temperature}°`}</p>
        </article>
    )
}

export default Card
