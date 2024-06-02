// Verandert de achtergrond
function toggleBackgroundImage() {
    let currentImage = document.body.style.backgroundImage;

    if (currentImage.includes('fotos/bos-achtergrond.jpeg')) {
        setBackgroundImage('fotos/slaapkamer-pou.jpeg');
    } else if (currentImage.includes('fotos/slaapkamer-pou.jpeg')) {
        setBackgroundImage('fotos/bos-achtergrond.jpeg');
    }
    console.log(`Pou wisselt van plek`);
}

document.getElementById('change-background-button').addEventListener('click', toggleBackgroundImage);
setBackgroundImage('fotos/bos-achtergrond.jpeg');

// Functie om de achtergrondafbeelding in te stellen
function setBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = "url('" + imageUrl + "')";
}

// Array met paden naar de afbeeldingen
const images = ['fotos/bee-pou.webp', 'fotos/begin-pou.webp', 'fotos/ninja-pou.webp', 'fotos/panda-pou.webp'];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Andere Pou outfit
function changeImage() {
    const randomImage = getRandomImage();
    document.getElementById('main-image').src = randomImage;
    console.log('Nieuwe afbeelding: ' + randomImage); 
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('change-image-button').addEventListener('click', changeImage);
});

// Voor het eten van Pou
let enemy1health = 100;

function updateHealth() {
    let healthVariable = document.getElementById("eten");
    healthVariable.value = enemy1health;
    console.log("Eten van pou gaat omlaag: " + enemy1health); 
}
updateHealth();

let interval = setInterval(function() {
    enemy1health -= 1;
    if (enemy1health <= 0) {
        clearInterval(interval);
        enemy1health = 0;
    }
    updateHealth();
}, 1000); 

// Verhoogt Pou zijn eten met een getal tussen de 3 en 10
function increaseHealth() {
    let randomIncrease = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    enemy1health += randomIncrease;
    updateHealth();
    console.log("Eten gaat omhoog met " + randomIncrease); 
}

let button = document.getElementById("increaseHealthButton");
button.addEventListener("click", increaseHealth);

// Dit is voor energie 
const progressBar = document.getElementById('slapen');
const toggleButton = document.getElementById('toggle-button'); 
let progressValue = 100;
let direction = -1; // door -1 neemt het af

// Werkt de progress bij
function updateProgress() {
    progressBar.value = progressValue;
}

function toggleProgress() {
    direction *= -1;
    console.log('Energie van Pou: ' + (direction === 1 ? 'Neemt toe' : 'Neemt af'));
}

function animateProgress() {
    if (direction === 1) {
        progressValue += 0.5; // neemt met zoveel toe
    } else {
        progressValue -= 0.1; // met zoveel neemt het af
    }
    
    if (progressValue <= 0 || progressValue >= 100) {
        toggleProgress();
    }
    updateProgress();
} 

const progressInterval = setInterval(animateProgress, 100);

// Om ervoor te zorgen dat het weer omhoog/omlaag gaat 
toggleButton.addEventListener('click', () => {
    toggleProgress();
});
