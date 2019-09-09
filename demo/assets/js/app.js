;(function($) {

'use strict';

// Variables
// ---------------------------------------------------------
var
// $body = $('body'),
// $head = $('head'),

$itemDemoIframe = $('.demo-iframe'),
$itemDemoContainer = $('.iframe-wrapper'),
$productsToggleBtn = $('.items-toggle-btn'),
$viewports = $('.viewports'),
$carouselItems = $('.switcher-carousel .carousel-wrapper'),

hasPushState = !!(window.history && history.pushState);



// Get URL Parameters
// ---------------------------------------------------------
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }

  return false;
}



// Current Item
// ---------------------------------------------------------
var $currentTheme = getQueryVariable('theme');

if (!($currentTheme in $themes) || $currentTheme === '') {
  $currentTheme = $defaultTheme;
}



// Toggle Viewport Buttons
// ---------------------------------------------------------
function toggleViewportButtons() {
  if ('undefined' !== typeof $themes[$currentTheme].responsive && $themes[$currentTheme].responsive === false ) {
    $viewports.addClass('hidden');
  } else {
    $viewports.removeClass('hidden');
  }
}



// Carousel Toggle
// ---------------------------------------------------------
$productsToggleBtn.on('click', function (event) {
  event.preventDefault();
  $('.switcher-carousel').toggleClass('active');
});



// Add Carousel Items
// ---------------------------------------------------------
$.each($themes, function(key, object) {
  var tooltip;

  if ('tooltip' in object) {
    tooltip = 'title="' + object.tooltip.replace( /"/g, '\'' ) + '"';
  }

  $carouselItems.append(
    '<a class="item" data-id="' + key + '" ' + tooltip + '>' +
      '<div class="header" >' + object.name +'<span class="badge">' + object.tag + '</span></div>' +
      '<img src="' + imgURL + object.img + '" alt="' + object.name + '">' +
      '<div class="footer">' + object.tooltip + '</div>' +
    '</a>'
  );
});



// Load demo function
// ---------------------------------------------------------
function loadItemDemo() {
  // Load Iframe
  $itemDemoIframe.attr('src', $themes[$currentTheme].url);

  // Set Document Title
  document.title = $themes[$currentTheme].name + ' - ' + $themes[$currentTheme].tooltip;

  // Set current theme title + tag
  $productsToggleBtn.html($themes[$currentTheme].name + ' - ' + $themes[$currentTheme].tooltip + '<span>' + $themes[$currentTheme].tag + '</span>');

  // Purchase Button
  $('.buy-now-btn').attr("href", $themes[$currentTheme].purchase);

  // Remove Iframe
  $('.remove-frame-btn').attr("href", $themes[$currentTheme].url);

  // Show/Hide Viewport Buttons
  toggleViewportButtons();
}



// On Load
// ---------------------------------------------------------
loadItemDemo();

$carouselItems.owlCarousel({
  items: 4,
  itemsTablet: [1199, 3],
  itemsTabletSmall: [991, 2],
  mouseDrag: true,
  pagination: false,
  navigation: true,
  navigationText: ['<a class="icon-arrow-left">', '<a class="icon-arrow-right">'],
  slideSpeed: 500,
  rewindNav: false
});



// Viewport Buttons
// ---------------------------------------------------------
$viewports.each(function () {
  var $this = $(this);

  $this.on('click', 'li > a', function (event) {
    var $this = $(this),
        size = $this.data('size');

    event.preventDefault();

    if (size) {
      $itemDemoContainer.css('width', size);
      $this.parent('li').addClass('active').siblings('li').removeClass('active');
      loadItemDemo();
    }
  });
});



// Select Item from Carousel
// ---------------------------------------------------------
$carouselItems.find('.item').on('click', function () {
  $currentTheme = $(this).data('id');

  if ($currentTheme in $themes) {
    if (hasPushState) {
      loadItemDemo();

      $itemDemoContainer.css('width', '100%');

      $('.viewports li:first-child').addClass('active').siblings('li').removeClass('active');

      $('.switcher-carousel').removeClass('active');

      history.pushState({id: $currentTheme}, '', '?theme=' + $currentTheme);
    } else {
      top.location.href = '?theme=' + $currentTheme;
    }
  }

  return false;
});

}(jQuery));
