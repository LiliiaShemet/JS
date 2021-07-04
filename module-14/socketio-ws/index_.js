const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', socket => {
  // console.log(socket.client.conn.id);
  // console.log('a user connected');
  // socket.broadcast.emit('hi');

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
    // console.log(`message: ${JSON.stringify(msg)}`);
  });

  socket.on('disconnect', () => {
    // console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
