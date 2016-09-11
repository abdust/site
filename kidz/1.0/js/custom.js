jQuery(document).ready(function(){

//============================== SELECT BOX =========================
  $('.select-drop').selectbox();

//============================== ALL DROPDOWN ON HOVER =========================
  $('.dropdown').hover(function() {
    $(this).addClass('open');
  },
  function() {
    $(this).removeClass('open');
  }
  );

//============================== Rs-Slider =========================
  jQuery('.fullscreenbanner').revolution({
   delay: 5000,
   startwidth: 1170,
   startheight: 560,
   fullWidth: "on",
   fullScreen: "off",
   hideCaptionAtLimit: "",
   dottedOverlay: "twoxtwo",
   navigationStyle: "preview4",
   fullScreenOffsetContainer: "",
   hideTimerBar:"on"
  });
//============================== OWL-CAROUSEL =========================
  var owl = $('.owl-carousel.teamSlider');
  owl.owlCarousel({
    loop:true,
    margin:28,
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
    moveSlides: 4,
    dots: false,
    responsive:{
      320:{
        items:1
      },
      768:{
        items:3
      },
      992:{
        items:4
      }
    }
  });

  var owl = $('.owl-carousel.commentSlider');
  owl.owlCarousel({
    loop:true,
    margin:28,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    moveSlides: 1,
    dots: false,
    responsive:{
      320:{
        items:1
      },
      768:{
        items:1
      },
      992:{
        items:1
      }
    }
  });
//============================== COUNTER-UP =========================
  $(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  });
//============================== MENU SCROLL =========================
   $(window).scroll(function(){ 
       if ($(this).scrollTop() > 5) 
       { 
           $('#menuBar').addClass("menu-sm");
           $('.navbar-default').addClass("navbar-fixed-top");
           $(".top-info-bar").addClass("height0");
           $(".bannercontainer , .pageTitleSection").addClass("padding-top");
       }
        else { 
           $('#menuBar').removeClass("menu-sm");
           $('.navbar-default').removeClass("navbar-fixed-top");
           $(".top-info-bar").removeClass("height0");
           $(".bannercontainer , .pageTitleSection").removeClass("padding-top");
       } 
   });
  //============================== BACK TO TOP =========================
    $(document).ready(function(){ 
      $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
          $('#backToTop').css("opacity", 1); 
        } else { 
          $('#backToTop').css("opacity", 0); 
        } 
      }); 
    });

  //============================== SMOOTH SCROLLING TO SECTION =========================
  $(document).ready(function () {
    $('.scrolling  a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var target = $(this).attr('href');
      $(target).velocity('scroll', {
        duration: 800,
        offset: -150,
        easing: 'easeOutExpo',
        mobileHA: false
      });
    });
  });

//============================== PRICE SLIDER RANGER =========================
var minimum = 20;
var maximum = 300;

$( "#price-range" ).slider({
  range: true,
  min: minimum,
  max: maximum,
  values: [ minimum, maximum ],
  slide: function( event, ui ) {
    $( "#price-amount-1" ).val( "$" + ui.values[ 0 ] );
    $( "#price-amount-2" ).val( "$" + ui.values[ 1 ] );
  }
});

$( "#price-amount-1" ).val( "$" + $( "#price-range" ).slider( "values", 0 ));
$( "#price-amount-2" ).val( "$" + $( "#price-range" ).slider( "values", 1 ));

//============================== ACCORDION OR COLLAPSE ICON CHANGE =========================
  
    var allIcons = $("#faqAccordion .panel-heading i.fa");
    $('#faqAccordion .panel-heading').click(function(){
      allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsOne = $("#accordionOne .panel-heading i.fa");
    $('#accordionOne .panel-heading').click(function(){
      allIconsOne.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsTwo = $("#accordionTwo .panel-heading i.fa");
    $('#accordionTwo .panel-heading').click(function(){
      allIconsTwo.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsThree = $("#togglesOne .panel-heading i.fa");
    $('#togglesOne .panel-heading').click(function(){
      allIconsThree.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsFour = $("#togglesTwo .panel-heading i.fa");
    $('#togglesTwo .panel-heading').click(function(){
      allIconsFour.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

  //============================== SVG========================

    jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }

          // Replace image with new SVG
          $img.replaceWith($svg);

      }, 'xml');

    });


});