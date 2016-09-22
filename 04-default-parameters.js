// The way we previously dealt with optional arguments in JavaScript was with the
// || operator:


var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo: function ( place = "Home" ) {
    this.location = place
  }
}

myRide.driveTo("Walmart")
myRide.location // "Walmart"

// vs...

myRide.driveTo()
myRide.location // "Home"



// TODO: Convert the driveTo method to use correct optional parameters
