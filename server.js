var express = require('express');
var compression = require('compression');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static('./public'));
app.use(compression());

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});