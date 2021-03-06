export type Card = {
    suit: Suit,
    value: Value,
}

export enum Suit { 
    Spades = "spades", 
    Clubs = "clubs", 
    Hearts = "hearts", 
    Diamonds = "diamonds" 
}

export enum Value {
    Ace = "A",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Jack = "J",
    Queen = "Q",
    King = "K"
}

export const values: Value[] = [
    Value.Ace, 
    Value.Two, 
    Value.Three, 
    Value.Four, 
    Value.Five, 
    Value.Six, 
    Value.Seven, 
    Value.Eight, 
    Value.Nine, 
    Value.Ten, 
    Value.Jack, 
    Value.Queen, 
    Value.King
]

export const suits: Suit[] = [
    Suit.Clubs,
    Suit.Diamonds,
    Suit.Hearts,
    Suit.Spades
]