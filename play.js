const { stdin } = require('process')
const { connect } = require('./client')

connect()

// setup interface to handle user input from stdin

const setupInput = () => {
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding('utf8')
  stdin.resume()

  stdin.on('data', handleUserInput)
  return stdin
}

const handleUserInput = (ch) => {
  switch (ch) {
    case '\u0003':
      console.log('Thanks for using me, ciao!')
      return process.exit()
  }
}

setupInput()
