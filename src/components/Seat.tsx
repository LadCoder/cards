import * as React from 'react'
import { useMemo } from 'react'
import { Player } from '../types/player'
import Card from './Card'
import styles from './Seat.module.css'

interface Props {
    player: Player | undefined
    style?: React.CSSProperties
}

export default function Seat({ 
    player,
    style
} : Props) {
    const hand = player && player.hand

    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.player}>
                <div className={styles.upper}>
                    <div className={styles.cards}>
                        {hand && hand.map(card => {
                            return <Card card={card}/>
                        })}
                    </div>
                    <div className={styles.avatar}>
                        {player && <img src={player.avatar}/>}
                    </div>
                </div>
                
                <div className={styles.details}>
                    <div className={styles.name}>
                        {player ? player.name : 'SEAT'}
                    </div>
                    <div className={styles.chips}>
                        {player ? player.chipCount : 'OPEN'}
                    </div>
                </div>          
            </div>
        </div>
    )
}
