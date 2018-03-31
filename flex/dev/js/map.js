/*
jQuery(document).ready(function(a) {
	'use strict';
	var x = a('.google-map');
    x.length && x.each(function() {
        var b = a(this).data('height'),
            c = a(this).data('address'),
            d = a(this).data('zoom'),
            e = a(this).data('disable-controls'),
            f = a(this).data('scrollwheel'),
            g = a(this).data('marker'),
            h = a(this).data('marker-title'),
            i = a(this).data('styles');
        a(this).height(b), a(this).gmap3({
            marker: {
                address: c,
                data: h,
                options: {
                    icon: g
                },
                events: {
                    mouseover: function(b, c, d) {
                        var e = a(this).gmap3('get'),
                            f = a(this).gmap3({
                                get: {
                                    name: 'infowindow'
                                }
                            });
                        f ? (f.open(e, b), f.setContent(d.data)) : a(this).gmap3({
                            infowindow: {
                                anchor: b,
                                options: {
                                    content: d.data
                                }
                            }
                        });
                    },
                    mouseout: function() {
                        var b = a(this).gmap3({
                            get: {
                                name: 'infowindow'
                            }
                        });
                        b && b.close();
                    }
                }
            },
            map: {
                options: {
                    zoom: d,
                    disableDefaultUI: e,
                    scrollwheel: f,
                    styles: i
                }
            }
        });
    });

});
*/
$(function () {
  $('#test')
    .gmap3({
      address: "Haltern am See, Weseler Str. 151",
      zoom: 6,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    })
    .marker(function (map) {
      return {
        position: map.getCenter(),
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      };
    })
      .on('click', function (marker, event) {
        marker.setIcon('http://maps.google.com/mapfiles/marker_orange.png');
        setTimeout(function () {
          marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
        }, 200);
      })
  ;
});
