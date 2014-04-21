var io = require('socket.io').listen(3000);
var heart = 0;

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  /*socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.emit('seat1', seat1 );
  socket.on('seat1', function (data) {
    //console.log(data);
    heart++;
    setTimeout( function() { socket.emit('seat1', seat1); }, 500 );
  });*/
  
	socket.on('remote', function (data) {
		console.log(data);
		io.sockets.emit('update', data);
	});
});