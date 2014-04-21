$(function() {
	$('.screens li').first().addClass('active');
	$('.screens > li').click( function() {
		if( $(this).is(':last-child') ) {
			$(this).removeClass('active');
			$('.screens li').first().addClass('active');
		} else {
			$(this).removeClass('active').next().addClass('active');
		}
	});
});