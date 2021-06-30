const { stdin } = require('process')

const setupInput = () => {
  stdin.setRawMode(true)
  stdin.setEncoding('utf8')
  stdin.resume()
  stdin.on('data', handleUserInput)
  return stdin
}

const handleUserInput = (ch) => {
  switch (ch) {
    case '\u0003':
      console.log('Ending game.')
      return process.exit()
  }
}

module.exports = { setupInput }
