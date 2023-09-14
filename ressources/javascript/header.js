// Sélectionnez l'élément du header
const header = document.querySelector('.sticky-header');

// Écoutez l'événement de défilement de la page
window.addEventListener('scroll', () => {
  // Obtenez la position verticale actuelle de la page
  const scrollY = window.scrollY;

  // Mettez à jour la classe CSS en fonction de la position de défilement
  if (scrollY > 0) {
    header.classList.remove('py-6');
    header.classList.add('py-2');
  } else {
    header.classList.remove('py-2');
    header.classList.add('py-6');
  }
});