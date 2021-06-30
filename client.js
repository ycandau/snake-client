const net = require('net')

// Establish connection with the game server
const connect = () => {
  console.log('Connecting ...')

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  })

  // Interpret incoming data as text
  conn.setEncoding('utf8')

  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write('Name: YC')
  })

  conn.on('connect', () => {
    const move = (dir) => () => conn.write('Move: ' + dir)
    setInterval(move('up'), 50)
  })

  // Log incoming data
  conn.on('data', (data) => console.log(data))

  return conn
}

module.exports = { connect }
