document.addEventListener("DOMContentLoaded", () => {

// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll("#nav a");

if (menuBtn && nav) {
menuBtn.addEventListener("click", () => {
const isOpen = nav.classList.toggle("active");

  menuBtn.setAttribute("aria-expanded", isOpen);

  menuBtn.classList.toggle("open", isOpen);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

}

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
(entries, observerInstance) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
observerInstance.unobserve(entry.target);
}
});
},
{
threshold: 0.15
}
);

revealElements.forEach(element => {
observer.observe(element);
});

// Current year
const yearElement = document.querySelector("#year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

});
