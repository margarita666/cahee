'use strict';

(function($){
	$(document).ready(function() {
		// Code
		// Mobile menu
		$('.burger-menu').click(function() {
			$(this).toggleClass('burger-menu--active');
			$('body').toggleClass('is-menu-shown');
		});
		//SLIDER
		$('.slider').slick();
		//$('.menu__link')
	});
})(jQuery);
