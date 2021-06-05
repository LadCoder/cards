import * as React from 'react'
import Table from './Table'
import avatar1 from '../assets/images/avatars/avatar1.png'
import { Hand } from '../types/player'


export default function Home({ }) {
    const hand : Hand = []
    const player = { 
        avatar: avatar1, 
        name: 'Test Name', 
        chipCount: 5000, 
        hand, 
        seat: 1,
        timebank: 30
    }

    return (
        <div style={{ width: "100%", margin: "0"}}>
            <Table 
                seats={6}
                blinds={[50, 100]}
                players={[player]}
            />
        </div>
    )
}