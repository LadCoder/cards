import { createCard } from "../services/createCard"
import { Card, Suit, Value } from "../types/card"

describe("test createCard function", () => {
    it("should create the ace of spades", () => {
        const expectedCard : Card = { suit: Suit.Spades, value: Value.Ace }
        const createdCard = createCard(Suit.Spades, Value.Ace)
        expect(createdCard).toEqual(expectedCard)
    })
})