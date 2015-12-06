// Module dependencies.
var express = require('express'),
 compression = require('compression'),
 socket = require('./routes/socket.js');

// Configuration
var app = express();
app.use(compression());
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Routes
app.use('/', express.static('./public'));

// Socket.io Communication
io.on('connection', socket);

// Start server
http.listen(5000, function(){
  console.log('listening on *:5000');
});