const hamburger = document.querySelector('#menu-btn');
const navMenu = document.querySelector('.nav-list');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navA = document.querySelectorAll('.nav_a');

function toggleMenu() {
  if (navMenu.classList.contains('show')) {
    navMenu.classList.remove('show');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'inline';
  } else {
    navMenu.classList.add('show');
    closeIcon.style.display = 'inline';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

navA.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

// JS for the Modal popups

const openbtn = document.querySelectorAll('[data-open]');
const closebtn = document.querySelectorAll('[data-close]');
const isVisible = 'visible';

for (const btn of openbtn) {
  btn.addEventListener('click', function openModal() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const btn of closebtn) {
  btn.addEventListener('click', function closeModal() {
    const modalId = this.dataset.close;
    document.getElementById(modalId).classList.remove(isVisible);
  });
}

// JS for the data object

const modalTitle = document.querySelector('.modal_title');
const languages = document.querySelector('#lang-contain');
const projectImg = document.querySelector('#proj_img');
// change img src, projectImg.src = "newsource.png"
const ProjectContent = document.querySelector('#proj_content');
