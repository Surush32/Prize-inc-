

const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentNode.classList.add("focus");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.parentNode.classList.remove("focus");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const serviceContainers = document.querySelectorAll('.services-container');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stops observing after the animation is triggered
      }
    });
  }, {
    threshold: 0.5// Adjusts when the animation is triggered
  });

  serviceContainers.forEach(container => {
    observer.observe(container);
  });
});


  document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav ul').classList.toggle('active');
  });

  document.querySelectorAll('.btn2').forEach(btn => {
    btn.addEventListener('click', event => {
        event.preventDefault(); // Stops the link from being clickable
    });
});