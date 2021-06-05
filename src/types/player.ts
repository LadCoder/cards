import { Card } from "./card";

export type Hand = (Card | undefined)[]

export interface Player {
    seat: number
    name: string
    chipCount: number
    avatar: string
    hand: Hand
    timebank: number
}