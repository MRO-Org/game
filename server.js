// Module dependencies.
var express = require('express'),
 compression = require('compression'),
 socket = require('./routes/socket.js');

// Configuration
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(compression());
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Routes
app.use('/', express.static('./public'));

// Socket.io Communication
io.on('connection', socket);

// Start server
var server = http.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});