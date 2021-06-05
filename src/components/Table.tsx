import * as React from "react";
import { useEffect, useState } from "react";
import { dealWholeCards, getPokerDeck, shuffleDeck } from "../services/getDeck";
import { Player } from "../types/player";
import { Card as CardType} from "../types/Card";
import { ButtonBar, Button, ButtonType } from "./shared/Button";
import styles from "./Table.module.css"
import Seat from "./Seat";
import Card from "./Card";


interface Props {
    seats: number
    blinds: [number, number]
    ante?: number
    players: Player[]
}

export default function Table ({
    seats,
    blinds,
    ante = 0,
    players
} : Props) {
    const pokerDeck = getPokerDeck()
    const seatPositions = getSeatPositions(seats)
    const [deck, setDeck] = useState<CardType[]>(pokerDeck)
    const [board, setBoard] = useState<CardType[]>([])
    const [seatedPlayers, setSeatedPlayers] = useState<Player[]>(players)

    const shuffle = () => setDeck([...shuffleDeck(deck)])
    const deal = () => {
        const { newDeck, newPlayers } = dealWholeCards(deck, seatedPlayers)
        setDeck([...newDeck])
        setSeatedPlayers([...newPlayers])
    }

    let seatsElement = []
    for(let i = 0; i < seats; i++) {
        const player = seatedPlayers.find(p => p.seat === i)
        seatsElement.push(
            <Seat 
                key={i} 
                player={player}
                style={{ position: "absolute", top: seatPositions[i]["y"], left: seatPositions[i]["x"]}}
            />
        )
}
    return (
        <div className={styles.wrapper}>
            <div className={styles.table}>
                <div className={styles.shadow}>
                    <div className={styles.board}>
                        {board.map(card => <Card card={card}/>)}
                    </div>
                    <div className={styles.seats}>
                        {seatsElement}
                    </div>
                </div>
            </div>
            <ButtonBar>
                <Button 
                    type={ButtonType.Valid}
                    text={'Shuffle'}
                    onClick={shuffle}
                />
                <Button 
                    type={ButtonType.Primary}
                    text={'Deal'}
                    onClick={deal}
                />
            </ButtonBar>
        </div>
    )
}

function getSeatPositions(totalseats: number) {
    const width = 800;
    const height = 500;
    const positions = [];

    const major = width / 2;
    const minor = height / 2;

    const angle = (Math.PI * 2) / totalseats;

    for (let seat = 0; seat < totalseats; seat++) {
        const x = major - major * Math.cos(angle * seat);
        const y = minor + minor * Math.sin(angle * seat);
        
        positions[seat] = { x, y };
    }

    return positions;
}
