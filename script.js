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



function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const elementsToSearch = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div"); // Itt felsorolhatod a keresendő elem típusokat
    let count = 0;

    elementsToSearch.forEach(element => {
        const elementText = element.textContent.toLowerCase();
        const occurrences = countOccurrences(elementText, searchTerm);
        count += occurrences;
    });

    displayResults(count);
}

function countOccurrences(text, searchTerm) {
    const regex = new RegExp(searchTerm, 'g');
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

function displayResults(count) {
    if (count === 0) {
        alert("Nincs találat.");
    } else {
        alert(`A keresett szó pontosan ${count} alkalommal fordul elő az oldalon.`);
    }
}

function displayResults(count, searchTerm) {
    if (count === 0) {
        alert("Nincs találat.");
    } else {
        const confirmation = confirm(`A keresett szó pontosan ${count} alkalommal fordul elő az oldalon. Ugrasz az első találatra?`);

        if (confirmation) {
            jumpToFirstOccurrence(searchTerm);
        }
    }
}

function jumpToFirstOccurrence(searchTerm) {
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");

    for (let i = 0; i < elements.length; i++) {
        const elementText = elements[i].textContent.toLowerCase();
        const index = elementText.indexOf(searchTerm);

        if (index !== -1) {
            const textNode = elements[i].childNodes[0];
            const range = document.createRange();
            range.setStart(textNode, index);
            range.setEnd(textNode, index + searchTerm.length);

            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            elements[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const elementsToSearch = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");
    let count = 0;

    elementsToSearch.forEach(element => {
        const elementText = element.textContent.toLowerCase();
        const occurrences = countOccurrences(elementText, searchTerm);
        count += occurrences;
    });

    displayResults(count, searchTerm);
}

function countOccurrences(text, searchTerm) {
    const regex = new RegExp(searchTerm, 'g');
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}
