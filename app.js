var express = require("express")
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.use(express.static("./client"))

app.get('/', function(req, res){
  res.send({message: "try socket next time"})
});

io.on('connection', function(socket){
  console.log('a user connected', socket.id);
  socket.on('lock', function(msg){
    console.log('lock: ' + msg);
    socket.broadcast.emit("lock now", msg);

  });
  socket.on('unlock', function(msg){
    console.log('unlock: ' + msg);
    socket.broadcast.emit("unlock now", msg);
  });
  socket.on('lock now', function(msg){
    console.log('lock now: ' + msg);
  });
  socket.on('unlock now', function(msg){
    console.log('unlock now: ' + msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});

