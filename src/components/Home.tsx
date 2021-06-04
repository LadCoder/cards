import * as React from 'react'
import { useEffect, useState } from 'react'
import { getPokerDeck, shuffleDeck } from '../services/getDeck'
import { Card } from '../types/card'
import Deck from './Deck'
import { ButtonBar, Button, ButtonType } from './shared/Button'

export default function Home({ }) {
    const pokerDeck = getPokerDeck()
    const [deck, setDeck] = useState<Card[]>([])
    const shuffle = () => setDeck([...shuffleDeck(deck)])

    useEffect(() => {
        setDeck(pokerDeck)
    }, [])

    return (
        <div>
            <Deck deck={deck}/>
            <ButtonBar>
                <Button 
                    type={ButtonType.Valid}
                    text={'Shuffle'}
                    onClick={shuffle}
                />
            </ButtonBar>
        </div>
    )
}