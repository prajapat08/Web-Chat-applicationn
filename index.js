   var express = require('express');
   var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
     console.log('sever is running on port 4000, or type localhost:4000');
});

// Static files
       app.use(express.static('public'));

     // Socket setup & pass server
       var io = socket(server);
       io.on('connection', (socket) => {

     console.log('made socket connection', socket.id);

       // Handle chat event
         socket.on('chat', function(data){
        // console.log(data);
         io.sockets.emit('chat', data);
    });

      socket.on('typing',function(data) {
	// body
	     socket.broadcast.emit('typing', data);
});
});
