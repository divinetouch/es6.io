// Array.from -> turn array-ish to array

function sumAll() {
    return Array.from(arguments).reduce((prev, next) => prev + next, 0)
}

console.log(sumAll(2,34,564,56,78,5))

console.log(Array.of(1,2,3,4,5,6))


// some and every

const ages = [32, 15, 19, 12]

const adultPresent = ages.some(age => age >= 18)
const allOldEnough = ages.every(age => age >= 19)

console.log(adultPmesent)
console.log(allOldEnough)
