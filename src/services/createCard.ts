import { Card, Suit, Value } from "../types/card";

export const createCard = (suit : Suit | string, value : Value | string ) : Card => {
    const card : Card = {
        value: value as Value,
        suit: suit as Suit
    }
    return card
}