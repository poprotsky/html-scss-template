$(document).ready(function(){
	
	
	$('.slider').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		stagePadding: 0,
		navText: ['Poprzedni','Następny'],
		responsiveClass: true,
		responsive: {
			0:{
				items: 1
			},
			600:{
				items: 1
			},
			1000:{
				items: 1
			}
		}
	});
	
	
	minimize();
});

$(window).on('load', function(){
	
});

function minimize()
{
	var scrollOffset = parseInt($('.top').data('minimize-offset')) > 0 ? parseInt($('.top').data('minimize-offset')) : false;
	if (scrollOffset !== false)
	{
		$(window).scroll(function(){
			if ($(window).scrollTop() >= scrollOffset)
				$('body').addClass('minimize');
			else
				$('body').removeClass('minimize');
		}).scroll();
	}
}