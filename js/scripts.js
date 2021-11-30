const navControl = document.querySelector("#nav-control");
const navLinks = document.querySelector(".nav_links_container");
const navSocialLinks = document.querySelector(".social_links_container")
navControl.addEventListener('click', function(){
    navLinks.classList.toggle("responsive");
    navSocialLinks.classList.toggle("responsive");
})