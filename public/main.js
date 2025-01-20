const menuButn = document.getElementById("menu-Butn");
const navLinks = document.getElementById("nav-links");
const menuButnIcon = menuButn.querySelector("i");

menuButn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuButnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuButnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".headerimage img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".headercontent h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".headercontent h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".headercontent .sectiondescription", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".SearchForm form", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".aboutcard", {
  ...scrollRevealOption,
  interval: 500,
});

const tabs = document.querySelector(".Offerstabs");

tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(
    ".Offerscontainer .tabcontent"
  );
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

ScrollReveal().reveal(".Why-usimage img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".Why-uscontent .HeaderSection", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".Why-uscontent .sectiondescription", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".Why-uscard", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".subscribeimage img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".subscribecontent .HeaderSection", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribecontent .sectiondescription", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".subscribecontent form", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
