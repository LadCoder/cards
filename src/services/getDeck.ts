import { Suit, suits, Value, values } from "../types/card"
import { Deck } from "../types/deck"
import { Game, GameType } from "../types/game"
import { Player } from "../types/player"
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

    suits.map(suit => {
        for (let i = 0; i < length; i++) {
            const card = createCard(suit, values[i])
            deck.push(card)
        }
    })

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

export const dealWholeCards = (deck: Deck, players: Player[]) => {
    const newDeck = deck
    const newPlayers = players
    for(let card = 0; card < 2; card++) {
        newPlayers.map(player => {
            if (deck.length > 0){
                const dealtCard = newDeck.pop()
                player.hand 
                    ? player.hand[card] = dealtCard 
                    : player.hand = [dealtCard]
            } else { console.log('No cards left!') }
        })
    }
    return { newDeck, newPlayers }
}

export const getPokerDeck = () : Deck => {
    const deck : Deck = []

    suits.map(suit => {
        values.map(value => {
            deck.push(createCard(suit, value))
        })
    })

    return deck
}

const getDefaultDeck = () : Deck => {
    return []
}
