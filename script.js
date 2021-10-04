const listItems = document.querySelectorAll('.nav-list-items')
const hamburger = document.querySelector('#menu-btn');
const nav_menu = document.querySelector('.nav-list')
const nav_list_items = document.querySelectorAll('a .nav-list-items')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')



function toggleMenu() {
    if (nav_menu.classList.contains("show")) {
        nav_menu.classList.remove("show");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        nav_menu.classList.add("show");
        closeIcon.style.display = "flex";
        menuIcon.style.display = "none";
    }
}


hamburger.addEventListener("click", toggleMenu);



   