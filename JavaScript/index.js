const navbar = document.querySelector(".navbar");
const toggleButton = document.querySelector(".navbar__toggle");
const links = document.querySelector(".navbar__links");

if (navbar && toggleButton && links) {
  toggleButton.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("navbar--open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
    links.setAttribute("aria-hidden", String(!isOpen));
  });
}