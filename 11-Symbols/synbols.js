// unique identifier

const divine = Symbol('divine')
const name = Symbol('divine')

const classRoom = {
    [Symbol('Divine')]: { grade: 50, gender: 'maile'},
    [Symbol('Olivia')]: { grade: 80, gender: 'female'},
    [Symbol('Olivia')]: { grade: 70, gender: 'female'}
}

const syms = Object.getOwnPropertySymbols(classRoom)
const data = syms.map(sym => classRoom[sym])
console.log(data)
