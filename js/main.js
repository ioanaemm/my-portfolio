
// var locations = {
//   "schools": [
//     {
//       name: "National College 'Cuza Voda'",
//       city: "Husi, Vaslui, Romania"
//     },
//     {
//       name: "Faculty of Psychology and Educational Sciences, University of Bucharest",
//       city: "Bucharest, Romania"
//     }],
//   "workplaces": [
//     {
//       name: "Digital Monkeyz",
//       city: "Bucharest, Romania"
//     },
//     {
//       name: "Opearlo - The Voice Design Agency",
//       city: "London, United Kingdom"
//     }
//   ]
// };


function initMap() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var markers = [
    ['Husi, Vaslui, Romania', 46.67586439999999, 28.05899],
    ['Bucharest, Romania', 44.541407, 26.225575],
    ['London, United Kingdom',51.5073509, -0.1277583]
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5073509, lng: -0.1277583},
    scrollwheel: false,
    zoom: 4
  });

  /*for(var i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    console.log(position);
    bounds.extend(position);
    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0]
    });
  }*/

  markers.forEach(function(marker){
    var position = new google.maps.LatLng(marker[1], marker[2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: marker[0]
    });
  });




  // function locationFinder() {
  //   var places = [];
  //   // locations.schools.forEach(function(school){
  //   //   places.push(school.city);
  //   // });
  //
  //   for(var i = 0; i < locations.schools.length; i++) {
  //     // console.log("aa");
  //     places.push(locations.schools[i].city);
  //     // console.log(places);
  //   }
  //
  //   // locations.workplaces.forEach(function(workplace){
  //   //   places.push(workplace.city);
  //   // });
  //
  //   for(var i = 0; i < locations.workplaces.length; i++) {
  //     // console.log(locations[i]);
  //     places.push(locations.workplaces[i].city);
  //     // console.log(places);
  //   }
  //   return places;
  // }

  // function createMarker() {
    // var markers = locationFinder();
    // var markers = locations;
    // console.log('markers', markers);
    // markers.forEach(function(marker){
    //   var position = new google.maps.LatLng(marker.schools.city);
    //   marker = new google.maps.Marker({
    //     position: position,
    //     map: map,
    //     title: marker.schools.name
    //   });
    // });
    // for(var i = 0; i < markers.length; i++) {
    //   var position = new google.maps.LatLng(marker[i].city)
    // }

  // }
  // createMarker();

  // function pinPoster(locations) {
    // var service = new google.maps.places.PlacesService(map);

    // locations.forEach(function(place){
      //console.log(place);

      // var request =  {
      //   query: place
      // };

    //service.textSearch(request, callback);
    // });
  // }
  // locations = locationFinder();

  // pinPoster(locations);
  //console.log(locationFinder());
}
