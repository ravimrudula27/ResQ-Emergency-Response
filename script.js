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

function sendEmergencyWhatsApp() {
    const phone = prompt(
        "Enter emergency contact number with country code (India: 91):"
    );

    if (!phone) return;

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (!navigator.geolocation) {
        alert("Location is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const message =
                "🚨 EMERGENCY! I need help. My location: " +
                "https://www.google.com/maps?q=" + lat + "," + lon;

            const url =
                "https://wa.me/" + cleanPhone +
                "?text=" + encodeURIComponent(message);

            window.open(url, "_blank");
        },
        function() {
            alert("Please allow location access.");
        }
    );
}
alert("JavaScript is connected successfully!");