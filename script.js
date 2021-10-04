const listItems = document.querySelectorAll('.nav-list-items')
const button = document.querySelector('#menu-btn')
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










button.addEventListener('click', menu())



   