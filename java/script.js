const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closemenuBtn = document.querySelector("#menu-close-btn");
const menulist = document.querySelector("menu-list")

menuBtn.addEventListener("click", () => {
    header.classList.toggle("show-menu");
    

});


closemenuBtn.addEventListener("click", () => {
    menuBtn.click();

});
document.addEventListener("click", (e) => {
    const isClickInsideMenu = header.contains(e.target);
    const isMenuOpen = header.classList.contains("show-menu");

    if (!isClickInsideMenu && isMenuOpen) {
        header.classList.remove("show-menu");
        
    }
});



const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

