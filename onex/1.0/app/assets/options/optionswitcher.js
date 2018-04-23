'use strict';
var wbLink = 'http://bit.ly/WB-Onex';
var purchase = 'http://bit.ly/WB-Onex';
var themename = 'Onex';
var category = 'Landing Page';

if($(window).width() > 750) {

	$('#body').each(function() {
		'use strict';
		var themeOption =    $(`<div class="tho-option">
			<div class="tho-option-switcher">
				<div class="tho-option-switcher-btn tho-icon-option">
					<i class="tho-setting-icon"></i>
				</div>
					<div class="tho-option-swticher-header">
						<div class="tho-option-switcher-heading">Theme Option</div>
					</div>
					<div class="tho-option-swticher-body">
						<span class="tho-subtitle">Color Options</span>
						<ul class="tho-list-unstyled tho-color-options">
							<li class="theme-default theme-active" data-color="default" data-logo="default-logo"></li>
							<li class="theme-color1" data-color="color-option1" data-logo="logo1"></li>
							<li class="theme-color2" data-color="color-option2" data-logo="logo2"></li>
							<li class="theme-color3" data-color="color-option3" data-logo="logo3"></li>
							<li class="theme-color4" data-color="color-option4" data-logo="logo4"></li>
						</ul>
						<span class="tho-subtitle">Layout style</span>
						<div class="no-col-space">
							<a href="javascript:void(0);" class="tho-btn tho-active-switcher-btn tho-wide-layout-btn">Wide</a>
							<a href="javascript:void(0);" class="tho-btn tho-boxed-layout-btn">Boxed</a>
						</div>
						<div class="tho-bg-patern">
							<span class="tho-subtitle">Background pattern</span>
							<ul class="tho-list-unstyled">
								<li class="pattern-default pattern-active"></li>
								<li class="pattern1"></li>
								<li class="pattern2"></li>
								<li class="pattern3"></li>
								<li class="pattern4"></li>
							</ul>
						</div>
						<span class="tho-subtitle">Header style</span>
						<div class="no-col-space">
							<a href="javascript:void(0);" class="tho-btn scrollUp-header">Scroll</a>
							<a href="javascript:void(0);" class="tho-btn fixed-header">Fixed</a>
							<a href="javascript:void(0);" class="tho-btn static-header">Static</a>
						</div>
					</div>
			</div>
		</div>`);
		var lpFrame = $(`<div class="live-preview-frame">
			<div class="lpf-container">
				<div class="lpf-row">
					<div class="lpf-logo">
						<a href="#">
							<img src="assets/options/lpf-logo.png" alt="wb Logo">
						</a>
					</div>
					<div class="lpf-themes-dropdown">
						<div class="lpf-dropdown">
							<a class="lpf-dropdown-toggle" href="#">`+ themename +`<span class="lpf-badge">`+ category +`</span></a>
							<div class="lpf-dropdown-menu" id="ajaxContent"></div>
						</div>
					</div>
					<div class="lpf-buttons">
						<a href="javascript:void(0)" class="lpf-btn-removed"> <img src="assets/options/taf-cross.svg" alt="">  <span> Remove this frame </span></a>
						<a href="#" class="lpf-btn-purchase"> <img src="assets/options/taf-cart.svg" alt=""> </i><span>Buy This Theme</span></a>
					</div>
					</div>
			</div>
		</div>`);

	  $('#body').prepend(themeOption, lpFrame);
	});

	//Load Options Data
	$(window).on('load', function(){
		'use strict';
		var url = 'http://themes.iamabdus.com/options/data.json';
		var dataformat = {
				format: 'json'
		};
		function getContent(data) {
				//loop through each of the single JSON object obtained from the JSON file.
				var htmlString = '';
				var promo = '';
				$.each(data , function(key , value){ // First Level
					$.each(value.themes , function(k , val ){  // The contents inside themes
						htmlString += '<a class="lpf-dropdown-item" href="'+ val.link +'" target="_blank">'+ val.title +' <span class="lpf-badge-category">'+ val.category +'</span>';
						htmlString += '<div class="lpf-project-promo">';
						htmlString += '<img class="img-full" src="'+ val.thumbnail +'" alt="project">';
						htmlString += '</div>';
						htmlString += '</a>';
					});

					// $.each(value.advertisement , function(k , v ){  // The contents inside advertisement
					// 	promo += '<a href="'+ v.link +'">';
					// 	promo += '<img class="card-img" src="'+ v.image +'" alt="'+ v.title +'">';
					// 	promo += '</a>';
					// });

				});
				$( '#ajaxContent' ).append(htmlString);
				// $( '#adv' ).append(promo);
		}
		// call the jquery ajax function
		$.getJSON(url, dataformat, getContent);
	});
}
//option Switcher
var panel = jQuery('.tho-option-switcher');

