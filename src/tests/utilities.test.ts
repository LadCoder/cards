import { getRandomNumber } from "../services/utilities"

describe("test get random number function", () => {
    it("should generate a random number between 0 and 2 1000 times", () => {
        for(let i = 1; i <= 100; i++) {
            const number = getRandomNumber(0, 2)
            expect(number).toBeGreaterThan(-1)
            expect(number).toBeLessThan(3)
        }
    })
})