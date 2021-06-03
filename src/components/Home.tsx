import * as React from 'react'
import { useEffect, useState } from 'react'
import { getPokerDeck, shuffleDeck } from '../services/getDeck'
import { ColorOption, Deck } from '../types/deck'
import Card from './Card'

export default function Home({ }) {
    const pokerDeck = getPokerDeck()
    const [deck, setDeck] = useState<Deck>([])
    const shuffle = () => setDeck([...shuffleDeck(deck)])

    useEffect(() => {
        setDeck(pokerDeck)
    }, [])

    return <div style={{ display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap", margin: "10px", background: "#eee" }}>
        {deck.map((card, i) => 
            <div key={i} style={{ margin: "10px" }}>
                <Card key={i} card={card} colorOption={ColorOption.FourColor}/>
            </div>
        )}

        <div>
            <button onClick={shuffle}>Shuffle</button>
        </div>
    </div>
}