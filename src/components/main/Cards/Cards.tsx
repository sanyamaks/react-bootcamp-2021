import React, { SetStateAction, useEffect, useState } from 'react'
import './Cards.css'
import cn from 'classnames'
// eslint-disable-next-line max-len
import { ReactComponent as IconLeft } from '../../../assets/icons/chevron-left.svg'
// eslint-disable-next-line max-len
import { ReactComponent as IconRight } from '../../../assets/icons/chevron-right.svg'
import Card from '../Card/Card'
import { Weather7DaysCardsType } from '../../../types/types'

type Props = {
    className?: string
    numberCards: number
    cards: Weather7DaysCardsType
}

const Cards = (props: Props): JSX.Element => {
    const { className, numberCards, cards } = props
    const maxCards = 3
    const [currenCards, setCurrentCards] = useState([] as Weather7DaysCardsType)
    const [idCards, setIdCards] = useState(0)

    const handleClickLeft = (): void => {
        if (cards.length > maxCards && idCards !== maxCards) {
            setCurrentCards(
                cards.slice(
                    idCards - maxCards - 1,
                    idCards - 1
                ) as SetStateAction<Weather7DaysCardsType>
            )
            setIdCards(idCards - 1)
        }
    }

    const handleClickRight = (): void => {
        if (cards.length > maxCards && idCards !== cards.length) {
            setCurrentCards(
                cards.slice(
                    idCards - maxCards + 1,
                    idCards + 1
                ) as SetStateAction<Weather7DaysCardsType>
            )
            setIdCards(idCards + 1)
        }
    }

    function listenerWidth(): void {
        if (window.innerWidth > 768 && cards.length > maxCards) {
            setCurrentCards(
                cards.slice(
                    0,
                    maxCards
                ) as SetStateAction<Weather7DaysCardsType>
            )
            setIdCards(maxCards)
        } else {
            setCurrentCards([...cards] as SetStateAction<Weather7DaysCardsType>)
        }
    }

    useEffect(() => {
        if (window.innerWidth > 768 && cards.length > maxCards) {
            setCurrentCards(
                cards.slice(
                    0,
                    maxCards
                ) as SetStateAction<Weather7DaysCardsType>
            )
            setIdCards(maxCards)
        } else {
            setCurrentCards([...cards] as SetStateAction<Weather7DaysCardsType>)
        }
    }, [cards])

    useEffect(() => {
        // eslint-disable-next-line no-constant-condition
        if (cards.length > maxCards) {
            window.addEventListener('resize', listenerWidth)
        }
        return () => {
            window.removeEventListener('resize', listenerWidth)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={cn('cards', className)}>
            {cards.length > 3 && (
                <button
                    className={cn('cards__button', {
                        'cards__button_many-card': cards.length > maxCards,
                        cards__button_disabled: idCards === maxCards,
                    })}
                    onClick={handleClickLeft}
                >
                    <IconLeft className="cards__button-left-icon" />
                </button>
            )}
            <div
                className={cn('cards__container', {
                    cards__container_many: cards.length > maxCards,
                    cards__container_one: cards.length === 1,
                })}
            >
                {currenCards.map((card) => (
                    <Card
                        key={card?.date}
                        className={cn('cards__card', {
                            cards__card_one: cards.length === 1,
                        })}
                        card={card}
                    />
                ))}
            </div>
            {numberCards > maxCards && (
                <button
                    className={cn('cards__button', {
                        'cards__button_many-card': cards.length > maxCards,
                        cards__button_disabled: idCards === cards.length,
                    })}
                    onClick={handleClickRight}
                >
                    <IconRight className="cards__button-right-icon" />
                </button>
            )}
        </div>
    )
}

export default React.memo(Cards)
