import * as React from 'react'
import { useEffect, useState } from 'react'
import { getPokerDeck, shuffleDeck } from '../services/getDeck'
import { combineClassNames } from '../services/utilities'
import { ColorOption, Deck } from '../types/deck'
import Card from './Card'
import styles from './Deck.module.css'

export default function Deck({ }) {
    const pokerDeck = getPokerDeck()
    const [deck, setDeck] = useState<Deck>([])
    const shuffle = () => setDeck([...shuffleDeck(deck)])

    useEffect(() => {
        setDeck(pokerDeck)
    }, [])

    return <div className={combineClassNames(styles.deck, styles.spread)}>
        {deck.map((card, i) => 
            <Card key={i} card={card} colorOption={ColorOption.FourColor}/>
        )}

        <div style={{}}>
            <button onClick={shuffle}>Shuffle</button>
        </div>
    </div>
}