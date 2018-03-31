(function($) {
  'use strict'; 
  //============================== PRELOADER =========================
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 3000);

  //============================== NAVBAR =========================
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
        // main_area.removeClass('navbar-scrollUp');
        main_area.removeClass('navbar-sticky').appendTo(header_area);
        header_area.css('height', 'auto');
      }else if( !main_area.hasClass('navbar-sticky') && $(this).width() > 300 && $(this).scrollTop() > 600 ){
        header_area.css('height', header_area.height());
        main_area.addClass('navbar-scrollUp');
        main_area.css({'opacity': '0'}).addClass('navbar-sticky');
        main_area.appendTo($('body')).animate({'opacity': 1});
      }
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });
  //============================== ICON TOGGLER ANIMATION =========================

  $('.navbar a.dropdown-toggle').on('click', function(e) {
    var elmnt = $(this).parent().parent();
    if (!elmnt.hasClass('navbar-nav')) {
      var li = $(this).parent();
      var heightParent = parseInt(elmnt.css('height').replace('px', ''),10) / 2;
      var widthParent = parseInt(elmnt.css('width').replace('px', ''),10) - 10;

      if(!li.hasClass('show')){li.addClass('show');}
      else{ li.removeClass('show');}
      $(this).next().css('top', heightParent + 'px');
      $(this).next().css('left', widthParent + 'px');

      return false;
    }
  });

  //============================== ALL DROPDOWN ON HOVER =========================
  if($('.navbar').width() > 992){
    $('.site_nav.navbar-nav .dropdown').hover(function() {
      $(this).add($(this).children('.dropdown-menu')).addClass('show');
    },
    function() {
      $(this).add($(this).children('.dropdown-menu')).removeClass('show');
    });
  }

  //============================== SEARCH =========================
  (function(b, c, e) {

    $(b).on('click', function() {
      event.preventDefault();
      $(e).addClass('show'), setTimeout(function() {
        $(e + ' > input').focus();
      }, 200);
    }), $(c).on('click', function(event) {
      event.preventDefault();
      $(e).removeClass('show');
    });
  }('.search_btn', '.close-search', '.site_search'));
  //============================== CLOSE CART DROPDOWN =========================

  //============================== IZITOAST =========================
  
  $('[data-toast]').on('click', function() {
    var b = $(this),
    c = b.data('toast-type'),
    d = b.data('toast-icon'),
    e = b.data('toast-position'),
    f = b.data('toast-title'),
    g = b.data('toast-message'),
    h = '';
    switch (e) {
      case 'topRight':
      h = {
        class: 'iziToast-' + c || '',
        title: f || 'Title',
        message: g || 'toast message',
        animateInside: !1,
        position: 'topRight',
        progressBar: !1,
        icon: d,
        timeout: 3200,
        transitionIn: 'fadeInLeft',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      };
      break;
      case 'bottomRight':
      h = {
        class: 'iziToast-' + c || '',
        title: f || 'Title',
        message: g || 'toast message',
        animateInside: !1,
        position: 'bottomRight',
        progressBar: !1,
        icon: d,
        timeout: 3200,
        transitionIn: 'fadeInLeft',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      };
      break;
      case 'topLeft':
      h = {
        class: 'iziToast-' + c || '',
        title: f || 'Title',
        message: g || 'toast message',
        animateInside: !1,
        position: 'topLeft',
        progressBar: !1,
        icon: d,
        timeout: 3200,
        transitionIn: 'fadeInRight',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      };
      break;
      case 'bottomLeft':
      h = {
        class: 'iziToast-' + c || '',
        title: f || 'Title',
        message: g || 'toast message',
        animateInside: !1,
        position: 'bottomLeft',
        progressBar: !1,
        icon: d,
        timeout: 3200,
        transitionIn: 'fadeInRight',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      };
      break;
      case 'topCenter':
      h = {
        class: 'iziToast-' + c || '',
        title: f || 'Title',
        message: g || 'toast message',
        animateInside: !1,
        position: 'topCenter',
        progressBar: !1,
        icon: d,
        timeout: 3200,
        transitionIn: 'fadeInDown',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      };
      break;
      case 'bottomCenter':
      h = {
        class: 'iziToast-' + c || '',
        title: f || 'Title',
        message: g || 'toast message',
        animateInside: !1,
        position: 'bottomCenter',
        progressBar: !1,
        icon: d,
        timeout: 3200,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      };
      break;
      default:
      h = {
        class: 'iziToast-' + c || '',
        title: f || 'Title',
        message: g || 'toast message',
        animateInside: !1,
        position: 'topRight',
        progressBar: !1,
        icon: d,
        timeout: 3200,
        transitionIn: 'fadeInLeft',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      };
    }
    iziToast.show(h);
  });

  $('.btn-wishlist').on('click', function(e) {
    e.preventDefault();
    var b = $(this).data('iteration') || 1,
    c = {
      title: 'Product',
      animateInside: !1,
      position: 'topRight',
      progressBar: !1,
      timeout: 3200,
      transitionIn: 'fadeInLeft',
      transitionOut: 'fadeOut',
      transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut'
    };
    switch (b) {
      case 1:
      $(this).addClass('active'), c.class = 'iziToast-info', c.message = 'added to your wishlist!', c.icon = 'fa fa-bell-o';
      break;
      case 2:
      $(this).removeClass('active'), c.class = 'iziToast-danger', c.message = 'removed from your wishlist!', c.icon = 'fa fa-close'
    }
    iziToast.show(c), b++, b > 2 && (b = 1), $(this).data('iteration', b);
  });

  //============================== MAIN SLIDER =========================
  $('#cdot-carousel').owlCarousel({
    margin:0,
    loop:true,
    autoplay: true,
    dotsData: true,
    autoplayTimeout: 6000,
    items: 1
  });

  $('#img-carousel').owlCarousel({
    margin:0,
    loop:true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    items: 1
  });
  
  //============================== CATEGORY SLIDER =========================
  $('#image-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    responsive:{
      320:{
        margin:0,
        items:1
      },
      480:{
        margin:10,
        items:2
      },
      991:{
        items:3
      }
    }
  });
  //============================== BRAND SLIDER =========================
  $('#brands').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplayTimeout: 3000,
    nav:false,
    dots: false,
    responsiveClass: true,
    responsive:{
      0:{
        items:2
      },
      768:{
        items:3
      },
      992:{
        items:4
      }
    }
  });
  //============================== ABOUT SLIDER =========================
  $('#testimonial').owlCarousel({
    margin:0,
    loop:true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 6000,
    items: 1
  });

  //============================== PRODUCT SINGLE SLIDER =========================
  (function ($) {
    $('#thumbcarousel').carousel(0);
    var $thumbItems = $('#thumbcarousel .item');
    $('#carousel').on('slide.bs.carousel', function (event) {
      var $slide = $(event.relatedTarget);
      var thumbIndex = $slide.data('thumb');
      var curThumbIndex = $thumbItems.index($thumbItems.filter('.active').get(0));
      if (curThumbIndex > thumbIndex) {
        $('#thumbcarousel').one('slid.bs.carousel', function (event) {
          $('#thumbcarousel').carousel(thumbIndex);
        });
        if (curThumbIndex === ($thumbItems.length - 1)) {
          $('#thumbcarousel').carousel('next');
        } else {
          $('#thumbcarousel').carousel(numThumbItems - 1);
        }
      } else {
        $('#thumbcarousel').carousel(thumbIndex);
      }
    });
  })(jQuery);

  //============================== PRICE SLIDER RANGER =========================
  var minimum = 50;
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

  //============================== CIRCLE PROGRESS =========================

  var el = $('.circle1'),
  inited = false;

  el.appear({ force_process: true });

  el.on('appear', function() {
    if (!inited) {
      el.circleProgress({
        size : 150
      });
      inited = true;
    }
  });

  //============================== VIDEOBOX =========================
  var videoBox = $('.video-box i');
  videoBox.on('click', function(){
    var video = '<iframe class="embed-responsive-item"  allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
    $(this).replaceWith(video);
  });


  //============================ LAZY LOAD =========================
  var myLazyLoad = new LazyLoad();

  //============================== SELECT BOX =========================
  $('.select-drop').selectbox();

  //============================== VIDEO BOX =========================
  $('.box-video').click(function(){
    $('iframe',this)[0].src += '&amp;autoplay=1';
    $(this).addClass('open');
  });

  //============================== TIMER =========================
  $('.simple_timer').syotimer({
    year: 2018,
    month: 5,
    day: 9,
    hour: 20,
    minute: 30
  });

  //============================== COUNTER-UP =========================

  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  //============================== ANIMATION =========================
  var $animation_elements = $('.animated');
  var $window = $(window);

  function check_if_in_view() {
    
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      var animationType = $(this).attr('data-animation');

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.addClass(animationType);
      } else {
        $element.removeClass(animationType);
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  //====================== STAR RATING ======================= 
  var br = $('.rating');
  if (br.length) {  
    br.barrating({
      theme: 'fontawesome-stars-o'
    });
  }
  //====================== INCREMENT BUTTON ======================= 

  $('.incr-btn').on('click', function(e) {
    var $button = $(this);
    var newVal;
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

  //=========================== INSTAFEED ========================== 
  var instaFeed = new Instafeed({
    get: 'user',
    userId: '217943085',
    limit: 6,
    resolution: 'standard_resolution',
    accessToken: '217943085.4259dde.7b994116887e4eb0abbbe2b856277749',
    sortBy: 'most-recent',
    template:   `<li class="col-6 col-md-4 col-lg">
    <div class="gallery-item">
    <a href="{{image}}" data-fancybox="group" title="{{caption}}" target="_blank">
    <img src="{{image}}" style="{{width}}" alt="{{caption}}" class="img-fluid"/>
    </a>
    </div>
    </li>`
  });
  
  if($('#instafeed').length) {
    instaFeed.run();
  }
  //=========================== BACK TO TOP ========================== 
  var amountScrolled = 200;
  var amountScrolledNav = 25;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('button.back-to-top').addClass('show');
    } else {
      $('button.back-to-top').removeClass('show');
    }
  });

  $('button.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

})(jQuery);
