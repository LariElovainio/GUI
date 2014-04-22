var lat = -34.397;
var lon = 150.644;

$(function(){
	console.log('Starrrt.');
	//var socket = io.connect('http://localhost:3000');
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
		if( ! data.seatNumber || ! data.feature ) {
			console.log('Error: Bad data!');
		}
		$('#s'+data.seatNumber).find('.'+data.feature).text(data.value);
		if( data.feature == 'inUse' && data.value == true ) {
			$('#s'+data.seatNumber).find('dl').removeClass('inactive');
		} else if( data.feature == 'inUse' && data.value == false ) {
			$('#s'+data.seatNumber).find('dl').addClass('inactive');
		}
		if( data.feature == 'heartRate' ) {
			if ( data.value > 180 || data.value < 40 ) {
				$('#s'+data.seatNumber).find('dl').addClass('warning');

			} else {
				$('#s'+data.seatNumber).find('dl').removeClass('warning');
			}
		}
		if( data.general.numberOfPeople ) {
			$('.numberOfPeople').text( data.general.numberOfPeople );
		} else {
			$('.numberOfPeople').text( '0' );
		}
		if( data.general.location ) {
			lat = data.general.location.lat;
			lon = data.general.location.lon;
			$('.lat').text(  lat.toFixed(5) );
			$('.lon').text( lon.toFixed(5) );
			initialize();
		} else {
			$('.lat').text( '' );
			$('.lon').text( '' );
		}

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

var map;
function initialize() {
	var latlng = new google.maps.LatLng(lat, lon);
	var mapOptions = {
		zoom: 13,
		center: latlng
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
	    position: latlng,
	    map: map,
		animation: google.maps.Animation.DROP,
	    title:"Crash site"
	});
}

google.maps.event.addDomListener(window, 'load', initialize);