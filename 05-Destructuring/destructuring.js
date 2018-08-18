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

function convertCurrency(amount) {
    const converted = {
        USD: amount * 0.76,
        GPB: amount * 0.53,
        AUD: amount * 1.01,
        MEX: amount * 13.30
    };
    return converted;
}

// Order doesn't metter
const {MEX, AUD, GPB} = convertCurrency(100)
console.log(MEX, AUD)

//Order of the argument is indenpendent
function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
    return total + (tip * total) + (tax * total);
}

const bill = tipCalc({ tip: 0.20, total: 200 });
console.log('The bill is: ', bill);

const billEmpty = tipCalc()
console.log('The new bill is: ', billEmpty)
