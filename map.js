function initMap() {
    var markers = [];
    var marker = new google.maps.Marker();
    var count = 0;
    // The location of boston
    const boston = {
        lat: 42.36,
        lng: -71.062500
    };

    // function findMarker() {
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
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: boston,
    });

    map.addListener('click', function(event) {
        marker = addMarker(event);
    });

    //**does not work yet**
    marker.addListener('dblclick', function() {
        marker.setMap(null);
        var remover = markers.findIndex(marker)
        markers.splice(remover)
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
            label: count++,
        });
        //put markers into the array
        markers.push(newMarker);
        return newMarker;
        //console.log(markers);
    }
}