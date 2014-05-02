$(function() {
	console.log('koira');
	var nav = '<nav><a href="#s1">To Screen 1</a> <a href="#s2">To Screen 2</a> <a href="#s3">To Screen 3</a> <a href="#s4">To Screen 4</a> <a href="#s5">To Screen 5</a> <a href="#s6">To Screen 6</a></nav>';

	var prev = '<a href="#" class="nav prev">‹</a>';
	var next = '<a href="#" class="nav next">›</a>';

	$('article').each( function() {
		//$(this).append( nav );
		var num = parseInt(this.id.substr(1));
		if( num > 1 ) {
			var prevNum = num-1;
			$(this).prepend( prev );
			$(this).find('a.prev').attr('href', '#s'+prevNum);
		}
		if ( num < 5 ) {
			var nextNum = num+1;
			$(this).append( next );
			$(this).find('a.next').attr('href', '#s'+nextNum);
		}
	});
});