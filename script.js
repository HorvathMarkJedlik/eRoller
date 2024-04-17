document.addEventListener("DOMContentLoaded", function() {
    var welcomeMessage = document.getElementById("welcome-message");
    var content = document.getElementById("content");

    setTimeout(function() {
        welcomeMessage.style.animation = "fadeOut 1s forwards";

        setTimeout(function() {
            welcomeMessage.style.display = "none";

            content.style.animation = "fadeIn 1s forwards";

            content.style.display = "block";
        }, 1000); 
    }, 2000); 
});

let name = prompt("Kérem a neved: ");
if (name.trim() !== "") {
    document.getElementById("welcomeName").textContent = name;
    document.getElementById("welcomeName").style.color = "#77b86d";
} else {
    document.getElementById("welcomeName").textContent = "Ismeretlen";
    document.getElementById("welcomeName").style.color = "#952929";
}