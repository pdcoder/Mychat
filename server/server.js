const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
var {generateMessage} = require('./utils/message');
var server = http.createServer(app);
const port = process.env.PORT || 9000;
var io = socketIO(server);

io.on('connection',(socket)=>{
console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin','New user joined'));
    

    socket.on('createMessage',(message,callback)=>{
    console.log('createMessage',message);
        io.emit('newMessage',generateMessage(message.from,message.text));
        callback("This is from the server");
    });


socket.on('disconnect',()=>{
    console.log("User was disconnected");
});
   
});




app.use(express.static(publicPath));
server.listen(port);