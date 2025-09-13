const currentyear = document.querySelector('#currentyear');
const today = new Date();
currentyear.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.querySelector('nav');
hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        hamburgerBtn.textContent = '✖';
    } else {
        hamburgerBtn.textContent = '☰';
    }
});