function findHospitals() {
    if (!navigator.geolocation) {
        alert("Location is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        window.open(
            "https://www.google.com/maps/search/hospitals/@"
            + lat + "," + lon + ",14z",
            "_blank"
        );
    });
}

function findPolice() {
    if (!navigator.geolocation) {
        alert("Location is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        window.open(
            "https://www.google.com/maps/search/police+stations/@"
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
    const phone = prompt("Enter WhatsApp number with country code:");

    if (!phone) {
        return;
    }

    const message = "🚨 EMERGENCY ALERT! I need help.";

    const whatsappURL =
        "https://wa.me/" +
        phone.replace(/\D/g, "") +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappURL;
}