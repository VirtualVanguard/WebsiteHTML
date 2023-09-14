// Variables pour suivre l'index de l'image actuellement affichée
let currentImageIndex = 0;
let autoplayInterval;

// Éléments HTML
const slider = document.getElementById('slider');
const sliderContent = document.getElementById('slider_content');
const nextButton = document.getElementById('slider_nextImage');
const lastButton = document.getElementById('slider_lastImage');

// Fonction pour mettre à jour l'image du slider
function updateSlider() {
    sliderContent.textContent = imageUrls[currentImageIndex];
    slider.style.backgroundImage = `url('${imageUrls[currentImageIndex]}')`;
}

document.getElementById('slider_nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    updateSlider();
});

document.getElementById('slider_lastImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
    updateSlider();
});

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        updateSlider();
    }, 3000); // Intervalle de changement d'image en millisecondes (ici, 3 secondes)
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Gestion de l'autoplay lorsque la souris survole le slider
slider.addEventListener('mouseenter', stopAutoplay);
slider.addEventListener('mouseleave', startAutoplay);

// Démarrez l'autoplay par défaut
startAutoplay();