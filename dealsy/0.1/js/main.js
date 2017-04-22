$(document).ready(function(){
    //============================== OWL-CAROUSEL =========================
  $('.owl-carousel').owlCarousel({
    items:6,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoHeight:false,
    dots:false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }

  });
  //============================== SELECT BOX =========================
  $('.select-drop').selectbox();

  //============================== Top Nav Search BOX =========================
  $(".nav-search-link").click(function(){
       $(".nav-search").toggle();
   });

  //============================== BACK TO TOP =========================
  $(window).scroll(function(){
     if ($(this).scrollTop() > 10) {
       $('.backToTop').css('opacity', 1);
     } else {
       $('.backToTop').css('opacity', 0);
     }
   });
 //============================== BACK TO TOP SMOOTH SCROLL=========================
   $('a[href="#pageTop"]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('html, body').animate({ scrollTop: 0 }, 1500);
      return false;
  });
  //============================== SMOOTH SCROLLING TO SECTION =========================
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
