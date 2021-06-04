import * as React from 'react'
import { combineClassNames } from '../services/utilities'
import { Card, Suit } from '../types/card'
import { ColorOption } from '../types/deck'
import styles from './Card.module.css'

interface Props {
    card: Card
    colorOption?: ColorOption
}

export default function Card({
    card, 
    colorOption = ColorOption.TwoColor 
}: Props) {
    const { suit, value } = card
    const suitClass = getSuitClass(suit, colorOption)
    const suitIcon = getSuitIcon(suit)

    return (
        <div className={combineClassNames(styles.card, styles.unselectable)}>
            <div className={styles.details}>
                <div className={styles.front}>
                    <div className={combineClassNames(styles.value, suitClass)}>
                        {value}
                    </div>
                    <div className={combineClassNames(styles.suit, suitClass)}>
                        {suitIcon}
                    </div>
                    <div className={combineClassNames(styles.bigSuit, suitClass)}>
                        {suitIcon}
                    </div>
                </div>
            </div>
        </div>
    )
}
    
const getSuitIcon = (suit: Suit) => {
    switch(suit) {
        case Suit.Clubs:
            return '♣'
        case Suit.Diamonds: 
            return '♦'
        case Suit.Hearts: 
            return '♥'
        case Suit.Spades: 
            return '♠'
    }
}

const getSuitClass = (suit: Suit, colors: ColorOption) => {
    switch(suit) {
        case Suit.Clubs: 
            return (combineClassNames(styles.clubs, colors === ColorOption.FourColor ? styles.fourColor : null))
        case Suit.Diamonds: 
            return (combineClassNames(styles.diamonds, colors === ColorOption.FourColor ? styles.fourColor : null))
        case Suit.Hearts: 
            return (styles.hearts)
        case Suit.Spades: 
            return (styles.spades)
    }
}
