jQuery(document).ready(function(){
  'use strict';
  //============================== MENU SCROLL =========================
   $(window).load(function(){
    $('.body-wrapper').each(function(){
      var header_area = $('.header-wrapper');
      var main_area = header_area.children('.navbar');
      var barHeight = $('.color-bar').height();
      var logo = main_area.find('.navbar-header');
      var navigation = main_area.find('.navbar-collapse');
      var original = {
        nav_top: navigation.css('margin-top')
      };

      $(window).scroll(function(){
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





//============================== header =========================

  //
  // $('.navbar a.dropdown-toggle').on('click', function(e) {
  //     var elmnt = $(this).parent().parent();
  //     if (!elmnt.hasClass('nav')) {
  //         var li = $(this).parent();
  //         var heightParent = parseInt(elmnt.css('height').replace('px', ''),10) / 2;
  //         var widthParent = parseInt(elmnt.css('width').replace('px', ''),10) - 10;
  //
  //         if(!li.hasClass('open')) {
  //           li.addClass('open');
  //         }else {
  //           li.removeClass('open');
  //         }
  //         $(this).next().css('top', heightParent + 'px');
  //         $(this).next().css('left', widthParent + 'px');
  //
  //         return false;
  //     }
  // });

//============================== ALL DROPDOWN ON HOVER =========================
    $('.nav .dropdown').hover(function() {
      $(this).addClass('open');
    },
    function() {
      $(this).removeClass('open');
    }
    );

//============================== BACK TO TOP =========================
    if ($('#backToTop').length) {
      var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#backToTop').css('opacity', 1);
        } else {
          $('#backToTop').css('opacity', 0);
        }
      };
      backToTop();
      $(window).on('scroll', function () {
        backToTop();
      });
      $('#backToTop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 700);
      });
    }

//============================== MAIN SLIDER =========================

  var $heroSlider = $( '.main-slider .inner' );
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
        dots: true,
        navText: [  ],
        autoplay: autoplay,
        autoplayTimeout: interval,
        autoplayHoverPause: true,
        smartSpeed:700
      });
    });
  }

//============================== OWL-CAROUSEL =========================
  var owl = $('.owl-carousel.gallery-slider');
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

    $('.owl-carousel.gallery-slider').owlCarousel({
      rtl: true
    });

    //============================== ACCORDION ====================
    var allIconsOne = $(' #accordionOne .panel-heading i.fa');
    $('#accordionOne .panel-heading').click(function(){
      $(this).removeClass('defult-color');
      allIconsOne.removeClass('fa-angle-down').addClass('fa-angle-up');
      $(this).find('i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    //============================== COUNT INPUT (QUANTITY) ====================
    $('.incr-btn').on('click', function(e) {
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
    $('.select-drop').selectbox();

    //============================== PRICE SLIDER RANGER =========================
    var minimum = 20;
    var maximum = 300;

    $( '#price-range' ).slider({
      range: true,
      min: minimum,
      max: maximum,
      values: [ minimum, maximum ],
      slide: function( event, ui ) {
        $( '#price-amount-1' ).val( '$' + ui.values[ 0 ] );
        $( '#price-amount-2' ).val( '$' + ui.values[ 1 ] );
      }
    });

    $( '#price-amount-1' ).val( '$' + $( '#price-range' ).slider( 'values', 0 ));
    $( '#price-amount-2' ).val( '$' + $( '#price-range' ).slider( 'values', 1 ));

  // ============================== YOUTUBE VIDEO =============================================
    $('.video-box img').click(function(){
      var video = '<iframe class="embed-responsive-item"  allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
      $(this).replaceWith(video);
    });

});
