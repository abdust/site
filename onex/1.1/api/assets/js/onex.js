/* ======== index ========
1. PREELOADER
2. SCROLL TO
3. NAVBAR
4. ALL DROPDOWN ON HOVER
5. SLICK CAROUSEL
6. TAB
7. SCROLL SPY
8. WOW JS
===================== */

(function($) {
	'use strict';

	/*======== 1. PREELOADER ========*/
	$(window).on('load', function () {
		$('#preloader').fadeOut(500);
	});
	
	//============================== CIRCLE PROGRESS =========================
	var warning = '#ffc661';
	var offWhite = '#f5f5f5';
	var success = '#81e88c';
	var successLight = '#6bf4c0';
	var purple = '#a95eff';

	$('.first.circle').circleProgress({
		size: 195,
		thickness: 7,
		value: 0.7,
		emptyFill: [offWhite],
		fill: {
			gradient: [successLight]
		}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
	});
	
	$('.second.circle').circleProgress({
		size: 195,
		thickness: 7,
		value: 0.9,
		emptyFill: [offWhite],
		fill: {
			gradient: [warning]
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
	});

	$('.third.circle').circleProgress({
		size: 195,
		thickness: 7,
		value: 0.75,
		emptyFill: [offWhite],
		fill: {
			gradient: [purple]
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
	});

	$('.forth.circle').circleProgress({
		size: 195,
		thickness: 7,
		value: 1,
		emptyFill: [offWhite],
		fill: {
			gradient: [success]
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
	});

	/*======== 10. SMOOTH SCROLLING TO SECTION ========*/
	$('.scrolling  a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var target = $(this).attr('href');
		$('.navbar-collapse').removeClass('show');
		function customVeocity(set_offset) {
			$(target).velocity('scroll', {
				duration: 800,
				offset: set_offset,
				easing: 'easeOutExpo',
				mobileHA: false
			});
		}

		if ($('#body').hasClass('up-scroll') || $('#body').hasClass('static')) {
			customVeocity(2);
		} else {
			customVeocity(-90);
		}
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
				$('.navbar-collapse.collapse').removeClass('show');
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
	//Product SLider
	$('.product-slider').slick({
		centerMode: true,
		centerPadding: '10px',
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			}
		]
	});

	 // TEAM MEMBER CAROUSEL
	$('.team-carouel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					dots: true
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});

	//TESTIMONIAL CAROUSEL
	$('.testimonial-carousel').slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		speed: 1000
	});

	/*======== 18. COUNTER-UP ========*/
	var counter = $('#counter');
	if (counter.length) {
		var a = 0;
		$(window).scroll(function () {
			var oTop = counter.offset().top - window.innerHeight;
			if (a === 0 && $(window).scrollTop() > oTop) {
				$('.counter-value').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					},
						{
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.floor(this.countNum));
							},
							complete: function () {
								$this.text(this.countNum);
								//alert('finished');
							}

						});
				});
				a = 1;
			}
		});
	}
	
	/*======== 7. SCROLL SPY ========*/
	$('body').scrollspy({
		target: '#navbarContent',
		spy: 'scroll',
		offset: 130
	});

	/*======== 8. WOW JS ========*/
	new WOW().init();

})(jQuery);
