jQuery(document).ready(function(){
	jQuery('#about_banner').flexslider({
		animation: "slide",
		controlNav: true, 
		animationSpeed: 600,
		slideshowSpeed: 5000,
		easing: "swing",     
		directionNav:true,
		prevText: "",          
		nextText: "",
		pauseOnAction: false,
		touch: true, 
		start: function(){
			jQuery('.flex-active-slide .about_caption').addClass('show')
			},            //Callback: function(slider) - Fires when the slider loads the first slide
		before: function(){
			jQuery('.flex-active-slide .about_caption').removeClass('show')
			},           //Callback: function(slider) - Fires asynchronously with each slider animation
		after: function(slider){
			jQuery('.flex-active-slide .about_caption').addClass('show')
			}
		
	});
	
	
	
	jQuery('#single_banner').flexslider({
		animation: "slide",
		controlNav: true, 
		animationSpeed: 600,
		slideshowSpeed: 5000,
		easing: "swing",     
		directionNav:false,
		prevText: "",          
		nextText: "",
		pauseOnAction: false,
		touch: true, 
		
		
	});
	
	
	if (document.documentElement.clientWidth < 992) {
		jQuery('.carousal_section').flexslider({
		animation: "slide",
		controlNav: true, 
		animationSpeed: 600,
		slideshowSpeed: 5000,
		easing: "swing",     
		directionNav:false,
		prevText: "",          
		nextText: "",
		pauseOnAction: false,
		touch: true, 
		minItems: 1,
		maxItems: 1,
		move: 1, 
		animationLoop: true,
		direction: "horizontal",
		reverse: false, 
		
		
	});
}
	
	
	jQuery('.carousal_section').flexslider({
		animation: "slide",
		controlNav: true, 
		animationSpeed: 600,
		slideshowSpeed: 5000,
		easing: "swing",     
		directionNav:false,
		prevText: "",          
		nextText: "",
		pauseOnAction: false,
		touch: true, 
		itemWidth: 475,
		minItems: 1,
		maxItems: 2,
		move: 1, 
		animationLoop: true,
		direction: "horizontal",
		reverse: false, 
		
		
	});
	
	
	
	
	
	//============================== Tooltip =========================
	 
	 $('[data-toggle="tooltip"]').tooltip();
	
		
	$("#guiest_id1").selectbox();
	$("#guiest_id2").selectbox();
	$(".option-select").selectbox();
	
	
	$('.videoLeft img').click(function(){
        video = '<iframe width="550" height="368" src="'+ $(this).attr('data-video') +'"></iframe>';
        $(this).replaceWith(video);
    });
	
	$('.admission_video img').click(function(){
        video = '<iframe width="769" height="454" src="'+ $(this).attr('data-video') +'"></iframe>';
        $(this).replaceWith(video);
    });
	
	
	
	
	
	
	
	//================================ image popup ==================================
	
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		closeBtnInside: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
		
	});
	


});

//================================ Google Analytics ==================================

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71155940-1', 'auto');
ga('send', 'pageview');

//================================ heatmap.it ==================================
(function() {
var hm = document.createElement('script'); hm.type ='text/javascript'; hm.async = true;
hm.src = ('++u-heatmap-it+log-js').replace(/[+]/g,'/').replace(/-/g,'.');
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hm, s);
})();

//================================ inspectlet.com ==================================
window.__insp = window.__insp || [];
__insp.push(['wid', 2072243862]);
(function() {
function ldinsp(){if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
setTimeout(ldinsp, 500); document.readyState != "complete" ? (window.attachEvent ? window.attachEvent('onload', ldinsp) : window.addEventListener('load', ldinsp, false)) : ldinsp();
})();
