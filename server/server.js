const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');

var server = http.createServer(app);
const port = process.env.PORT || 9000;
var io = socketIO(server);

io.on('connection',(socket)=>{
console.log('New user connected');

socket.on('disconnect',()=>{
    console.log("User was disconnected");
});
   

socket.on('createMessage',(newEmail)=>{
    console.log('creaEmail',newEmail);
    io.emit('newMessage',{
from: message.from,
text: message.text,
createdAt: new Date().getTime()
    });
});

});




app.use(express.static(publicPath));
server.listen(port);