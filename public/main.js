// Get the menu button and navigation links
const menuButn = document.getElementById("menu-Butn");
const navLinks = document.getElementById("nav-links");
const menuButnIcon = menuButn.querySelector("i");

// Add a click event listener to the menu button
menuButn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuButnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the navigation menu when a link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuButnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal options for animations
const scrollRevealOption = {
  distance: "50px", // How far the element moves during the animation
  origin: "bottom", // The direction the element moves from
  duration: 1000,   // Animation duration in milliseconds
};

// Reveal the header image with a scroll animation from the right
ScrollReveal().reveal(".headerimage img", {
  ...scrollRevealOption,
  origin: "right",
});

// Reveal the header content (like titles) with different delays
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

// Reveal the search form with a delay
ScrollReveal().reveal(".SearchForm form", {
  ...scrollRevealOption,
  delay: 2000,
});

// Reveal cards in the "about" section with a delay between them
ScrollReveal().reveal(".aboutcard", {
  ...scrollRevealOption,
  interval: 500,
});

// Get the tabs container for the "Offers" section
const tabs = document.querySelector(".Offerstabs");

// Add a click event listener to the tabs container
tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(
    ".Offerscontainer .tabcontent"
  );

  // Loop through all tab buttons and update their active state
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Loop through all tab contents and show only the active one
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// Reveal elements in the "Why Us" section with animations
ScrollReveal().reveal(".Why-usimage img", {
  ...scrollRevealOption,
  origin: "left", // Animate from the left
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

// Reveal elements in the "Subscribe" section with animations
ScrollReveal().reveal(".subscribeimage img", {
  ...scrollRevealOption,
  origin: "right", // Animate from the right
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

// Initialize the swiper (slideshow) for images or content
const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Show 1 slide at a time
  spaceBetween: 20, // Space between slides
  loop: true, // Loop back to the first slide after the last one
  autoplay: {
    delay: 1500, // Wait 1.5 seconds before moving to the next slide
    disableOnInteraction: false, // Keep autoplay running after user interactions
    pauseOnMouseEnter: true, // Pause the slideshow when the mouse hovers over it
  },
  breakpoints: {
    640: {
      slidesPerView: 1, // For smaller screens, show 1 slide
    },
    1024: {
      slidesPerView: 2, // For larger screens, show 2 slides
    },
  },
});
