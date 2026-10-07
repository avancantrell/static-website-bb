const hamMenu = document.querySelector(".ham-menu-icon");
const navMenu = document.querySelector(".nav-menu");
const navLinks = navMenu.querySelectorAll("a");

function closeMenu() {
    navMenu.classList.remove("active");
    hamMenu.classList.remove("active");
    document.body.classList.remove("menu-open");

    hamMenu.setAttribute("aria-expanded", "false");
    hamMenu.setAttribute("aria-label", "Open navigation menu");
}

hamMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    const menuIsOpen = navMenu.classList.contains("active");

    hamMenu.setAttribute("aria-expanded", menuIsOpen);
    hamMenu.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});
