$(function(){
	console.log('Starrrt.');
	var socket = io.connect('http://10.100.29.129:3000');
	/*socket.on('news', function (data) {
		console.log(data);
		socket.emit('my other event', { my: 'data' });
	});
	socket.on('hb', function (data) {
		console.log(data);
		var msg = data.hrate;
		console.log( msg );
		var h1 = document.querySelectorAll('h1')[0];
		h1.innerHTML = msg;
		socket.emit('ghb', { hb: msg });
	});*/
	
	var s1 = document.querySelectorAll('#s1')[0];
	socket.on('update', function (data) {
		console.log(data);
		/*var hrate = data.hrate;
		var inuse = data.inuse;
		var hrate = data.heartRate;
		var userstat = data.userstat;
		$(s1).find('.status').text(inuse);
		$(s1).find('.user').text(userstat);
		$(s1).find('.heartrate + dd').text(hrate);
		socket.emit('seat1', { hb: msg });*/
	});
});