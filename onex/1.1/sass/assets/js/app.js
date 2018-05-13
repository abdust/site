!function(o){"use strict";o(window).on("load",function(){o("#preloader").fadeOut(500)}),o(document).ready(function(){o('.scrolling  a[href*="#"], .scrolling .btn-scroll-down').on("click",function(s){s.preventDefault(),s.stopPropagation();var e=o(this).attr("href");o(window).width()<767?o(e).velocity("scroll",{duration:800,offset:-70,easing:"easeOutExpo",mobileHA:!1}):o(window).width()>=768&&o(e).velocity("scroll",{duration:800,offset:-88,easing:"easeOutExpo",mobileHA:!1})})}),o(window).on("load",function(){var s=o(".header"),e=s.find(".navbar"),a=0,i=o(".navbar-sticky");o(window).scroll(function(){var t=o(this).scrollTop();t>a?i.addClass("navbar-scrollUp"):i.removeClass("navbar-scrollUp"),a=t,e.hasClass("navbar-sticky")&&(o(this).scrollTop()<=600||o(this).width()<=300)?(e.removeClass("navbar-sticky").appendTo(s),s.css("height","auto")):!e.hasClass("navbar-sticky")&&o(this).width()>300&&o(this).scrollTop()>600&&(s.css("height",s.height()),e.addClass("navbar-scrollUp"),e.css({opacity:"0"}).addClass("navbar-sticky"),e.appendTo(o("body")).animate({opacity:1}))}),o(window).width()<750&&o(".navbar-nav.site_nav .nav-item .nav-link").on("click",function(){o(".navbar-collapse.collapse").removeClass("show")}),o(window).trigger("resize"),o(window).trigger("scroll")}),o(".navbar").width()>768&&o(".navbar-nav .dropdown").hover(function(){o(this).add(o(this).children(".dropdown-menu")).addClass("show")},function(){o(this).add(o(this).children(".dropdown-menu")).removeClass("show")}),o(".product-slider").slick({dots:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,arrows:!1,loop:!0}),o(".team-carouel").slick({slidesToShow:4,slidesToScroll:1,autoplay:!1,autoplaySpeed:5e3,arrows:!1,speed:1e3,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,dots:!0}},{breakpoint:769,settings:{slidesToShow:3,slidesToScroll:3,dots:!1}},{breakpoint:750,settings:{slidesToShow:2,slidesToScroll:1,dots:!1}}]}),o(".testimonial-carousel").slick({autoplay:!1,centerMode:!0,centerPadding:"0px",slidesToShow:3,dots:!0,arrows:!1,draggable:!1,focusOnSelect:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:769,settings:{slidesToShow:1,draggable:!0,centerPadding:"70px"}},{breakpoint:750,settings:{slidesToShow:1,draggable:!0,centerPadding:"30px"}}]}),o("body").scrollspy({target:"#navbarContent",spy:"scroll",offset:130}),(new WOW).init()}(jQuery);


//============================== Google Analytics =========================
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71155940-16', 'auto');
ga('send', 'pageview');

//============================== getsitecontrol =========================
(function (w,i,d,g,e,t,s) {w[d] = w[d]||[];t= i.createElement(g);
  t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t, s);
})(window, document, '_gscq','script','//widgets.getsitecontrol.com/46851/script.js');
