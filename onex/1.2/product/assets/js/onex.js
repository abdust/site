/* ======== index ========
1. PREELOADER
2. SCROLL TO
3. NAVBAR
4. ALL DROPDOWN ON HOVER
5. SLICK CAROUSEL
5. TAB
7. WOW JS
8. SCROLL SPY
9. TEXT AND IAMGE ANIMATION
===================== */

(function($) {
	'use strict';

	/*======== 1. PREELOADER ========*/
	$(window).on('load', function () {
		$('#preloader').fadeOut(300);
	});

	/*======== 2. SCROLL TO ========*/
	$(document).ready(function () {
		$('.scrolling  a[href*="#"], .scrolling .btn-scroll-down').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			var target = $(this).attr('href');
			$('.navbar-collapse').removeClass('show');
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

	/*======== 3. NAVBAR ========*/
	$(window).on('load', function(){
		var header_area = $('.header');
		var main_area = header_area.find('.navbar');
		var zero = 0;
		var navbarSticky = $('.navbar-sticky');

		$(window).scroll(function(){
			var st = $(this).scrollTop();
			if (st > zero){
				navbarSticky.addClass('navbar-scrollUp');
			} else {
				 navbarSticky.removeClass('navbar-scrollUp');
			}
			zero = st;

			if(main_area.hasClass('navbar-sticky') && ( $(this).scrollTop() <= 600 || $(this).width() <= 300)){
	      main_area.removeClass('navbar-sticky').appendTo(header_area);
	      header_area.css('height', 'auto');
	    }else if( !main_area.hasClass('navbar-sticky') && $(this).width() > 300 && $(this).scrollTop() > 600 ){
	      header_area.css('height', header_area.height());
	      main_area.addClass('navbar-scrollUp');
	      main_area.css({'opacity': '0'}).addClass('navbar-sticky');
	      main_area.appendTo($('body')).animate({'opacity': 1});
	    }
		});

		if ($(window).width() < 750) {
			$('.navbar-nav.site_nav .nav-item .nav-link').on('click', function(){
				// $('.navbar-collapse.collapse').removeClass('show');
			});
		}
		$(window).trigger('resize');
		$(window).trigger('scroll');
	});

	/*======== 4. ALL DROPDOWN ON HOVER ========*/
	if($('.navbar').width() > 768){
		$('.navbar-nav .dropdown').hover(function() {
			$(this).add($(this).children('.dropdown-menu')).addClass('show');
		},
		function() {
			$(this).add($(this).children('.dropdown-menu')).removeClass('show');
		});
	}


	/*======== 5. SLICK CAROUSEL ========*/
	 // SLIDER ANIMATION
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
		autoplay: true,
 		slidesToScroll: true,
 		arrows: false,
 		dots: true,
 		autoplaySpeed: 5000,
 		speed: 600,
 		fade: true
 	});


	// Testimonial SLider
	$('.testimonial-carouel').slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		speed: 1000
	});

	// Product Slider
	$('.product-slider').slick({
		autoplay: true,
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
					autoplaySpeed: 3000
				}
			}
		]
	});


	/*======== 6. TAB ========*/
	$(function () {
		$('.feature-tabs').on('mouseenter.bs.tab.data-api', '[data-toggle="tab"]', function () {
			$(this).tab('show');
		});
	});

	/*======== 7. WOW JS ========*/
	var wow = new WOW().init();

	/*======== 8. SCROLL SPY ========*/
	$('body').scrollspy({
		target: '#navbarContent',
		spy: 'scroll',
		offset: 130
	});

	/*======== 9. TEXT AND IAMGE ANIMATION ========*/
	$('.rev').waypoint(function () {
		$(this.element).addClass('reveal-text');
		this.destroy;
	}, {
		offset: 'bottom-in-view'
	});

})(jQuery);
