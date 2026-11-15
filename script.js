function findAmbulance() {
    if (!navigator.geolocation) {
        alert("Location is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        window.open(
            "https://www.google.com/maps/search/ambulance/@"
            + lat + "," + lon + ",14z",
            "_blank"
        );
    });
}
function findAmbulance() {
    if (!navigator.geolocation) {
        alert("Location is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        window.open(
            "https://www.google.com/maps/search/ambulance/@"
            + lat + "," + lon + ",14z",
            "_blank"
        );
    });
}