/* ======== index ========
1. SCROLL TO
2. NAVBAR
3. SLICK CAROUSEL
4. TAB
5. WOW JS
6. SCROLL SPY
===================== */

(function($) {
	'use strict';
	/*======== 1. SCROLL TO ========*/
	$(document).ready(function () {
		$('.scrolling  a[href*="#"], .scrolling .btn-scroll-down').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			var target = $(this).attr('href');
			if ($(window).width() < 767) {
			  $(target).velocity('scroll', {
					duration: 800,
					offset: -70,
					easing: 'easeOutExpo',
					mobileHA: false
				});
			} else if($(window).width() >= 768) {
				$(target).velocity('scroll', {
					duration: 800,
					offset: -88,
					easing: 'easeOutExpo',
					mobileHA: false
				});
			}
		});
	});

	/*======== 2. NAVBAR ========*/
	jQuery(document).ready(function(a) {
		var b = 1170;
		if (a(window).width() > b) {
			var c = a('.navbar-scrollUp').height();
			a(window).on('scroll', {
				previousTop: 0
			}, function() {
				var b = a(window).scrollTop();
				b < this.previousTop ? b > 0 && a('.navbar-scrollUp').hasClass('is-fixed') ? a('.navbar-scrollUp').addClass('is-visible') : a('.navbar-scrollUp').removeClass('is-visible is-fixed') : (a('.navbar-scrollUp').removeClass('is-visible'), b > c && !a('.navbar-scrollUp').hasClass('is-fixed') && a('.navbar-scrollUp').addClass('is-fixed')), this.previousTop = b;
			});
		}
	});
	$(window).on('load', function(){
		$('#body').each(function(){
			var header_area = $('.header');
			var main_area = header_area.find('.navbar');

			$(window).scroll(function(){
				if( main_area.hasClass('navbar-sticky') && ($(this).scrollTop() <= 100 ) ){
					main_area.removeClass('navbar-sticky').appendTo(header_area);
						// header_area.css('height', 'auto');
				}else if( !main_area.hasClass('navbar-sticky') && $(this).scrollTop() > 400 ){

					header_area.css('height', header_area.height());
					main_area.css({'opacity': '0'}).addClass('navbar-sticky');
					main_area.appendTo($('body')).animate({'opacity': 1});
				}
			});
		});

		$(window).trigger('resize');
		$(window).trigger('scroll');
	});

	/*======== 7. OWL CAROUSEL ========*/
	$('.product-slider').owlCarousel({
			 loop: true,
			 responsiveClass: true,
			 margin: 50,
			 autoplay: false,
			 autoplayTimeout: 4000,
			 smartSpeed: 1000,
			 center: true,
			 dots: true,
			 responsive: {
				 0: {
						 items: 1,
				 },
				 768: {
						 items: 3,
						 dots: true,
				 },
				 1200: {
						 items: 3,
						 dots: true,
				 }
			 }
	 });

	 // TEAM
	$('.team-carouel').owlCarousel({
			 loop: true,
			 responsiveClass: true,
			 margin: 50,
			 autoplay: true,
			 autoplayTimeout: 4000,
			 smartSpeed: 1000,

			 responsive: {
					 0: {
							 items: 1,
					 },
					 600: {
							 items: 3
					 },
					 1200: {
							 items: 4
					 }
			 }
	 });

	 $('.testimonial-carousel').owlCarousel({
		 loop: true,
		 responsiveClass: true,
		 margin: 50,
		 autoplay: false,
		 autoplayTimeout: 4000,
		 smartSpeed: 1000,
		 nav:true,
		 navText : ['<i class="arrow_carrot-left"></i>','<i class="arrow_carrot-right"></i>'],
		 controlsClass: 'owl-controls',
		 responsive: {
			 0: {
				 items: 1,
			 },
			 600: {
				 items: 1
			 },
			 1200: {
				 items: 1
			 }
		 }
	 });

	/*======== 4. TAB ========*/
	$(function () {
		$(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
		$(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function () {
			$(this).tab('show');
		});
	});

	/*======== 5. WOW JS ========*/
	new WOW().init();

	/*======== 6. SCROLL SPY ========*/
	$('body').scrollspy({
		target: '#navbarContent',
		spy: 'scroll',
		offset: 130
	});

})(jQuery);
