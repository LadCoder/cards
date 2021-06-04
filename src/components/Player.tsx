import * as React from 'react'
import { useState } from 'react'
import { createCard } from '../services/createCard'
import { Suit, Value } from '../types/card'
import { Player } from '../types/player'
import Card from './Card'
import styles from './Player.module.css'

interface Props {
    player: Player
    // hand: Hand
}

export default function Player({ 
    player
} : Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.player}>
                <div className={styles.upper}>
                    <div className={styles.cards}>
                        <Card card={createCard(Suit.Spades, Value.Ace)}/>
                        <Card card={createCard(Suit.Clubs, Value.Ace)}/>
                    </div>
                    <div className={styles.avatar}>
                        <img src={player.avatar}/>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.name}>
                        {player.name}
                    </div>
                    <div className={styles.chips}>
                        {player.chipCount}
                    </div>
                </div>          
            </div>
        </div>
    )
}
