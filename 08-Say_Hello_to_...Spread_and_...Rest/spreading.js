const inventors = ['Eistein', 'Newton', 'Galileo']
const newInventors = ['Musk', 'Jobs']

inventors.push(...newInventors) //no need for the push.apply anymore
console.log(inventors)

function sayHi(first, last) {
    console.log(`Hey there ${first} ${last}`)
}

const name = ['Divine', 'Touch']
sayHi(...name)

function convertCurrency(rate, ...amounts) {
    return amounts.map(amount => rate * amount)
}

console.log(convertCurrency(1.54, 19, 23, 52, 1, 56))
