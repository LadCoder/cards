import { getDeck, getDeckWithSize, getPokerDeck, shuffleDeck } from '../services/getDeck'
import { Game, GameType } from '../types/game'

describe("test getDeck function", () => {
    it("should create a deck of 52 cards for getDeck(pokerGame)", () => {
        const pokerGame : Game = { gameType: GameType.Poker }
        expect(getDeck(pokerGame)).toHaveLength(52)
    })
})

describe("test getDeckWithSize function", () => {
    it("should create a deck of 20 cards for getDeckWithSize(5)", () => {
        expect(getDeckWithSize(5)).toHaveLength(20)
    })
})

describe("test getDeckWithSize function", () => {
    it("should create a deck of 52 cards for getDeckWithSize(13)", () => {
        expect(getDeckWithSize(14)).toHaveLength(52)
    })
})

describe("test shuffleDeck function", () => {
    it("should shuffle a deck for shuffleDeck(Deck)", () => {
        const deck = getPokerDeck()
        const shuffledDeck = shuffleDeck(deck)
        expect(shuffledDeck).not.toContainEqual(deck)
    })
})

