const sosButton = document.getElementById("sosButton");
const status = document.getElementById("status");
const locationText = document.getElementById("location");

sosButton.addEventListener("click", function () {

    status.innerHTML = "🚨 Emergency activated!";

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function (position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                locationText.innerHTML =
                    "Latitude: " + latitude +
                    "<br>Longitude: " + longitude;

            },

            function () {
                locationText.innerHTML =
                    "Unable to access your location.";
            }
        );

    } else {
        locationText.innerHTML =
            "Geolocation is not supported by this browser.";
    }

});

function findHospitals() {
    window.open(
        "https://www.google.com/maps/search/nearest+hospitals/",
        "_blank"
    );
}

function findPolice() {
    window.open(
        "https://www.google.com/maps/search/nearest+police+stations/",
        "_blank"
    );
}