$('.tho-option-switcher-btn').on('click', function() {
	'use strict';
	$(this).toggleClass('tho-cross');
	jQuery('.tho-option-switcher').toggleClass('tho-option-visible');
});



jQuery('.tho-color-options li').click(function () {
	'use strict';
	var color = jQuery(this).attr('data-color');
	var data_logo = jQuery(this).attr('data-logo');
	setColor(color, data_logo);
	jQuery('.tho-color-options li').removeClass('theme-active');
	jQuery(this).addClass('theme-active');
});

var setColor = function (color) {
	'use strict';
	jQuery('#option_color').attr('href', 'assets/css/' + color + '.css');
}

	// Boxed Layout
	var boxed = jQuery('.tho-boxed-layout-btn');
	var wide = jQuery('.tho-wide-layout-btn');

	// Default active button selected
	if(jQuery('body').hasClass('boxed')){
		boxed.addClass('tho-active-switcher-btn');
		jQuery('.tho-bg-patern').css({'display':'block'});
		wide.removeClass('tho-active-switcher-btn');
	} else {
		boxed.removeClass('tho-active-switcher-btn');
		jQuery('.tho-bg-patern').css({'display':'none'});
		wide.addClass('tho-active-switcher-btn');
	}

	jQuery('.tho-boxed-layout-btn').click(function(){
		'use strict';
		jQuery(this).addClass('tho-active-switcher-btn');
		jQuery('.tho-wide-layout-btn').removeClass('tho-active-switcher-btn');
		jQuery('body').addClass('boxed default');
		if(!jQuery('.main-wrapper').hasClass('home_transparent-wrapper')) {
			jQuery('.main-slider').addClass('container');
		}
		jQuery('.tho-bg-patern').css({'display':'block'});
	});
	jQuery('.tho-wide-layout-btn').click(function(){
		'use strict';
		jQuery(this).addClass('tho-active-switcher-btn');
		jQuery('.tho-boxed-layout-btn').removeClass('tho-active-switcher-btn');
		jQuery('body').removeClass('boxed default');
		jQuery('.main-slider').removeClass('container');
		jQuery('.tho-bg-patern').css({'display':'none'});
	});

	//Background option
	jQuery('.tho-bg-patern li.pattern-default').click(function () {
		'use strict';
		jQuery('.tho-bg-patern li').removeClass('pattern-active');
		jQuery('.tho-bg-patern li.pattern-default').addClass('pattern-active');
		jQuery('body').addClass('default')
		.removeClass('pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.tho-bg-patern li.pattern1').click(function () {
		'use strict';
		jQuery('.tho-bg-patern li').removeClass('pattern-active');
		jQuery('.tho-bg-patern li.pattern1').addClass('pattern-active');
		jQuery('body').addClass('pattern-01')
		.removeClass('default pattern-02 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.tho-bg-patern li.pattern2').click(function () {
		'use strict';
		jQuery('.tho-bg-patern li').removeClass('pattern-active');
		jQuery('.tho-bg-patern li.pattern2').addClass('pattern-active');
		jQuery('body').addClass('pattern-02')
		.removeClass('default pattern-01 pattern-03 pattern-04 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.tho-bg-patern li.pattern3').click(function () {
		'use strict';
		jQuery('.tho-bg-patern li').removeClass('pattern-active');
		jQuery('.tho-bg-patern li.pattern3').addClass('pattern-active');
		jQuery('body').addClass('pattern-03')
		.removeClass('default pattern-01 pattern-02 pattern-04 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.tho-bg-patern li.pattern4').click(function () {
		'use strict';
		jQuery('.tho-bg-patern li').removeClass('pattern-active');
		jQuery('.tho-bg-patern li.pattern4').addClass('pattern-active');
		jQuery('body').addClass('pattern-04')
		.removeClass('default pattern-01 pattern-02 pattern-03 pattern-05 pattern-06 pattern-07');
	});
	jQuery('.tho-bg-patern li.pattern5').click(function () {
		'use strict';
		jQuery('.tho-bg-patern li').removeClass('pattern-active');
		jQuery('.tho-bg-patern li.pattern5').addClass('pattern-active');
		jQuery('body').addClass('pattern-05')
		.removeClass('default pattern-01 pattern-02 pattern-03 pattern-04 pattern-06 pattern-07');
	});
	jQuery('.tho-bg-patern li.pattern6').click(function () {
		'use strict';
		jQuery('.tho-bg-patern li').removeClass('pattern-active');
		jQuery('.tho-bg-patern li.pattern6').addClass('pattern-active');
		jQuery('body').addClass('pattern-06')
		.removeClass('default pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-07');
	});
	jQuery('.tho-bg-patern li.pattern7').click(function () {
		'use strict';
		jQuery('.tho-bg-patern li').removeClass('pattern-active');
		jQuery('.tho-bg-patern li.pattern7').addClass('pattern-active');
		jQuery('body').addClass('pattern-07')
		.removeClass('default pattern-01 pattern-02 pattern-03 pattern-04 pattern-05 pattern-06');
	});


	//Header option

	var fixed = jQuery('.fixed-header');
	var stat = jQuery('.static-header');
	var scroll_up = jQuery('.scrollUp-header');

	if(jQuery('body').hasClass('static')){
		fixed.removeClass('tho-active-switcher-btn');
		scroll_up.removeClass('tho-active-switcher-btn ');
		stat.addClass('tho-active-switcher-btn');

	} else if(jQuery('body').hasClass('up-scroll')) {
		stat.removeClass('tho-active-switcher-btn');
		fixed.removeClass('tho-active-switcher-btn');
		scroll_up.addClass('tho-active-switcher-btn ');
	} else {
		stat.removeClass('tho-active-switcher-btn');
		scroll_up.removeClass('tho-active-switcher-btn');
		fixed.addClass('tho-active-switcher-btn ');
	}

	jQuery('.fixed-header').click(function(){
		'use strict';
		jQuery(this).addClass('tho-active-switcher-btn');
		jQuery('.static-header, .scrollUp-header').removeClass('tho-active-switcher-btn');
		jQuery('body').removeClass('static up-scroll');
		jQuery('.navbar').removeClass('navbar-scrollUp').addClass('animated');
	});
	jQuery('.scrollUp-header').click(function(){
		'use strict';
		jQuery(this).addClass('tho-active-switcher-btn');
		jQuery('.fixed-header, .static-header').removeClass('tho-active-switcher-btn');
		jQuery('body').removeClass('static').addClass('up-scroll');
		jQuery('.navbar').addClass('navbar-scrollUp').removeClass('animated');
	});
	jQuery('.static-header').click(function(){
		'use strict';
		jQuery(this).addClass('tho-active-switcher-btn');
		jQuery('.fixed-header, .scrollUp-header').removeClass('tho-active-switcher-btn');
		jQuery('body').removeClass('up-scroll').addClass('static');
		jQuery('.navbar').removeClass('navbar-scrollUp navbar-sticky');
	});


	// Add Top Bar
	if(jQuery('body').children().hasClass('tho-option')){
		jQuery('body').addClass('lp-frame');
	}

	//Remove Button
	jQuery('.lpf-btn-removed').click(function(){
		'use strict';
		jQuery('body').removeClass('lp-frame');
		jQuery('.live-preview-frame').fadeOut(500).css({
			"transform": "translateY(-46px)"
		})
	});

	//Troggle Lpf Menu
	jQuery('.lpf-dropdown').on('click', function(){
	jQuery('.lpf-dropdown-menu').toggleClass('open');
	jQuery(this).toggleClass('open')
	});

	//WB LINK
	$('.lpf-logo a').attr('href', wbLink);

	//PURCHASE LINK
	$('.lpf-buttons .lpf-btn-purchase').attr('href', purchase);
