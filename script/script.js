let nav_button = document.querySelector('.hamburger');
let nav_header = document.querySelector('.header-class');
const toggleNavbar = ()=>{
    // alert("hi doraemon")
    nav_header.classList.toggle('active');
}
nav_button.addEventListener('click', ()=> toggleNavbar());