/*------------------------Navbar section starts here----------------------------*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelector(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function cliseMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
/*------------------------Navbar section ends here----------------------------*/