// TODO: calculate the total cost for each machine in the inventory

// Hint: it might be helpful to use higher-order array methods (say, filter, map, and reduce)
// to compute the total value of the machines in the inventory array.

const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

let totalMachineValue = inventory
    .filter( product => product.type === "machine" )
    .map( product => product.value )
    .reduce( (prev, curr) => prev + curr )

console.log(totalMachineValue)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Accounting
