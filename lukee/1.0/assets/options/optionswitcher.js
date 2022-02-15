var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {

	"use strict";

	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 750) {

		var body = document.querySelectorAll('#body');

		body.forEach(function() {

			let themeOption = document.createElement('div');
			themeOption.className = "theme-option";
			themeOption.innerHTML = 
				'<div class="right-sidebar-2">' +
					'<div class="right-sidebar-container-2">' +
						'<div class="slim-scroll-right-sidebar-2">' +
							'<div class="right-sidebar-2-header">' +
								'<h2>Layout Settings</h2>' +
								'<p>User Interface Settings</p>' +

								'<div class="btn-close-right-sidebar-2">' +
									'<i class="mdi mdi-window-close"></i>' +
								'</div>' +
							'</div>' +

							'<div class="right-sidebar-2-body" data-simplebar>' +
								'<span class="right-sidebar-2-subtitle">Header Background</span>' +
								'<div class="no-col-space">' +
									'<a href="javascript:void(0);" class="btn-right-sidebar-2 btn-right-sidebar-2-active header-light-to">Light</a>' +
									'<a href="javascript:void(0);" class="btn-right-sidebar-2 header-dark-to">Dark</a>' +
								'</div>' +

								'<span class="right-sidebar-2-subtitle">Sidebar Layout</span>' +
								'<div class="no-col-space">' +
									'<select class="right-sidebar-2-select" id="sidebar-option-select">' +
										'<option value="sidebar-fixed">Expend</option>' +
										'<option value="sidebar-fixed-minified">Minified</option>' +
										'<option value="sidebar-fixed-offcanvas">Offcanvas</option>' +
									'</select>' +
								'</div>' +

								'<span class="right-sidebar-2-subtitle">Navigation Background</span>' +
								'<div class="no-col-space">' +
									'<a href="javascript:void(0);" class="btn-right-sidebar-2 btn-right-sidebar-2-active sidebar-dark-to">Dark</a>' +
									'<a href="javascript:void(0);" class="btn-right-sidebar-2 sidebar-light-to">Light</a>' +
								'</div>' +

								'<div class="d-flex justify-content-center" style="padding-top: 30px">' +
									'<div id="reset-options" style="width: auto; cursor: pointer" class="btn-right-sidebar-2 btn-reset">Reset Settings</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>';

			document.body.prepend(themeOption);

			// console.log('theme-option');

			
		});

	}

	// Store object for local storage data
	var currentOptions = {
		headerType: "header-fixed",
		headerBackground: "header-light",
		navigationType: "sidebar-fixed",
		navigationBackground: "sidebar-dark",
		direction: "ltr"
	}

	/**
     * Get local storage value
     */
	 function getOptions() {
		return JSON.parse(localStorage.getItem("optionsObject"))
	}

	/**
	 * Set local storage property value
	 */
	function setOptions(propertyName, propertyValue) {

		//Store in local storage
		var optionsCopy = Object.assign({}, currentOptions);
		optionsCopy[propertyName] = propertyValue

		//Store in local storage
		localStorage.setItem("optionsObject", JSON.stringify(optionsCopy));
	}

	if (getOptions() != null) {
		currentOptions = getOptions()
	} else {
		localStorage.setItem("optionsObject", JSON.stringify(currentOptions));
	}

	/**
	 * Clear local storage
	 */
	function clearOptions() {
		localStorage.removeItem("optionsObject");
	}

	// Set localstorage value to variable
	if (getOptions() != null) {
		currentOptions = getOptions()
	} else {
		localStorage.setItem("optionsObject", JSON.stringify(currentOptions));
	}

	
	var rightSidebarIn = document.querySelector('.right-sidebar-in');
	var rightSidebarContainer2 = document.querySelector('.right-sidebar-container-2');

	//Layout settings visible
	rightSidebarIn.addEventListener('click', function () {
		rightSidebarContainer2.classList.add("right-sidebar-2-visible");
	});

	var btnCloseRightSidebar2 = document.querySelector('.btn-close-right-sidebar-2');
	//THEME OPTION CLOSE BUTTON
	btnCloseRightSidebar2.addEventListener('click', function () {
		rightSidebarContainer2.classList.remove("right-sidebar-2-visible");
	});


	//VARIABLE
	var body = document.querySelector('#body');
	var header_static = document.querySelector('.header-static-to');
	var header_fixed = document.querySelector('.header-fixed-to');

	//NAVBAR OPTION
	


	// SIDEBAR OPTION
	if (viewportWidth > 750) {
		document.getElementById("sidebar-option-select").onchange = function() {
			var valueSelected = this.options[this.selectedIndex].value;
			localStorage.setItem("selectValue",this.value); // save it 

			if (valueSelected === "sidebar-fixed") {
				body.classList.remove('sidebar-fixed-offcanvas', 'sidebar-static', 'sidebar-static-offcanvas', 'sidebar-collapse', 'sidebar-collapse-out', 'sidebar-minified', 'sidebar-minified-out');
				body.classList.add('sidebar-fixed')
				window.isMinified = false; // Because It is not minified (aka it is opened)
				window.isCollapsed = false;

				//Store in local storage
				setOptions("navigationType", "sidebar-fixed")
			}

			if (valueSelected === "sidebar-fixed-minified") {
				body.classList.remove('sidebar-fixed-offcanvas', 'sidebar-static', 'sidebar-static-offcanvas', 'sidebar-collapse', 'sidebar-collapse-out', 'sidebar-minified', 'sidebar-minified-out');
				body.classList.add('sidebar-fixed', 'sidebar-minified')
				window.isMinified = true; // Because It is  minified
        window.isCollapsed = false;

				//Store in local storage
				setOptions("navigationType", "sidebar-fixed-minified")
			}

			if (valueSelected === "sidebar-fixed-offcanvas") {
				body.classList.remove('sidebar-static', 'sidebar-static-offcanvas', 'sidebar-collapse-out', 'sidebar-minified', 'sidebar-minified-out', 'sidebar-fixed');
				body.classList.add('sidebar-fixed-offcanvas', 'sidebar-collapse')
				window.isCollapsed = true;
        window.isMinified = false;

				//Store in local storage
				setOptions("navigationType", "sidebar-fixed-offcanvas")
			}

			if (valueSelected === "sidebar-static") {
				body.classList.remove('sidebar-fixed-offcanvas', 'sidebar-static-offcanvas', 'sidebar-collapse', 'sidebar-collapse-out', 'sidebar-minified-out', 'sidebar-fixed');
				body.classList.add('sidebar-static')
				window.isMinified = false;
				window.isCollapsed = false;

				//Store in local storage
				setOptions("navigationType", "sidebar-static")
			}

			if (valueSelected === "sidebar-static-minified") {
				body.classList.remove('sidebar-fixed-offcanvas', 'sidebar-static-offcanvas', 'sidebar-collapse', 'sidebar-collapse-out', 'sidebar-minified-out', 'sidebar-fixed');
				body.classList.add('sidebar-static', 'sidebar-minified')
				window.isMinified = true;
				window.isCollapsed = false;

				//Store in local storage
				setOptions("navigationType", "sidebar-static-minified")
			}

			if (valueSelected === "sidebar-static-offcanvas") {
				body.classList.remove('sidebar-fixed-offcanvas', 'sidebar-static', 'sidebar-collapse-out', 'sidebar-minified', 'sidebar-minified-out', 'sidebar-fixed');
				body.classList.add('sidebar-static-offcanvas', 'sidebar-collapse')
				window.isCollapsed = true;
				window.isMinified = false;

				//Store in local storage
				setOptions("navigationType", "sidebar-static-offcanvas")
			}
		}


		// Trigger Change for current options
		const mySel = document.getElementById("sidebar-option-select"); 

		if (currentOptions.navigationType === "sidebar-fixed") {
			let val = localStorage.getItem("selectValue"); 
			if (val) mySel.value=val;
			mySel.onchange();
		}

		if (currentOptions.navigationType === "sidebar-fixed-minified") {
			let val = localStorage.getItem("selectValue"); 
			if (val) mySel.value=val;
			mySel.onchange();
		}

		if (currentOptions.navigationType === "sidebar-fixed-offcanvas") {
			let val = localStorage.getItem("selectValue"); 
			if (val) mySel.value=val;
			mySel.onchange();
		}

	}

	// Header Background
	var header_dark = document.querySelector('.header-dark-to');
	var header_light = document.querySelector('.header-light-to');

	header_dark.addEventListener('click', function () {
		'use strict';
		this.classList.add('btn-right-sidebar-2-active');
		header_light.classList.remove('btn-right-sidebar-2-active');
		body.classList.remove('header-light');
		body.classList.add('header-dark');

		//Store in local storage
		setOptions("headerBackground", "header-dark")
	});

	//Click for current options
	if (currentOptions.headerBackground === "header-dark") {
		header_dark.click()
	}

	header_light.addEventListener('click', function () {
		'use strict';
		this.classList.add('btn-right-sidebar-2-active');
		header_dark.classList.remove('btn-right-sidebar-2-active');
		body.classList.remove('header-dark');
		body.classList.add('header-light');

		//Store in local storage
		setOptions("headerBackground", "header-light")
	});

	//Click for current options
	if (currentOptions.headerBackground === "header-light") {
		header_light.click()
	}


	// Sidebar Background
	var sidebar_dark = document.querySelector('.sidebar-dark-to');
	var sidebar_light = document.querySelector('.sidebar-light-to');

	sidebar_dark.addEventListener('click', function () {
		'use strict';
		this.classList.add('btn-right-sidebar-2-active');
		sidebar_light.classList.remove('btn-right-sidebar-2-active');
		body.classList.remove('sidebar-light');
		body.classList.add('sidebar-dark');

		//Store in local storage
		setOptions("navigationBackground", "sidebar-dark")
	});

	//Click for current options
	if (currentOptions.navigationBackground === "sidebar-dark") {
		sidebar_dark.click()
	}

	sidebar_light.addEventListener('click', function () {
		'use strict';
		this.classList.add('btn-right-sidebar-2-active');
		sidebar_dark.classList.remove('btn-right-sidebar-2-active');
		body.classList.remove('sidebar-dark');
		body.classList.add('sidebar-light');

		//Store in local storage
		setOptions("navigationBackground", "sidebar-light")
	});

	//Click for current options
	if (currentOptions.navigationBackground === "sidebar-light") {
		sidebar_light.click()
	}


	// Spacing Layout


	//Click for reset options
	var reset_options = document.querySelector('#reset-options');
	reset_options.addEventListener('click', function () {
		clearOptions();
		location.reload();
		localStorage.clear();
	});


});
