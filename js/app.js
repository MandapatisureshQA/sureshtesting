// hamburger.addEventListener("click", () => {
//     console.log("you clicked");
//     alert("you clicked");
// });

const menu_hamburger = document.querySelector(".menu-hamburger");
const  menuCloseButton = document.querySelector(".menu-close-button");
const menuContainer = document.querySelector(".menu-container");

const openSidebar = () => {
    menuContainer.classList.add("show-sidebar");
};

const closeSidebar = () => {
         menuContainer.classList.remove('show-sidebar');
};

menu_hamburger.addEventListener("click", openSidebar);
menuCloseButton.addEventListener("click", closeSidebar);



function init(){
 const hamburger = document.querySelector(".hamburger");

const sidebarCloseButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");


const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
};

const closeSidebar = () => {
         sidebarContainer.classList.remove('show-sidebar');
};

hamburger.addEventListener("click", openSidebar);
sidebarCloseButton.addEventListener("click", closeSidebar);

}
init();

const navbarContainer = document.querySelector(".nav-container");
window.addEventListener("scroll", function()
{
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth  >= 992 ? 70 : 50 ;
    if(scrollNumber >= targetNumber)
    {
        navbarContainer.classList.add("sticky-nav");
    }
    else
    {
        navbarContainer.classList.remove("sticky-nav");
    }
});




