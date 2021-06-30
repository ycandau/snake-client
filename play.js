const net = require('net');

// Establish connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // Interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting ...');
connect();
