/**
 * Created by iho on 24.05.2019.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
   console.log("User connected.");
   socket.on('chat message', function(msg) {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
   });

   socket.on('disconnect', function() {
      console.log("User disconnected.");
   });
});

http.listen(process.env.PORT || 3000, function() {
   console.log('listening on port: ' + process.env.PORT ? process.env.PORT : 3000);
});