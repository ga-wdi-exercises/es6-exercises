// The detectCollision function searches through an array of rectangles and
// returns the first rectangle that the given point is inside of.

// Use destructuring to make this code cleaner.

// destructuring solution
const rectangles = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5}
]

let point = {x: 4, y: 2}

function detectCollision(rectangles, point) {
  let {x: pointX, y: pointY } = point

  for (let i = 0; i < rectangles.length; i++) {
    let { x, y, width, height } = rectangles[i]
    if (pointX >= x && pointX <= x + width && pointY >= y && pointY <= y + height) {
      return rectangles[i]
    }
  }
}

console.log(detectCollision(rectangles, point))


// Bonus: instead of using a for loop, use a higher-order function, i.e. .find, .reduce, .filter to
// help clean up the code

// Bonus solution
const rectangles = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5}
]

let point = {x: 4, y: 2}

function detectCollision(rectangles, {x: pointX, y: pointY}) {
  return rectangles.filter( function ({ x, y, width, height }) {
    (pointX >= x && pointX <= x + width && pointY >= y && pointY <= y + height)
  })
}

console.log(detectCollision(rectangles, point))

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Improve_this_code
