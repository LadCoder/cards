import { Card, Suit, Value } from "../types/card";

export const createCard = (suit : Suit, value : Value ) : Card => {
    const card : Card = {
        value: value as Value,
        suit: suit as Suit
    }
    return card
}