import * as React from 'react'
import { useState } from 'react'
import { Card, Suit, Value } from '../types/card'
import styles from './Card.module.css'

interface Props {
    card: Card
}

export default function Card({ card }: Props) {
    const { suit, value } = card
    const suitClass = getSuitClass(suit)
    const [showCard, setShowCard] = useState<boolean>(true)

    const flipCard = () => setShowCard(!showCard)

    return (
        <div className={[styles.wrapper, styles.unselectable].join(' ')} onClick={flipCard}>
            <div className={[styles.card, showCard ? styles.front : styles.back].filter(Boolean).join(' ')}>
                <div className={styles.details}>
                    <div className={[styles.value, suitClass].join(' ')}>
                        {value}
                    </div>
                    <div className={[styles.suit, suitClass].join(' ')}>
                        {getSuitIcon(suit)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const getSuitIcon = (suit: Suit) => {
    switch(suit) {
        case Suit.Clubs:
            return '\u2663'
        case Suit.Diamonds: 
            return '\♦'
        case Suit.Hearts: 
            return '\♥'
        case Suit.Spades: 
            return '\♠'
    }
}

const getSuitClass = (suit: Suit) => {
    switch(suit) {
        case Suit.Clubs: 
            return (styles.clubs)
        case Suit.Diamonds: 
            return (styles.diamonds)
        case Suit.Hearts: 
            return (styles.hearts)
        case Suit.Spades: 
            return (styles.spades)
    }
}
