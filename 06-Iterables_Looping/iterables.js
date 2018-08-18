const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

// becareful because it iterates through everthing in the proptotypes

// for (const index in cuts) {
//     console.log(cuts[index])
// }
//

// Best of both world
// for (const cut of cuts) {
//     console.log(cut)
// }

// Iterators
for (const [index, cut] of cuts.entries()) {
    console.log(index, cut)
}

function addUpNumbers() {
    console.log(arguments)
}

addUpNumbers(10,23,45,30)





