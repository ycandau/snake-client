const { stdin } = require('process')
const { INTERVAL, DIRECTIONS, MESSAGES } = require('./constants')

// Connection object from the client module
let connection

// Initialize a stdin object for user input
const setupInput = (conn) => {
  stdin.setRawMode(true)
  stdin.setEncoding('utf8')
  stdin.resume()

  // Store the connection object for module scope
  connection = conn

  // Create an event handler for user keyboard strokes
  stdin.on('data', handleUserInput)
  return stdin
}

// Initialize the direction
let dir = 'up'

// Schedule repeated move messages to the server
setInterval(() => connection.write('Move: ' + dir), INTERVAL)

// Handle user keyboard srokes
const handleUserInput = (ch) => {
  if (ch in DIRECTIONS) return (dir = DIRECTIONS[ch])
  if (ch in MESSAGES) return connection.write('Say: ' + MESSAGES[ch])
  if (ch === '\u0003') {
    console.log('Ending game.')
    return process.exit()
  }
}

// Export the setup function
module.exports = { setupInput }
