const net = require('net')

// Establish connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  })

  // Interpret incoming data as text
  conn.setEncoding('utf8')

  // Log incoming data
  conn.on('data', (data) => console.log(data))

  return conn
}

console.log('Connecting ...')
connect()
