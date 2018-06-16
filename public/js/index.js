var socket = io();
        socket.on('connect',function(){
            console.log('Connected to server');

            socket.emit('createEmail',{
                to: '1603@kiit.ac.in',
                from:'prakash@gmail.com'
            });
        });

        socket.on('disconnect',function(){
            console.log("Disconnected from server");
        });

        socket.on('newEmail',function(email){
            console.log(email);
        });