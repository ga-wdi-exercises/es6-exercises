// Fill in the following function with a single object literal

function car(make, model, options){
  return {
    make,
    model,
    drive() {
      console.log("Vroom");
    }
  }
}

let auto = car("honda","civic")
// => {make: "honda", model: "civic", drive: Function}
auto.drive()
// => vroom
