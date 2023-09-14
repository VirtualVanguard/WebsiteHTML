const toggleButton = document.getElementById('box_search_togglebutton1');
const searchBox = document.getElementById('box_search');

// Écoutez l'événement de clic sur le bouton
toggleButton.addEventListener('click', () => {
    // Vérifiez si la classe 'hidden' est actuellement présente
    const isHidden = searchBox.classList.contains('hidden');

    // Inversez l'état de la classe 'hidden'
    if (isHidden) {
        searchBox.classList.remove('hidden');
        searchBox.classList.add('fixed');
    } else {
        searchBox.classList.add('hidden');
        searchBox.classList.remove('fixed');
    }
});

const cancelButton = document.getElementById('box_search_togglebutton2');

// Écoutez l'événement de clic sur le bouton "Annuler la recherche"
cancelButton.addEventListener('click', () => {
    searchBox.classList.add('hidden'); // Ajoutez la classe 'hidden' pour masquer la boîte de recherche
});