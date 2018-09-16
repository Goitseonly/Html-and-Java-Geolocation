var watchId;

function watchPosition() {
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(onSuccess, onError, {
            maximumAge: 60 * 1000,
            timeout: 5 * 60 * 1000,
            enableHighAccuracy: true
        });
    } else { document.getElementById("location").innerHTML = "your browser does not support Geolocation API" }

}

function stopWatching() {
    clearWatch(watchId);
}

function getPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + "<br>" +
        "Longitude: " + position.coords.longitude;


}

// For viewing Maps On your browser
window.onload = function() {
    var mapOptions = {
        center: new google.maps.LatLng(-26.051777, 28.092804),
        zoom: 14,
        mapTyeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("interactivemap"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-26.051777, 28.092804),
        map: map,
        title: "Woodmead Shopping Center. Click for more info!",
        //animation: google.maps.Animatgion.DROP
    });
    var info = new google.maps.InfoWindow({
        content: "Situated at north of Johannesburg, Gauteng region, South Africa"
    });
    info.open(map, marker);
    google.maps.event.addLister(marker, "click", function() {

    })
}

function onSuccess(position) {
    var currentLat = position.coords.latitude;
    var currentLong = position.coords.longitude;

    var geocoder = new google.maps.Geocoder();
    var latlong = new google.maps.latlong(currentLat, currentLong);

    geocoder.geocode({ 'latlng': latlng }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results) {
                //alert(results[0].formatted_address);
                document.getElementById("location").innerHTML = "You are now near" + results[0].formatted_address;
            }
        } else
            alert("Could not get the geolocation information");

    });

}

function onError(error) {
    switch (error.code) {

    }
}