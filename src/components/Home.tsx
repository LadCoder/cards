import * as React from 'react'
import { useEffect, useState } from 'react'
import { getPokerDeck, shuffleDeck } from '../services/getDeck'
import { Deck } from '../types/deck'
import Card from './Card'

export default function Home({ }) {
    const pokerDeck = getPokerDeck()
    const [deck, setDeck] = useState<Deck>([])
    const shuffle = () => setDeck([...shuffleDeck(deck)])

    useEffect(() => {
        setDeck(pokerDeck)
    }, [])

    return <div style={{ display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap", margin: "10px" }}>
        {deck.map((card, i) => 
            <Card key={i} card={card} />
        )}

        <div>
            <button onClick={shuffle}>Shuffle</button>
        </div>
    </div>
}