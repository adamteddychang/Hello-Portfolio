const listItems = document.querySelectorAll('.nav-list-items')
const hamburger = document.querySelector('#menu-btn');
const nav_menu = document.querySelector('.nav-list')
const nav_list_items = document.querySelectorAll('.nav-list-items')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')

nav_menu.innerHTML = `
    <li class="nav-list-items"><a href="">Portfolio</a></li>
    <li class="nav-list-items"><a href="">About</a></li>
    <li class="nav-list-items"><a href="">Contact</a></li>
    <li class="nav-list-items"><a href=""><img src="Images/mail.svg" alt=""></a></li>       
`

function toggleMenu() {
    if (nav_menu.classList.contains("show")) {
        nav_menu.classList.remove("show");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        nav_menu.classList.add("show");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);



   