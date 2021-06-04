import * as React from 'react'
import { useEffect, useState } from 'react'
import { getPokerDeck, shuffleDeck } from '../services/getDeck'
import { combineClassNames } from '../services/utilities'
import { ColorOption, Deck } from '../types/deck'
import Card from './Card'
import styles from './Deck.module.css'

interface Props {
    deck: Deck
}

export default function Deck({ deck } : Props) {
    return (
        <div className={combineClassNames(styles.deck, styles.spread)}>
            {deck.map((card, i) => 
                <Card key={i} card={card} colorOption={ColorOption.FourColor}/>
            )}
        </div>
    )
}