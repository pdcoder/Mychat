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
   
socket.on('createEmail',(newEmail)=>{
    console.log('creaEmail',newEmail);
});
socket.emit('newEmail',{
from: 'prakash@gmail.com',
to: '16383@kiit.ac.in'
});
});




app.use(express.static(publicPath));
server.listen(port);