function getLocation() {
    // Check whether browser supports Geolocation API or not
    if (navigator.geolocation) {
        // Supported
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        // Not supported
        alert("Oops! This browser does not support Geolocation API.");
    }
}

function onError(error) {
    switch (error.code) {
        case PERMISSION_DENIED:
            alert("User denied permission");
            break;
        case TIMEOUT:
            alert("Geolocation time out");
            break;
        case POSITION_UNAVAILABLE:
            alert("Geolocation information is not available");
            break;
        default:
            alert("Unknown error");
            break;
    }
}

function getPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + "<br>" +
        "Longitude: " + position.coords.longitude;

    alert("Accuracy: " + position.coords.accuracy);
    alert("Altitude: " + position.coords.altitude);
    alert("Altitude Accuracy: " + position.coords.altitudeAccuracy);
    alert("Direction: " + position.coords.heading);
    alert("Speed: " + position.coords.speed);
    alert("Timestamp: " + position.timestamp);
}