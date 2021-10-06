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
