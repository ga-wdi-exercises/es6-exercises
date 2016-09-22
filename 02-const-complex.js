// Does the fact that account is constant mean that we can't update password?
// Why, or why not? And if not, how could we make it so that we can't?
// Hint: Thing to google is object freeze

// Answer: In short no, just because account is a constant,
// does not mean we can't update / modify the value in memory.
// The only extra assurances we get is that the variable name account,
// cannot be reassigned. In order to prevent modifying / changing the original
// data structure, we can call Object.freeze(account) to stop any updates
// to that object at that point in time.

const account = {
  username: "marijn",
  password: "xyzzy"
}

account.password = "s3cret" // (*much* more secure)

console.log(account.password)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Constant_non-constance
