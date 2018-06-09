$(document).ready(function(){

	$(window).load(function() {
	preloaderFadeOutTime = 500;
	function hidePreloader() {
	var preloader = $('.spinner-wrapper');
	preloader.fadeOut(preloaderFadeOutTime);
	}
	hidePreloader();
	});

	$('#disappear').fadeIn(2500);

	$('#shadow').fadeIn(2500);
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$('#disappear').click(function(){
		$(this).fadeOut(500);
	});
	$('#appear').click(function(){
		$('#disappear').fadeIn(500);
	});
});
