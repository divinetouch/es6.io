const person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    twitter: '@wesbos'
};


const {first:firstName, last} = person

// console.log(firstName, last)

// array

const details = ['Divine Touch', 123, 'divinetouch.com']

const [name, id, website] = details

console.log(name, id, website)

const data = 'Basketball,Sports,90210,23'

const[itemName, category, sku, inventory] = data.split(',')

console.log(itemName, category, sku, inventory)

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker']

const [captain, assistant, ...players] = team

console.log(captain, assistant, players)
