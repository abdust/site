(function ($) {
  'use strict';

  //============================== NAVBAR =========================

  $(window).on('load', function () {
    $('#body').each(function () {
      var header_area = $('.header');
      var main_area = header_area.find('.navbar');
      var logo = main_area.find('.site-logo');
      var navigation = main_area.find('.navigation');
      var original = {
        nav_top: navigation.css('margin-top')
      };

      $(window).scroll(function () {
        if (main_area.hasClass('navbar-sticky') && ($(this).scrollTop() <= 100 || $(this).width() <= 750)) {
          main_area.removeClass('navbar-sticky').appendTo(header_area);
          navigation.animate({ 'margin-top': original.nav_top }, {
            duration: 100, queue: false, complete: function () {
              header_area.css('height', 'auto');

            }
          });
        } else if (!main_area.hasClass('navbar-sticky') && $(this).width() > 750 && $(this).scrollTop() > 400) {

          header_area.css('height', header_area.height());
          main_area.css({ 'opacity': '0' }).addClass('navbar-sticky');
          main_area.appendTo($('body')).animate({ 'opacity': 1 });

          navigation.css({ 'margin-top': '0px' });
        }
      });
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

  //============================== ICON TOGGLER ANIMATION =========================

  $('.navbar a.dropdown-toggle').on('click', function (e) {
    var elmnt = $(this).parent().parent();
    if (!elmnt.hasClass('navbar-nav')) {
      var li = $(this).parent();
      var heightParent = parseInt(elmnt.css('height').replace('px', ''), 10) / 2;
      var widthParent = parseInt(elmnt.css('width').replace('px', ''), 10) - 10;

      if (!li.hasClass('show')) { li.addClass('show'); }
      else { li.removeClass('show'); }
      $(this).next().css('top', heightParent + 'px');
      $(this).next().css('left', widthParent + 'px');

      return false;
    }
  });

  //============================== ALL DROPDOWN ON HOVER =========================
  if ($('.navbar').width() > 768) {
    $('.navbar-nav .dropdown').hover(function () {
      $(this).add($(this).children('.dropdown-menu')).addClass('show');
    },
      function () {
        $(this).add($(this).children('.dropdown-menu')).removeClass('show');
      });
  }

    $('.nav-item .search-trigger').click(function () {
      $(".nav-search").toggleClass('show');
    })


  //============================== MAIN SLIDER =========================
  $('#homeCarousel').owlCarousel({
    loop: true,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 1,
        dots: false,
      },
      1000: {
        items: 1
      }
    }
  });
$("#homeCarousel").on('translate.owl.carousel', function(){
  $('.carousel-description').removeClass('animated').hide();
});	

$("#homeCarousel").on('translated.owl.carousel', function(){
  $('.owl-item.active .carousel-description').addClass('animated').show();
});
  //============================== Service Carousel =========================
  $('#service-carousel').owlCarousel({
    loop: true,
    dots: true,
    items: 3,
    margin: 30,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      540: {
        items: 1,
        margin: 20,
      },
      720: {
        items: 2,
      },
      960: {
        items: 3,
      },
      1140: {
        items: 3,
      }
    }
  });

  //============================== Testimonial Carousel =========================
  $(".owl-carousel.testimonial-carousel").owlCarousel({
    loop: true,
    dots: true,
    dotsData: true,
    startPosition:1,
    center: true,
    nav: true,
    navText: ['&#8592;', '&#8594;'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1
      }
    }
  });
//============================== Brand Carousel =========================
  $('#brands').owlCarousel({
    loop: true,
    dots: false,
    items: 4,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      540: {
        items: 2,
        margin: 20,
      },
      720: {
        items: 3,
      },
      960: {
        items: 3,
      },
      1140: {
        items: 4,
        margin: 10,
      }
    }
  });
//============================== Element Carousel =========================
  $('#activeCarousel').owlCarousel({
    loop: true,
    dots: true,
    startPosition:1,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 1,
        dots: false,
      },
      1000: {
        items: 1
      }
    }
  });


  //============================ LAZY LOAD =========================
  var myLazyLoad = new LazyLoad();




  //============================== COUNTER-UP =========================

  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });


  //============================== MAP =========================

  function initialize() {
    var styleArray = [
      {
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#444444'
          }
        ]
      },
      {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [
          {
            'color': '#f2f2f2'
          }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
          {
            'saturation': -100
          },
          {
            'lightness': 45
          }
        ]
      },
      {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [
          {
            'color': '#46bcec'
          },
          {
            'visibility': 'on'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#bfd3e4'
          }
        ]
      }
    ];

    var myLatLng = { lat: 40.6094957, lng: -73.7300059 };

    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: new google.maps.LatLng(40.6094957, -73.7300059),
      styles: styleArray
    };

    var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    var image = 'img/small-img/logo-icons/marker.png';
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  }
  var mapId = $('#googleMap');
  if (mapId.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  //============================== ANIMATION =========================
  var $animation_elements = $('.animated');
  var $window = $(window);

  function check_if_in_view() {
    'use strict';
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      var animationType = $(this).attr("data-animation");

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


  //=========================== FANCYBOX ========================== 

  $('.quick_view').fancybox({
    baseClass: 'quick-view-container',
    infobar: false,
    buttons: false,
    thumbs: false,
    margin: 0,
    touch: {
      vertical: false
    },
    animationEffect: false,
    transitionEffect: 'slide',
    transitionDuration: 500,
    baseTpl:
      '<div class="fancybox-container" role="dialog">' +
      '<div class="quick-view-content">' +
      '<div class="quick-view-carousel">' +
      '<div class="fancybox-stage"></div>' +
      '</div>' +
      '<div class="quick-view-aside"></div>' +
      '<button data-fancybox-close class="quick-view-close">X</button>' +
      '</div>' +
      '</div>',

    onInit: function (instance) {
			/*
			#1 Create bullet navigation links
			=================================
			*/
      var bullets = '<ul class="quick-view-bullets">';

      for (var i = 0; i < instance.group.length; i++) {
        bullets += '<li><a data-index="' + i + '" href="javascript:;"><span>' + (i + 1) + '</span></a></li>';
      }

      bullets += '</ul>';

      $(bullets).on('click touchstart', 'a', function () {
        var index = $(this).data('index');

        $.fancybox.getInstance(function () {
          this.jumpTo(index);
        });

      })
        .appendTo(instance.$refs.container.find('.quick-view-carousel'));
			/*
			#2 Add product form
			===================
			*/
      var $element = instance.group[instance.currIndex].opts.$orig;
      var form_id = $element.data('qw-form');

      instance.$refs.container.find('.quick-view-aside').append(

        // In this example, this element contains the form
        $('#' + form_id).clone(true).removeClass('hidden')
      );
    },
    beforeShow: function (instance) {
			/*
			Mark current bullet navigation link as active
			*/
      instance.$refs.container.find('.quick-view-bullets')
        .children()
        .removeClass('active')
        .eq(instance.currIndex)
        .addClass('active');
    }

  });


})(jQuery);






