export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function combineClassNames (...classNames: (string| false| null | undefined)[]) {
    return classNames.filter(Boolean).join(' ')
}
