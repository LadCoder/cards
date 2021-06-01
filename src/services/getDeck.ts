import { Suit, Value } from "../types/card"
import { Deck } from "../types/deck"
import { Game, GameType } from "../types/game"
import { createCard } from "./createCard"
import { getRandomNumber } from "./utilities"

export const getDeck = (game: Game) : Deck => {
    switch(game.gameType) {
        case GameType.Poker: 
            return getPokerDeck()
        default: 
            return getDefaultDeck()
    }
}

export const getDeckWithSize = (size: number) : Deck => {
    const deck : Deck = []
    const length = size > 13 ? 13 : size
    const values = Object.values(Value)

    for (const suit in Suit) {
        for (let i = 0; i < length; i++) {
            const card = createCard(suit, values[i])
            deck.push(card)
        }
    }

    return deck
}

export const shuffleDeck = (deck: Deck) : Deck => {
    let shuffledDeck = deck

    for (let i = 0; i < deck.length - 2; i++) {
        const swapIndex = getRandomNumber(i, deck.length - 1)
        const temp = shuffledDeck[swapIndex]
        shuffledDeck[swapIndex] = shuffledDeck[i]
        shuffledDeck[i] = temp 
    }

    return shuffledDeck
}

export const getPokerDeck = () : Deck => {
    const deck : Deck = []

    for (const suit in Suit) {
        for (const value in Value) {
            const card = createCard(suit, value)
            deck.push(card)
        }
    }

    return deck
}

const getDefaultDeck = () : Deck => {
    return []
}
