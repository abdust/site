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


});

//============================== Rs-Slider =========================
jQuery(document).ready(function() {
      jQuery('.fullscreenbanner').revolution({
	    delay: 15000,
	    startwidth: 1170,
	    startheight: 500,
	    hideThumbs: 1,
	    fullWidth: "on",
	    fullScreen: "on",
	    hideCaptionAtLimit: "",
	    dottedOverlay: "twoxtwo",
	    navigationStyle: "preview4",
	    fullScreenOffsetContainer: "",
	    hideTimerBar:"on"
	});
});


