/* ----- Google Map ----- */
if ($("#map").length) {
    function initialize() {
        var mapOptions = {
            zoom: 16,
            scrollwheel: false,
            center: new google.maps.LatLng(-6.946429902716876, 107.59334509342115) //please add your location here
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            //icon: 'images/locating.png', //if u want custom
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
}