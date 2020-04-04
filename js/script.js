console.log("test");

var lat = -34.962764;

var log = 138.526134;

// function initMap() {
//     var Latlog = new google.maps.LatLng(lat, log);
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 30, center: Latlog, mapTypeId: 'satellite'});
//     var marker = new google.maps.Marker({position: Latlog, map: map});
// }


function initMap() {
    var Latlog = new google.maps.LatLng(lat, log);
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 30, center: Latlog,
      mapTypeId: 'satellite'
    });


    map.addListener('click', function(e) {
        console.log("click");
        placeMarkerAndPanTo(e.latLng, map);
    });


    function placeMarkerAndPanTo(latLng, map) {
        var tee = "https://img.icons8.com/office/2x/golf-ball.png";
        var ballland = "https://img.icons8.com/office/2x/golf.png";
        var hole = "https://img.icons8.com/office/2x/empty-flag.png";
            var btntype = [tee,ballland,hole];
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: btntype[2]
    });
    console.log(latLng.lat);
    }
};