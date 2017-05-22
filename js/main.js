$(document).ready(function() {
	$('section#screenshots a').on('click', function() {
			$('div#modal img').attr('src', $(this).attr('data-image-url') ); 
	});

	var nav = $('.navbar-fixed-top');
	var distance = $('.navbar-fixed-top').offset();

	if (distance.top >= 300 ) {
		nav.addClass('effect');
	}

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 300) {
			nav.addClass('effect');
		} else {
			nav.removeClass('effect');
		}
	});


	
});

smoothScroll.init({
	speed:700,
	easing: 'easeInOutQuad',
	updateURL: false,
	offset:70
});

$(document).ready(function() { 

$("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
         if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
  });

});