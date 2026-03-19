// Animation des sections au défilement de la page
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
            section.classList.add('visible');
        }
    });
});

// Affichage du bouton "Retour en haut"
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Fonction pour remonter en haut de la page
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Script pour le menu hamburger
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}