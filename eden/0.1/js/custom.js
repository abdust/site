jQuery(document).ready(function(){

	//============================== bxSlider =========================
	$('#footerSlider').bxSlider({
	  mode: 'vertical',
	  slideMargin: 12,
	  auto: true,
  	  autoControls: true,
  	  minSlides: 3,
  	  maxSlides: 3
	});
	$('#testimonialSlider').bxSlider({
	  auto: true,
  	  autoControls: true,
	});

	//============================== Date-picker =========================
	$('.datepicker').datepicker({
	    startDate: "dateToday"
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
	    dottedOverlay: "twoxtwo",
	    navigationStyle: "preview4",
	    fullScreenOffsetContainer: "",
	    hideTimerBar:"on"
	});
});

//============================== Magnific popup =========================
$(function () {
	$('.ajaxpop').magnificPopup({
	    type: 'ajax',
	    callbacks: {
	        parseAjax: function(mfpResponse) {
	            mfpResponse.data = $(mfpResponse.data).find('#slider-container');
	        },
	        ajaxContentAdded: function() {
	            $('.flexslider').flexslider({
	                  animation: "slide"
	             }); 

	         }

	    }
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
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
//============================== Count down =========================
jQuery(document).ready(function() {
	$('#simple_timer').syotimer({
        year: 2016,
        month: 5,
        day: 9,
        hour: 20,
        minute: 30,
    });
});
