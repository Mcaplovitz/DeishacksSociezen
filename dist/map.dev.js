"use strict";

function initMap() {
  var markers = [];
  var marker = new google.maps.Marker();
  var count = 0; // The location of boston

  var boston = {
    lat: 42.36,
    lng: -71.062500
  }; // function findMarker() {
  //     map.addListener('dblclick', function(event) {
  //             deleteMarker = event.currentTarget,
  //                 labler = deleteMarker.label,
  //                     for (i = 0, i < markers.length, i++) {
  //                         if (markers[i].label == labler) {
  //                             markers[i].setMap(null);
  //                         }
  //                     }
  //         )
  //     };
  // The map, centered at boston

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: boston
  });
  map.addListener('click', function (event) {
    marker = addMarker(event);
  }); //**does not work yet**

  marker.addListener('dblclick', function () {
    marker.setMap(null);
    var remover = markers.findIndex(marker); // you should do something like *marker that needs to be removed*.setMap(null)
    // but i'm also assuming that is what market.addListener is meant to do
    // i'll keep looking around tho and see

    remover.setMap(null);
    markers.splice(remover);
    alert("Working!");
  });

  function addMarker(event) {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    var myLatlng = {
      lat: latitude,
      lng: longitude
    };
    var newMarker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      label: count++
    }); //put markers into the array

    markers.push(newMarker);
    return newMarker; //console.log(markers);
  }
}