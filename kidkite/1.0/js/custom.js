jQuery(document).on('ready', function(){
  'use strict';
  //============================== MENU SCROLL =========================
   $(window).on('load', function(){
    $('.body-wrapper').each(function(){
      var header_area = $('.header-wrapper');
      var main_area = header_area.children('.navbar');
      var barHeight = $('.color-bar').height();
      var logo = main_area.find('.navbar-header');
      var navigation = main_area.find('.navbar-collapse');
      var original = {
        nav_top: navigation.css('margin-top')
      };

      $(window).on('scroll', function(){
        if( main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() === 0 || $(this).width() < 750)){
          main_area.removeClass('bb-fixed-header').appendTo(header_area);
          main_area.css('margin-top', barHeight);
          navigation.animate({'margin-top': original.nav_top}, {duration: 300, queue: false, complete: function(){
            header_area.css('height', 'auto');
          }});
        }else if( !main_area.hasClass('bb-fixed-header') && $(this).width() > 750 &&
          $(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top'), 10) ){

          header_area.css('height', header_area.height());
          main_area.css({'opacity': '0'}).addClass('bb-fixed-header');
          main_area.appendTo($('body')).animate({'opacity': 1});
          main_area.css('margin-top', -barHeight);

          navigation.css({'margin-top': '0px'});
        }
      });
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

//============================== ALL DROPDOWN ON HOVER =========================
  var navDropdown = $('.nav .dropdown');
  navDropdown.hover(function(){
    $(this).addClass('open');
  }, function(){
    $(this).removeClass('open');
  });
//============================== BACK TO TOP =========================
  var backtoTop = $('#backToTop');
  if (backtoTop.length) {
    var scrollTrigger = 100, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        backtoTop.css('opacity', 1);
      } else {
        backtoTop.css('opacity', 0);
      }
    };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    backtoTop.on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({scrollTop: 0}, 700);
    });
  }

//============================== MAIN SLIDER =========================

  var $heroSlider = $( '#banner-slider-holder' );
  if ( $heroSlider.length > 0 ) {
    $heroSlider.each( function () {

    var loop = $(this).parent().data('loop'),
        autoplay = $(this).parent().data('autoplay'),
        interval = $(this).parent().data('interval') || 3000;

      $(this).owlCarousel({
        items: 1,
        loop: loop,
        margin: 0,
        nav: true,
        dots: false,
        navText: [  ],
        autoplay: autoplay,
        autoplayTimeout: interval,
        autoplayHoverPause: true,
        smartSpeed:700
      });
    });
  }

//============================== OWL-CAROUSEL FOR GALLERY SLIDER =========================
  var owl = $('#gallery-slider-holder');
    owl.owlCarousel({
      loop:true,
      margin:28,
      autoplay:true,
      autoplayTimeout:6000,
      autoplayHoverPause:true,
      nav:true,
      dots: false,
      smartSpeed:500,
      responsive:{
        320:{
          slideBy: 1,
          items:1
        },
        768:{
          slideBy: 1,
          items:3
        },
        992:{
          slideBy: 1,
          items:5
        }
      }
    });

    owl.owlCarousel({
      rtl: true
    });

    //============================== Google Analytics =========================
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-71155940-11', 'auto');
    ga('send', 'pageview');

  	  //============================== getsitecontrol =========================
  	  (function (w,i,d,g,e,t,s) {w[d] = w[d]||[];t= i.createElement(g);
  	    t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t, s);
  	  })(window, document, '_gscq','script','//widgets.getsitecontrol.com/46851/script.js');

    //============================== ACCORDION ====================

    var accordionPanel = $('.panel-heading');
    accordionPanel.on('click', function(){
      $(this).removeClass('defult-color');
    });

    //============================== COUNT INPUT (QUANTITY) ====================
    var incrBtn = $('.incr-btn');
    incrBtn.on('click', function(e) {
      var newVal;
      var $button = $(this);
      var oldValue = $button.parent().find('.quantity').val();
      $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
      if ($button.data('action') === 'increase') {
        newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below 1
        if (oldValue > 1) {
          newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
          $button.addClass('inactive');
        }
      }
      $button.parent().find('.quantity').val(newVal);
      e.preventDefault();
    });

    //============================== SELECT BOX =========================
    var selectDrop = $('.select-drop');
    selectDrop.selectbox();

    //============================== PRICE SLIDER RANGER =========================
    var minimum = 20,
        maximum = 300,
        priceRange = $( '#price-range' ),
        price1 = $('#price-amount-1'),
        price2 = $('#price-amount-2');

    priceRange.slider({
      range: true,
      min: minimum,
      max: maximum,
      values: [ minimum, maximum ],
      slide: function( event, ui ) {
        price1.val( '$' + ui.values[ 0 ] );
        price2.val( '$' + ui.values[ 1 ] );
      }
    });

    price1.val( '$' + priceRange.slider( 'values', 0 ));
    price2.val( '$' + priceRange.slider( 'values', 1 ));

  // ============================== YOUTUBE VIDEO =============================================
    var videoBox = $('.video-box img');
    videoBox.on('click', function(){
      var video = '<iframe class="embed-responsive-item"  allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
      $(this).replaceWith(video);
    });

});
