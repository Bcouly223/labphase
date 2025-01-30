// SLIDER AUTOMATIQUE POUR "CHAUD BOUILLANT"
const foodList = document.querySelector('.food-list');
let scrollAmount = 0;

function autoScrollFood() {
    scrollAmount += 1;
    if (scrollAmount >= foodList.scrollWidth - foodList.clientWidth) {
        scrollAmount = 0;
    }
    foodList.scrollLeft = scrollAmount;
}
setInterval(autoScrollFood, 50); // Défilement automatique

// POP-UP DE CONNEXION
const loginButton = document.querySelector('.fa-crown');
const loginPopup = document.querySelector('.login');

loginButton.addEventListener('click', () => {
    loginPopup.style.display = loginPopup.style.display === 'block' ? 'none' : 'block';
});

// FILTRE POUR LA SECTION "UNE PETITE OU GROSSE FAIM"
const littleBoxes = document.querySelectorAll('.little_box .box');
const searchInput = document.createElement('input');
searchInput.placeholder = 'Recherchez un plat...';
searchInput.style.margin = '20px auto';
searchInput.style.display = 'block';
searchInput.style.padding = '10px';
searchInput.style.width = '90%';

document.querySelector('.little').prepend(searchInput);

searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    littleBoxes.forEach((box) => {
        const text = box.querySelector('h3').textContent.toLowerCase();
        box.style.display = text.includes(searchValue) ? 'block' : 'none';
    });
});


// ANIMATION AU DÉFILEMENT
const observerOptions = {
    root: null, // Utilise le viewport comme référence
    threshold: 0.1, // Éléments visibles à au moins 10%
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Ajoute la classe pour l'animation
            observer.unobserve(entry.target); // Arrête d'observer après l'apparition
        }
    });
}, observerOptions);

// Sélectionne tous les éléments à animer
const animatableElements = document.querySelectorAll('.animate-on-scroll');

// Ajoute l'observateur pour chaque élément
animatableElements.forEach((element) => {
    observer.observe(element);
});

// Menu burger responsive
const menuIcon = document.querySelector('.menu img');
const navLinks = document.querySelector('.menu ul');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});
