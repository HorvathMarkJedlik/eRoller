let name = prompt("Kérem a neved: ");
if (name.trim() !== "") {
    document.getElementById("welcomeName").textContent = name;
    document.getElementById("welcomeName").style.color = "#77b86d";
} else {
    document.getElementById("welcomeName").textContent = "Ismeretlen";
    document.getElementById("welcomeName").style.color = "#952929";
}

let hungary = document.querySelector(".hungary");
let hungaryImage = document.getElementById("hungary");
hungary.addEventListener("mouseover", function() {
    document.querySelector("#hungary").style.opacity = "1"
    hungaryImage.style.display = 'flex'
});

hungary.addEventListener("mouseleave", function() {
    document.querySelector("#hungary").style.opacity = "0"
    hungaryImage.style.display = 'none'
    hungaryImage.style.animation = 'none'
});