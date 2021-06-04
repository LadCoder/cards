import * as React from 'react'
import { useEffect, useState } from 'react'
import { getPokerDeck, shuffleDeck } from '../services/getDeck'
import { Card } from '../types/card'
import Deck from './Deck'
import Player from './Player'
import { ButtonBar, Button, ButtonType } from './shared/Button'
import avatar1 from '../assets/images/avatars/avatar1.png'

export default function Home({ }) {
    const pokerDeck = getPokerDeck()
    const player = { avatar: avatar1, name: 'Test Name', chipCount: 5000}
    const [deck, setDeck] = useState<Card[]>([])
    const shuffle = () => setDeck([...shuffleDeck(deck)])

    useEffect(() => {
        setDeck(pokerDeck)
    }, [])

    return (
        <div>
            <Deck deck={deck}/>
            <Player player={player}/>
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