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
						header_area.css('height', 'auto');
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



	/*======== 3. SLICK CAROUSEL ========*/
	 // Banner Style


	// Testimonial SLider
	$('.testimonial').slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		speed: 1000
	});

	// Product Slider
	$('.product-slider').slick({
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		centerPadding: '100px',
		autoplaySpeed: 5000,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					autoplay: true,
					autoplaySpeed: 3000
				}
			}
		]
	});


	/*======== 4. TAB ========*/
	$('.nav-tabs > li').mouseover( function(){
    $(this).find('a').tab('show');
  });
  $('.nav-tabs > li').mouseout( function(){
    $(this).find('a').tab('hide');
  });

	/*======== 5. WOW JS ========*/
	new WOW().init();

	/*======== 6. SCROLL SPY ========*/
	$('body').scrollspy({
		target: '#navbarContent',
		spy: 'scroll',
		offset: 130
	})

/* SLIDER ANIMATION*/
	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function() {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function() {
				$this.removeClass($animationType);
			});
		});
	}


	$('#banner-style-one').on('init', function(e, slick) {
		var $firstElements = $('.slide1').find('[data-animation]');
		doAnimations($firstElements);
	});

	$('#banner-style-one').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('div.slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});







	$('#banner-style-one').slick({
		slidesToScroll: true,
		autoplay: true,
		arrows: false,
		dots: true,
		autoplaySpeed: 3000,
		speed: 3000,
		fade: true
	});


})(jQuery);
