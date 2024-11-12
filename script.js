const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const servicesWrapper = document.querySelector(".services-wrapper");
const serviceItems = document.querySelectorAll(".service"); 

let scrollAmount = 0;

rightArrow.onclick = function () {
  // Scroll by the width of one item
  servicesWrapper.scrollBy({
    left: serviceItems[0].clientWidth + 10,
    behavior: "smooth",
  });
};

leftArrow.onclick = function () {
  // Scroll by the width of one item
  servicesWrapper.scrollBy({
    left: -(serviceItems[0].clientWidth + 10),
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.querySelector("i").classList.toggle("fa-bars");
    hamburger.querySelector("i").classList.toggle("fa-times");
  });

  // Close the menu when a link is clicked
  navLinks.querySelectorAll("li a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active"); 
      hamburger.querySelector("i").classList.remove("fa-times");
      hamburger.querySelector("i").classList.add("fa-bars"); 
    });
  });
});

const inputs = document.querySelectorAll(".input");

function addFocus() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function removeFocus() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addFocus);
  input.addEventListener("blur", removeFocus);
});
