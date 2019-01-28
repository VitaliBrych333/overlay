$('.js-overlay-start').unbind('click').bind('click', function(e) {
	e.preventDefault();
	var src = $(this).attr('data-url');
	$('.overlay-video').show();
	setTimeout(function() {
		$('.overlay-video').addClass('o1');
		$('#player').attr('src', src);
	}, 100);
});

$('.overlay-video').click(function(event) {
	if (!$(event.target).closest('.videoWrapperExt').length) {
		var PlayingVideoSrc = $('#player').attr('src').replace('&autoplay=1', '');
		$('#player').attr('src', PlayingVideoSrc);
		$('.overlay-video').removeClass('o1');
		setTimeout(function() {
			$('.overlay-video').hide();
		}, 600);
	}
});

$('.close').click(function(event) {
		var PlayingVideoSrc = $('#player').attr('src').replace('&autoplay=1', '');
		$('#player').attr('src', PlayingVideoSrc);
		$('.overlay-video').removeClass('o1');
		setTimeout(function() {
			$('.overlay-video').hide();
		}, 600);
});
