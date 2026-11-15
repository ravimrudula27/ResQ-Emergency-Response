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
    if (!navigator.geolocation) {
        alert("Location is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const message =
                "🚨 EMERGENCY ALERT!\n" +
                "I need help.\n" +
                "My current location:\n" +
                "https://www.google.com/maps?q=" + lat + "," + lon;

            const phone = prompt("Enter WhatsApp number with country code:");

            if (!phone) return;

            const url =
                "https://web.whatsapp.com/send?phone=" +
                phone.replace(/\D/g, "") +
                "&text=" +
                encodeURIComponent(message);

            window.open(url, "_blank");
        },

        function(error) {
            alert("Location permission was not given.");
        }
    );
}
function getHospitalDirections() {
    if (!navigator.geolocation) {
        alert("Location is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url =
            "https://www.google.com/maps/dir/?api=1" +
            "&origin=" + lat + "," + lon +
            "&destination=hospitals";

        window.open(url, "_blank");
    });
}
function classifyEmergency() {
    const details = document.getElementById("emergencyDetails").value.toLowerCase();
    const result = document.getElementById("emergencyResult");

    if (details.includes("accident") || details.includes("crash")) {
        result.innerHTML = "🚑 Emergency Type: Accident<br>Recommended: Call ambulance and police.";
    }
    else if (details.includes("chest") || details.includes("heart")) {
        result.innerHTML = "❤️ Emergency Type: Medical<br>Recommended: Call an ambulance immediately.";
    }
    else if (details.includes("fire") || details.includes("burn")) {
        result.innerHTML = "🔥 Emergency Type: Fire<br>Recommended: Move to a safe place and contact fire services.";
    }
    else if (details.includes("police") || details.includes("danger") || details.includes("attack")) {
        result.innerHTML = "🚔 Emergency Type: Safety Threat<br>Recommended: Contact police and move to a safe location.";
    }
    else {
        result.innerHTML = "⚠️ Emergency type could not be identified. Please contact emergency services.";
    }
}