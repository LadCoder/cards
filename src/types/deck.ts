import { Card } from "./card";

export type Deck = Card[]

export type DeckOptions = {
    size: number,
    colors: ColorOption,
}

export enum ColorOption {
    FourColor = "4",
    TwoColor = "2"
}