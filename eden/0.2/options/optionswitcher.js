var OptionSwitcher = function () {

	return {        

		//option Switcher
		initOptionSwitcher: function() {    
			var panel = jQuery('.option-switcher');

			jQuery('.option-switcher-btn').click(function () {
				jQuery(this).css('display', 'none');
				jQuery('.option-switcher').removeClass("fadeOutRight").show();
			});

			jQuery('.theme-close').click(function () {
				jQuery('.option-switcher').addClass("fadeOutRight",function(){
		          jQuery('.option-switcher').hide();
		        });
		        jQuery('.option-switcher-btn').css('display', 'block');
			});
			
			jQuery('li', panel).click(function () {
				var color = jQuery(this).attr("data-color");
				var data_logo = jQuery(this).attr("data-logo");
				setColor(color, data_logo);
				jQuery('.list-unstyled li', panel).removeClass("theme-active");
				jQuery(this).addClass("theme-active");
			});

			var setColor = function (color, data_logo) {
				jQuery('#option_color').attr("href", "css/colors/" + color + ".css");
				if(data_logo == 'orange'){
					jQuery('.logo img').attr("src", "images/logo1" + ".png");
				}
				else if(data_logo == 'green'){
					jQuery('.logo img').attr("src", "images/logo2" + ".png");
				}
				else if(data_logo == 'mix'){
					jQuery('.logo img').attr("src", "images/logo" + ".png");
				}
				else if(data_logo == 'default-logo'){
					jQuery('.logo img').attr("src", "images/logo" + ".png");
				}
			}

			//Boxed Layout
			jQuery('.boxed-layout-btn').click(function(){
				jQuery(this).addClass("active-switcher-btn");
				jQuery(".wide-layout-btn").removeClass("active-switcher-btn");
				jQuery("body").addClass("bodyColor container");
			});
			jQuery('.wide-layout-btn').click(function(){
				jQuery(this).addClass("active-switcher-btn");
				jQuery(".boxed-layout-btn").removeClass("active-switcher-btn");
				jQuery("body").removeClass("bodyColor container");
			});

			//Header option
			jQuery('.static-header-btn').click(function(){
				jQuery(this).addClass("active-switcher-btn");
				jQuery(".fixed-header-btn").removeClass("active-switcher-btn");
				jQuery(".navbar-default").removeClass("navbar-main");
			});
			jQuery('.fixed-header-btn').click(function(){
				jQuery(this).addClass("active-switcher-btn");
				jQuery(".static-header-btn").removeClass("active-switcher-btn");
				jQuery(".navbar-default").addClass("navbar-main");
			});

		}
		
	};

}();