/*
 * 5 ways to customize the infowindow
 * 2015 - en.marnoto.com
*/

// map center
var center = new google.maps.LatLng(-33.91722, 151.23064);

// marker position
var factory = new google.maps.LatLng(-33.91721, 151.22630);

var creatures = [{
     position: new google.maps.LatLng(-33.91721, 151.22630),
     type: 'info',
     markerImage:'active.png',
     id:1,
     is_logged_in:1
 }, {
     position: new google.maps.LatLng(-33.91539, 151.22820),
     type: 'info',
     markerImage:'active.png',
     id:2,
     is_logged_in:1
 }, {
     position: new google.maps.LatLng(-33.91747, 151.22912),
     type: 'info',
     markerImage:'inactive.png',
     id:3,
     is_logged_in:0
 },
  {
     position: new google.maps.LatLng(-33.91848, 151.2291),
     type: 'info',
     markerImage:'inactive.png',
     id:4,
     is_logged_in:0
 },
 {
     position: new google.maps.LatLng(-33.91947, 151.23312),
     type: 'info',
     markerImage:'inactive.png',
     id:5,
     is_logged_in:0
 },
 {
     position: new google.maps.LatLng(-33.91356, 151.22912),
     type: 'info',
     markerImage:'inactive.png',
     id:6,
     is_logged_in:0
 }
 ];

// map color style
  var mapStyles = [{
         "elementType": "geometry",
         "stylers": [{
             "color": "#f5f5f5"
         }]
     },
     {
         "elementType": "labels.icon",
         "stylers": [{
             "visibility": "off"
         }]
     },
     {
         "elementType": "labels.text.fill",
         "stylers": [{
             "color": "#616161"
         }]
     },
     {
         "elementType": "labels.text.stroke",
         "stylers": [{
             "color": "#f5f5f5"
         }]
     },
     {
         "featureType": "administrative.land_parcel",
         "elementType": "labels.text.fill",
         "stylers": [{
             "color": "#bdbdbd"
         }]
     },
     {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [{
             "color": "#eeeeee"
         }]
     },
     {
         "featureType": "poi",
         "elementType": "labels.text.fill",
         "stylers": [{
             "color": "#757575"
         }]
     },
     {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [{
             "color": "#e5e5e5"
         }]
     },
     {
         "featureType": "poi.park",
         "elementType": "labels.text.fill",
         "stylers": [{
             "color": "#9e9e9e"
         }]
     },
     {
         "featureType": "road",
         "elementType": "geometry",
         "stylers": [{
             "color": "#ffffff"
         }]
     },
     {
         "featureType": "road.arterial",
         "elementType": "labels.text.fill",
         "stylers": [{
             "color": "#757575"
         }]
     },
     {
         "featureType": "road.highway",
         "elementType": "geometry",
         "stylers": [{
             "color": "#dadada"
         }]
     },
     {
         "featureType": "road.highway",
         "elementType": "labels.text.fill",
         "stylers": [{
             "color": "#616161"
         }]
     },
     {
         "featureType": "road.local",
         "elementType": "labels.text.fill",
         "stylers": [{
             "color": "#9e9e9e"
         }]
     },
     {
         "featureType": "transit.line",
         "elementType": "geometry",
         "stylers": [{
             "color": "#e5e5e5"
         }]
     },
     {
         "featureType": "transit.station",
         "elementType": "geometry",
         "stylers": [{
             "color": "#eeeeee"
         }]
     },
     {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [{
             "color": "#c9c9c9"
         }]
     },
     {
         "featureType": "water",
         "elementType": "labels.text.fill",
         "stylers": [{
             "color": "#9e9e9e"
         }]
     }
 ];

function initialize() {
  var mapOptions = {
    center: center,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles:mapStyles,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

  // InfoWindow content
  var content = '<div id="iw-container">' +
                    '<div class="iw-title">Porcelain Factory of Vista Alegre</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">History</div>' +
                      '<img src="images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>';

  

  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
 

  //custom code

  function getMarkerContent(creature){
    var content='<div class="marker-content">'+
                 '<div><img class="shadow-marker" src="images/'+creature.markerImage+'"/></div>';
    return content;             
  }


   function addMarker(creature){
      var markerContent=getMarkerContent(creature);
      var marker = new RichMarker({
            position: creature.position,
            map: map,
            content:markerContent,
            title:"Fábrica de Porcelana da Vista Alegre",
            is_logged_in:creature.is_logged_in
      });

      // InfoWindow content
      var content = '<div id="iw-container">' +
                    '<div class="iw-title">Porcelain Factory of Vista Alegre</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">History</div>' +
                      '<img src="images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>';

      // A new Info Window is created and set content
      var infowindow = new google.maps.InfoWindow({
          content: content,
          maxWidth: 350
      });
   

      // This event expects a click on a marker
      // When this event is fired the Info Window is opened.
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      // Event that closes the Info Window with a click on the map
      /*google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
      });*/

      // *
      // START INFOWINDOW CUSTOMIZE.
      // The google.maps.event.addListener() event expects
      // the creation of the infowindow HTML structure 'domready'
      // and before the opening of the infowindow, defined styles are applied.
      // *

      google.maps.event.addListener(infowindow, 'domready', function() {
        // Reference to the DIV that wraps the bottom of infowindow
        var iwOuter = $('.gm-style-iw');

        /* Since this div is in a position prior to .gm-div style-iw.
         * We use jQuery and create a iwBackground variable,
         * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
        */
        var iwBackground = iwOuter.prev();

        // Removes background shadow DIV
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});

        // Removes white background DIV
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});

        // Moves the infowindow 115px to the right.
        iwOuter.parent().parent().css({left: '115px'});

        // Moves the shadow of the arrow 76px to the left margin.
        iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

        // Moves the arrow 76px to the left margin.
        iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

        // Changes the desired tail shadow color.
        iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

        // Reference to the div that groups the close button elements.
        var iwCloseBtn = iwOuter.next();

        // Apply the desired effect to the close button
        iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});

        // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
        if($('.iw-content').height() < 140){
          $('.iw-bottom-gradient').css({display: 'none'});
        }
        // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
        iwCloseBtn.mouseout(function(){
            $(this).css({opacity: '1'});
        });
    });

    return marker;

  }

  var allMarkerId={};
  for (var i=0;i<creatures.length;i++) {
       allMarkerId[creatures[i].id]=addMarker(creatures[i]);
  };

  

  function updateMarker(marker){
      if(marker.is_logged_in==0){
        return false;
      }
      var random=Math.random() * ((.0002-.0001)+.0001);
      var lat=marker.getPosition().lat()+random;
      var lng=marker.getPosition().lng()+random;
      var newPostion=new google.maps.LatLng(lat, lng);
      var oldPosition=marker.getPosition();
   
      marker.setPosition(newPostion);


     /*console.log(marker.getPosition().lat());*/
  }

  // setInterval(function(){
  //    for(var i=0;i<creatures.length;i++){
  //       //allMarkerId[creatures[i].id].setVisible(false);
  //       updateMarker(allMarkerId[creatures[i].id]);
  //    }
  // },3000)



}
google.maps.event.addDomListener(window, 'load', initialize);