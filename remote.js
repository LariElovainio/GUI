var socket;

$(function(){
	socket = io.connect('http://localhost:3000');
	var numberOfPeople = 0;
	var location = {
		lat: '',
		lon: '',
		accuracy: '',
		heading: '',
		elevation: ''
	}

	function successHandler(loc) {
		location.lon = loc.coords.longitude;
		location.lat = loc.coords.latitude;
		location.accuracy = loc.coords.accuracy;
		location.heading = loc.coords.heading;
	}

	function errorHandler(error) {
	    console.log('Attempt to get location failed: ' + error.message);
	}

	navigator.geolocation.getCurrentPosition(successHandler, errorHandler);

	$('input').change( function() {
		if( $(this).hasClass('s1') ) {
			seatNumber = 1;
		} else if ( $(this).hasClass('s2') ) {
			seatNumber = 2;
		} else if ( $(this).hasClass('s3') ) {
			seatNumber = 3;
		} else if ( $(this).hasClass('s4') ) {
			seatNumber = 4;
		} else if ( $(this).hasClass('s5') ) {
			seatNumber = 5;
		}

		var value = $(this).val();

		if( $(this).hasClass('iu') ) {
			feature = 'inUse';
			value = $(this).is(':checked');
			numberOfPeople = $('.iu:checked').size();
		} else if ( $(this).hasClass('hr') ) {
			feature = 'heartRate';
		} else if ( $(this).hasClass('us') ) {
			feature = 'userStatus';
		}

		var general = {
			numberOfPeople: numberOfPeople,
			location: location
		};
		var data = {
			seatNumber: '',
			feature: '',
			value: '',
			general: general
		};
		data.seatNumber = seatNumber;
		data.feature = feature;
		data.value  = value;
		console.log( seatNumber+ ' '+feature+': '+value );
		console.log( data );
		socket.emit('remote', data);
	});
});