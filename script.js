
/* F ATELIER — INTERACTIONS */

// Update the footer year automatically
const year = new Date().getFullYear();
const footer = document.querySelector(".hero-footer");

if (footer) {
  const copyright = footer.querySelector("span:last-child");

  if (copyright) {
    copyright.textContent = `© F Atelier ${year}`;
  }
}

// Smooth scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
