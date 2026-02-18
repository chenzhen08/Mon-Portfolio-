/* ===== MENU MOBILE ===== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navToggle.querySelector('i').className = navMenu.classList.contains('show')
        ? 'bx bx-x'
        : 'bx bx-menu';
});

/* Fermer le menu au clic sur un lien */
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navToggle.querySelector('i').className = 'bx bx-menu';
    });
});

/* ===== LIEN ACTIF AU SCROLL ===== */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sTop = section.offsetTop - 100;
        const sHeight = section.offsetHeight;
        const sId = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${sId}"]`);

        if (link) {
            if (scrollY >= sTop && scrollY < sTop + sHeight) {
                document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active-link'));
                link.classList.add('active-link');
            }
        }
    });
});