jQuery(document).ready(function(){

//============================== SELECT BOX =========================
  $('.select-drop').selectbox();

//============================== header =========================

  $('.navbar a.dropdown-toggle').on('click', function(e) {
      var elmnt = $(this).parent().parent();
      if (!elmnt.hasClass('nav')) {
          var li = $(this).parent();
          var heightParent = parseInt(elmnt.css('height').replace('px', '')) / 2;
          var widthParent = parseInt(elmnt.css('width').replace('px', '')) - 10;
          
          if(!li.hasClass('open')) li.addClass('open')
          else li.removeClass('open');
          $(this).next().css('top', heightParent + 'px');
          $(this).next().css('left', widthParent + 'px');
          
          return false;
      }
  });

  //============================== ALL DROPDOWN ON HOVER =========================
  jQuery(document).ready(function(){
    if($(".navbar").width() > 1007)
    {
      $('.nav .dropdown').hover(function() {
            $(this).addClass('open');
        },
        function() {
            $(this).removeClass('open');
        });
    };
  });

//============================== BACK TO TOP =========================
  $(document).ready(function(){ 
    $(window).scroll(function(){ 
      if ($(this).scrollTop() > 10) { 
        $('.backToTop').css("opacity", 1); 
      } else { 
        $('.backToTop').css("opacity", 0); 
      } 
    }); 
  });


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
        navText: [ , ],
        autoplay: autoplay,
        autoplayTimeout: interval,
        autoplayHoverPause: true,
        smartSpeed:700,
      });
    });
  } 

//============================== OWL-CAROUSEL =========================


  var owl = $('.owl-carousel.partnersLogoSlider');
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
          items:4
        }
      }
    });

//============================== EXPERT SLIDER =========================
    $(document).ready(function() {
      $('#myCarousel').carousel({ interval: 3000, cycle: true });
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












  





});