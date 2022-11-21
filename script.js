//smooth scrolling

const links = document.querySelectorAll(".nav-list li a");

for (i of links) {
    i.addEventListener("click", smoothScroll);
}


function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({behavior: "smooth",

});

hideMenu()

}


//RESPONSIVE MOBILE MENU

const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".harmburger");
const close = document.querySelector(".close");
const menuWrapper = document.querySelector(".nav-wrapper");

const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menuWrapper.style.transform = "translateX(0)";
    menu.style.transform = "translateX(0)";

};

const hideMenu = () => {
    close.style.transform = "translateY(-200%)";
    hamburger.style.display = "block";
    menuWrapper.style.transform = "translateX(-200%)";
    menu.style.transform = "translateX(200%)";
    submenuThree.style.transform = "translateX(-200%)";
}

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);


//submenu subsession 

const thirdLink = document.querySelector(".third-link");
const backToMenu = document.querySelector(".back-to-menu");
const submenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", () => {
    menu.style.transform = "translateX(-200%)";
    submenuThree.style.transform = "translateX(0)";
    
})

backToMenu.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
    submenuThree.style.transform = "translateX(-200%)";

})
