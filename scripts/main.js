const menuHamburger = document.querySelector("#menu-hamburger");
const closeMenu = document.querySelector(".close-menu");
const menuMobile = document.querySelector(".menu-mobile");
const linksMenuMobile = menuMobile.querySelectorAll("a");

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  "#introduction h1, #introduction p, #introduction .button-list, iframe, #prices .card, #prices h1, #prices p, #where-to h1, #where-to p, #where-to li, #where-to a, #market h1, .market-item p, #how-to h1, #how-to p, #how-to img, #faq h1, #faq h2, .faq-item, footer",
  { delay: 100 }
);

const toggleFaqItem = (item) => {
  const faqList = document.querySelectorAll(".faq-item");
  const answer = item.querySelector(".answer");
  for (const faq of faqList) {
    if (faq !== item) {
      faq.querySelector(".question").classList.remove("active");
      faq.querySelector("span").classList.remove("open");
      faq.querySelector(".answer").classList.remove("open");
    }
  }

  item.querySelector(".question").classList.toggle("active");
  answer.classList.toggle("open");
  const arrow = item.querySelector("span");

  arrow.classList.toggle("open");
};

menuHamburger.addEventListener("click", () => {
  const menu = document.querySelector(".menu-mobile");
  menu.classList.toggle("open");
  menuHamburger.classList.toggle("active");
  closeMenu.classList.toggle("open");
});

closeMenu.addEventListener("click", () => {
  const menu = document.querySelector(".menu-mobile");
  menu.classList.toggle("open");
  menuHamburger.classList.toggle("active");
  closeMenu.classList.toggle("open");
});

for (const link of linksMenuMobile) {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".menu-mobile");
    menu.classList.toggle("open");
    menuHamburger.classList.toggle("active");
    closeMenu.classList.toggle("open");
  });
}

new Counter('#tv-count');
new Counter('#subscribers-count');
new Counter('#clients-count');