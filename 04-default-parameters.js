// The way we previously dealt with optional arguments in JavaScript was with the
// || operator:


function Car(make, model, wheels){
  this.make = make
  this.model = model
  this.wheels = wheels || 4
}

let honda = new Car("Honda", "Civic")
honda.wheels

// vs...

let jalopy = new Car("Ford","Model T",0)
jalopy.wheels

// Because 0 is a falsy value in JavaScript, 4 is used.
// Convert the constructor function to use correct optional parameters
// Bonus! Can you think of a way to handle falsy values and the || operator?
// with ES5 style optional arguments?
