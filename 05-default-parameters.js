  /*
   * Write a function that takes 3 parameters:
   * greeting, firstName, and lastName
   *

   * Set the default values to 'hello', your first and last name,
   * if no input is provided
   */

   function greeting (greeting = "hello", first = "Nick", last = "Olds") {
     return greeting + ", " + first + " " + last
   }
   console.log(greeting()); // "hello, Nick Olds"
   console.log(greeting('hi', 'harry', 'hedger')); // "hi, harry hedger"
