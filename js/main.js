
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
          { color: "#ff6c40" }
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
          { color: "#ff6c40" }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {color: "#ff6c40"},
          { lightness: -25 }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {color: "#ff6c40"}
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
          {color: "#ff6c40"}
        ]
      },
      {
        featureType: "landscape.natural",
        stylers: [
          {color: "#ff6c40"}
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

  var defaultIcon = "img_src/marker.png";

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5073509, lng: -0.1277583},
    scrollwheel: false,
    zoom: 3,
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








// Select all links with hashes
$('a[href^="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links

    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  });


// TweenMax animation
  var image = $('.portfolio-image');

  $(image).mouseover(function(event){
    console.log(event);
    TweenMax.to(event.target, 0.35, {scale: 1.3});
  });
  $(image).mouseleave(function(event){
    console.log(event);
    TweenMax.to(event.target, 0.2, {scale: 1});
    console.log("not working");
  });
