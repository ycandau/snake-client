const { stdin } = require('process')

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
setInterval(() => connection.write('Move: ' + dir), 50)

// Handle user keyboard srokes
const handleUserInput = (ch) => {
  switch (ch) {
    case 'w':
      dir = 'up'
      break
    case 'a':
      dir = 'left'
      break
    case 's':
      dir = 'down'
      break
    case 'd':
      dir = 'right'
      break
    case '?':
      return connection.write('Say: Who am I?')
    case '~':
      return connection.write('Say: I am sinuous!')
    case '>':
      return connection.write('Say: Catch me if you can.')
    case 'O':
      return connection.write('Say: Ouroboros')
    case '\u0003':
      console.log('Ending game.')
      return process.exit()
  }
}

// Export the setup function
module.exports = { setupInput }
