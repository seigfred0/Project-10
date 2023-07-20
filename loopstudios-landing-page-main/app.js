const navToggle = document.querySelector(".navbar_toggle");

const links = document.querySelector(".main_nav");
const nav = document.querySelector(".navigation");
const background = document.querySelector("header");


navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");

   
    if (links.classList.contains("show_nav")) {
        nav.style.backgroundColor = 'black';
        background.style.backgroundImage = 'none';
        background.style.backgroundColor = 'black';
    } else {
        nav.style.backgroundColor = 'transparent';
        background.style.backgroundImage = "url(images/mobile/image-hero.jpg)";
    }
})


// I finally manage to solve the problem!!!! Whooo