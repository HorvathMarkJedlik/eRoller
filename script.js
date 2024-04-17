document.addEventListener("DOMContentLoaded", function() {
    var welcomeMessage = document.getElementById("welcome-message");
    var content = document.getElementById("content");

    // Időzítő az oldal először 2 másodpercig történő megjelenítéséhez
    setTimeout(function() {
        // Animáció az üdvözlő üzenet eltüntetéséhez
        welcomeMessage.style.animation = "fadeOut 1s forwards";

        // Időzítő az üzenet eltüntetése után
        setTimeout(function() {
            // Eltávolítjuk az üdvözlő üzenetet
            welcomeMessage.style.display = "none";

            // Animáció a tartalom megjelenítéséhez
            content.style.animation = "fadeIn 1s forwards";

            // Megjelenítjük az összes weboldali tartalmat
            content.style.display = "block";
        }, 1000); // Az időzítés időtartama megegyezik az eltüntető animáció időtartamával
    }, 2000); // Az időzítés időtartama: 2 másodperc
});

let name = prompt("Kérem a neved: ");
if (name.trim() !== "") {
    document.getElementById("welcomeName").textContent = name;
    document.getElementById("welcomeName").style.color = "#77b86d";
} else {
    document.getElementById("welcomeName").textContent = "Ismeretlen";
    document.getElementById("welcomeName").style.color = "#952929";
}