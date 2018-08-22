const keys = ['size', 'color', 'weight']
const values = ['medium', 'red', 100]

const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift()
}

console.log(shirt)
