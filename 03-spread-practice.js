// Simplify these three functions by using the spread syntax.

// The first one, replace, replaces part of an array with elements from another
// array.

function replace(array, from, to, elements) {
    array.splice.apply(array, [from, to - from].concat(elements))
}

let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2, 4, [3, 4, 5])
console.log(testArray)

// The second one, copyReplace, does the same, but creates a new array rather
// than modifying its argument.

function copyReplace(array, from, to, elements) {
    return array.slice(0, from).concat(elements).concat(array.slice(to))
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

// The third one is used to record a birdwatcher's sightings. It takes first a
// timestamp (say, a Date), and then any number of strings naming birds. It
// then stores these in the birdsSeen array.

let birdsSeen = []
function recordBirds(time) {
    birdsSeen.push({time, birds: Array.prototype.slice.call(arguments, 1)})
}

recordBirds(new Date, "sparrow", "robin", "pterodactyl")
console.log(birdsSeen)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Spread_out