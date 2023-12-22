let nav_button = document.querySelector('.hamburger');
let nav_header = document.querySelector('.header-class');
let nav_list_button = document.querySelector('.nav-btns');
const toggleNavbar = ()=>{
    nav_header.classList.toggle('active');
}
const toggleNavList = ()=>{
    nav_header.classList.toggle('active');
}
nav_button.addEventListener('click', ()=> toggleNavbar());
nav_list_button.addEventListener('click', ()=> toggleNavList());