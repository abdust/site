jQuery(document).ready(function(){

//============================== SELECT BOX =========================
  $('.select-drop').selectbox();

//============================== ALL DROPDOWN ON HOVER =========================
  $('.dropdown').hover(function() {
    $(this).addClass('open');
  },
  function() {
    $(this).removeClass('open');
  });

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
    margin:18,
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
  $(document).ready(function(){ 
     $(window).scroll(function(){ 
         if ($(this).scrollTop() > 50) { 
             $('#menuBar').css("position", "fixed").addClass("menu-sm"); 
         } else { 
             $('#menuBar').css("position", "relative").removeClass("menu-sm"); 
         } 
     });  
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
     $('#backToTop').click(function(){ 
         $("html, body").animate({ scrollTop: 0 }, 1000); 
         return false; 
     }); 
  });
//============================== SMOOTH SCROLLING TO SECTION =========================
  $("#coursesLink").click(function() {
      $('html, body').animate({
          scrollTop: $("#ourCourses").offset().top
      }, 2000);
  });
  $("#eventsLink").click(function() {
      $('html, body').animate({
          scrollTop: $("#ourEvents").offset().top
      }, 2000);
  });
  $("#galleryLink").click(function() {
      $('html, body').animate({
          scrollTop: $("#ourGallery").offset().top
      }, 2000);
  });
  $("#newsLink").click(function() {
      $('html, body').animate({
          scrollTop: $("#latestNews").offset().top
      }, 2000);
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

  var allIcons = $("#accordionOne .panel-heading i.fa");
  $('#accordionOne .panel-heading').click(function(){
   allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
   $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  });

  var allIcons = $("#accordionTwo .panel-heading i.fa");
  $('#accordionTwo .panel-heading').click(function(){
   allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
   $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  });

  var allIcons = $("#togglesOne .panel-heading i.fa");
  $('#togglesOne .panel-heading').click(function(){
   allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
   $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  });
  
  var allIcons = $("#togglesTwo .panel-heading i.fa");
  $('#togglesTwo .panel-heading').click(function(){
   allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
   $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  });


  





});