//============================== Style Switcher =========================
jQuery(document).ready(function() {
    OptionSwitcher.initOptionSwitcher();      
});

jQuery(document).ready(function(){

	//============================== header =========================

	jQuery(document).ready(function($) {

	    // Fixa navbar ao ultrapassa-lo
	    var navbar = $('.navbar-main'),
	    		distance = navbar.offset().top,
	        $window = $(window);

		    $window.scroll(function() {
		    	if(($window.scrollTop() >= distance) && ($(".navbar-default").hasClass("navbar-main")))
		        {
		            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
		          	$("body").css("padding-top", "0px");
		        } else {
		            navbar.removeClass('navbar-fixed-top');
		            $("body").css("padding-top", "0px");
		        }
		    });
		
	});

	//============================== bxSlider =========================
	$('#footerSlider').bxSlider({
	  mode: 'vertical',
	  slideMargin: 12,
	  auto: true,
  	  autoControls: true,
  	  minSlides: 3,
  	  maxSlides: 3
	});
	

	//============================== Date-picker =========================
	$('.ed-datepicker').datepicker({
	    startDate: "dateToday",
		autoclose: true
	});

	//============================== Filter =========================
	$('.filter-container').mixItUp();

	//============================== Booking bar =========================
	
	$('.ed-booking-tab  ul > li:nth-child(1)').click(function () {
		var $this = $(this);
		if ($this.hasClass('ed-done')) {
			$this.removeClass('ed-done').siblings().removeClass('ed-done');
		}
	});
	$('.ed-booking-tab  ul > li:nth-child(2)').click(function () {
		var $this = $(this);
		$this.prev('li').addClass('ed-done');
		$this.next('li').removeClass('ed-done');
		if ($this.hasClass('ed-done')) {
			$this.removeClass('ed-done');
		}
	});
	$('.ed-booking-tab  ul > li:nth-child(3)').click(function () {
		$(this).siblings().addClass('ed-done');
		
		if ($('.ed-booking-tab  ul > li:nth-child(3)').hasClass('ed-done')) {
			$(this).removeClass('ed-done');
		}
	});

	//============================== Select room =========================
	$('.ed-room-select').click(function (e) {
		e.preventDefault();
		$(this).children().toggleClass('ed-room-select-fill');
	});

});

//============================== Rs-Slider =========================
jQuery(document).ready(function() {
      jQuery('.fullscreenbanner').revolution({
	    delay: 5000,
	    startwidth: 1170,
	    startheight: 500,
	    fullWidth: "on",
	    fullScreen: "on",
	    hideCaptionAtLimit: "",
	    navigationStyle: "preview4",
	    fullScreenOffsetContainer: "",
	    hideTimerBar:"on",
	});
});

//============================== Magnific popup =========================
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		closeBtnInside: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

//============================== Flexslider =========================
$(window).load(function() {
	$('#single-slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    prevText: "",           
    	nextText: ""
	});

	$('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 210,
	    itemMargin: 5,
	    asNavFor: '#slider'
	});
	 
	$('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
	});
});

$(window).load(function() {
  $('#testimonialSlider').flexslider({
    animation: "slide"
  });
});

//============================== Count down =========================
jQuery(document).ready(function() {
	$('#simple_timer').syotimer({
        year: 2017,
        month: 5,
        day: 9,
        hour: 20,
        minute: 30,
    });
});

jQuery(document).ready(function() {
	$('#input-id').rating('update', 1);
});

//================================ zopim live chat ==================================
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="//v2.zopim.com/?OsxjyZjGcD9KEceHsAC5toZnWGB0LVTM";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

//================================ Google Analytics ==================================

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71155940-2', 'auto');
ga('send', 'pageview');
