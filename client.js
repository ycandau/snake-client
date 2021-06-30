const net = require('net')

// Establish the connection with the game server
const connect = () => {
  console.log('Connecting ...')
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  })

  // Interpret incoming data as text
  conn.setEncoding('utf8')

  // Create a connection event handler
  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write('Name: YC')
  })

  // Log incoming data
  conn.on('data', (data) => console.log(data))

  return conn
}

// Export the connection function
module.exports = { connect }
