// document.addEventListener("DOMContentLoaded", function() {
//     var welcomeMessage = document.getElementById("welcome-message");
//     var content = document.getElementById("content");

//     setTimeout(function() {
//         welcomeMessage.style.animation = "fadeOut 1s forwards";

//         setTimeout(function() {
//             welcomeMessage.style.display = "none";

//             content.style.animation = "fadeIn 1s forwards";

//             content.style.display = "block";
//         }, 1000); 
//     }, 2000); 
// });

// let name = prompt("Kérem a neved: ");
// if (name.trim() !== "") {
//     document.getElementById("welcomeName").textContent = name;
//     document.getElementById("welcomeName").style.color = "#77b86d";
// } else {
//     document.getElementById("welcomeName").textContent = "Ismeretlen";
//     document.getElementById("welcomeName").style.color = "#952929";
// }

//MÁRK
document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");
    const alert = document.querySelector("#alert");

    let position = 0;
    let gravity = 0.9;
    let isJumping = false;
    let isGameOver = false;
    let score = 0;

function control(event) {
        if(event.keyCode === 32){
        if(!isJumping){
            isJumping = true;
            jump();
        }
    }
}


function jump(){
    let count = 5;
    let jumpTimerId = setInterval(() => {
        if(count == 20){
            clearInterval(jumpTimerId)

            let downTimerId = setInterval(() => {
                if(count == 5){
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 5;
                position = position * gravity;
                dino.style.bottom = position + 'px';
                count --;
            }, 20);
        }
        position += 30;
        position = position * gravity;
        dino.style.bottom = position + 'px';
        count++;
    },20);
}

function generateCactus() {
    let randomTime = (Math.random() * 2000) + 500;
    let cactusPosition = 1500;
    let cactus = document.createElement('div');
    

    if(!isGameOver){
        cactus.classList.add('cactus');
        cactus.style.left = cactusPosition + 'px';
        grid.appendChild(cactus);
    }

    let downTimerId = setInterval(() => {
        if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(downTimerId);
            alert.innerHTML = 'Game Over! Score: ' + score;
            isGameOver = true;
            while(grid.firstChild){
                grid.removeChild(grid.lastChild);
            }
        }
    if(cactusPosition == 0){
        score ++;
        alert.innerHTML = score;
    }

    cactusPosition -= 10;
    cactus.style.left = cactusPosition + 'px';
    },30);

    if(!isGameOver){
        setTimeout(generateCactus, randomTime);
    }
}

document.addEventListener('keyup', control)
generateCactus();
});

let restartbtn = document.getElementById("restartButton");
restartbtn.addEventListener("click",function(){
    DOMContentLoaded
});


const restartButton = document.getElementById('restartButton');
    restartButton.addEventListener('click', () => {
        location.reload();
    });

//ROLAND

let MotusScooty = document.querySelector(".Motus-Scooty");
let MotusScootyButton = document.querySelector(".MotusScooty-button");
let MotusClose = document.querySelector(".svg-close");
let Blaupunkt = document.querySelector(".Blaupunkt-button");
let BlaupunktClose = document.querySelector(".Blaupunkt-close");
let pro = document.querySelector(".pro-button");
let proClose = document.querySelector(".pro-close");

MotusScootyButton.addEventListener("click", function() {
    document.querySelector(".Motus-Scooty").style.display = "flex";
    document.querySelector(".Motus-Scooty").style.opacity = "1";
    document.querySelector(".card-deck").style.display = "none";
    document.querySelector(".h2Text").style.display = "none";
});


MotusClose.addEventListener("click", function() {
    document.querySelector(".Motus-Scooty").style.display = "none";
    document.querySelector(".Motus-Scooty").style.opacity = "0";
    document.querySelector(".card-deck").style.display = "flex";
    document.querySelector(".h2Text").style.display = "block";
});

Blaupunkt.addEventListener("click", function() {
    document.querySelector(".Blaupunkt").style.display = "flex";
    document.querySelector(".Blaupunkt").style.opacity = "1";
    document.querySelector(".card-deck").style.display = "none";
    document.querySelector(".h2Text").style.display = "none";
});

BlaupunktClose.addEventListener("click", function() {
    document.querySelector(".Blaupunkt").style.display = "none";
    document.querySelector(".Blaupunkt").style.opacity = "0";
    document.querySelector(".card-deck").style.display = "flex";
    document.querySelector(".h2Text").style.display = "block";
});

pro.addEventListener("click", function() {
    document.querySelector(".pro").style.display = "flex";
    document.querySelector(".pro").style.opacity = "1";
    document.querySelector(".card-deck").style.display = "none";
    document.querySelector(".h2Text").style.display = "none";
});

proClose.addEventListener("click", function() {
    document.querySelector(".pro").style.display = "none";
    document.querySelector(".pro").style.opacity = "0";
    document.querySelector(".card-deck").style.display = "flex";
    document.querySelector(".h2Text").style.display = "block";
});