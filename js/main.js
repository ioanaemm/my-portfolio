
function initMap() {
  var styles = [
    {
        featureType: "water",
        stylers: [
          { color: "#f8e6dc" }
        ]
      },
      {
        featureType: "administrative",
        elementType: "labels.text",
        stylers: [
          { color: "#7e0030" },
          { weight: 4 }
        ]
      },
      {
        featureType: "administrative",
        elementType: "labels.text.stroke",
        stylers: [
          { color: "#fff" },

        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          { color: "#ffffff" }
        ]
      },
      {
        featureType: "transit.station",
        stylers: [
          { weight: 9 },
          { hue: "#e85113" }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          { lightness: 100 }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          { lightness: -100 }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          { visibility: "on" },
          { color: "#f0e4d3" }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {color: "#ffffff"},
          { lightness: -25 }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {color: "#dddddd"}
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
          {color: "#FFF5CB"}
        ]
      },
      {
        featureType: "landscape.natural",
        stylers: [
          {color: "#ffdbc5"}
        ]
      }

  ];


  var map;
  var bounds = new google.maps.LatLngBounds();
  var markers = [
    ['Husi, Vaslui, Romania', 46.67586439999999, 28.05899],
    ['Bucharest, Romania', 44.541407, 26.225575],
    ['London, United Kingdom',51.5073509, -0.1277583]
  ];

  var defaultIcon = "img_src/fixed/location-marker.png";

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5073509, lng: -0.1277583},
    scrollwheel: false,
    zoom: 4,
    styles: styles
  });



  markers.forEach(function(marker){
    var position = new google.maps.LatLng(marker[1], marker[2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      icon: defaultIcon,
      map: map,
      title: marker[0]
    });
  });





}
