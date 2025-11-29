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

const gradeButtons = document.querySelectorAll(".selector_class__item");
const gradePanels = document.querySelectorAll(".grade-card");

if (gradeButtons.length && gradePanels.length) {
  gradeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const course = btn.dataset.course;

      gradeButtons.forEach((item) =>
        item.classList.toggle("is-active", item === btn)
      );

      gradePanels.forEach((panel) =>
        panel.classList.toggle("is-active", panel.dataset.course === course)
      );
    });
  });
}