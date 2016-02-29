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

	//============================== Flexslider =========================
	$('.flexslider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    prevText: "",           
    	nextText: ""
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
jQuery(document).ready(function() {
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


