const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();

const {generateMessage} = require('./util/message');
app.use(express.static(publicPath));
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('admin', 'Welcome to the chat application'));

  socket.broadcast.emit('newMessage', generateMessage('admin', 'New user joined'));

  socket.on('newMessage', (message) => {
    console.log('newMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
  });


  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is on at ${port}`);
});
