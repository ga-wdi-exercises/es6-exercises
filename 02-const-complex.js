// Does the fact that account is constant mean that we can't update password?
// Why, or why not? And if not, how could we make it so that we can't?
// Hint: Thing to google is object freeze

const account = {
  username: "marijn",
  password: "xyzzy"
}

account.password = "s3cret" // (*much* more secure)

console.log(account.password)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Constant_non-constance