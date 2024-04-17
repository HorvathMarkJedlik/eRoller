document.addEventListener("DOMContentLoaded", function() {
    var welcomeMessage = document.getElementById("welcome-message");
    var content = document.getElementById("content");


    setTimeout(function() {

        welcomeMessage.style.animation = "fadeOut 1s forwards";

        setTimeout(function() {

            welcomeMessage.style.display = "none";

            content.style.animation = "fadeIn 1s forwards";
t
            content.style.display = "block";
        }, 1000); 
    }, 2000);
});



function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const elementsToSearch = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div"); 
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
