const net = require('net')
const { IP, PORT, INITIALS } = require('./constants')

// Establish the connection with the game server
const connect = () => {
  console.log('Connecting ...')
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  })

  // Interpret incoming data as text
  conn.setEncoding('utf8')

  // Create a connection event handler
  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write('Name: ' + INITIALS)
  })

  // Log incoming data
  conn.on('data', (data) => console.log(data))
  return conn
}

// Export the connection function
module.exports = { connect }
