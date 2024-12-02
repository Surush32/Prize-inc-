

// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", function () {
  const serviceContainers = document.querySelectorAll('.services-container');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stops observing after the animation is triggered
      }
    });
  }, {
    threshold: 0.5 // Adjusts when the animation is triggered
  });

  serviceContainers.forEach(container => {
    observer.observe(container);
  });
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.nav ul').classList.toggle('active');
});

// Prevent default behavior for .btn2
document.querySelectorAll('.btn2').forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault(); // Stops the link from being clickable
  });
});

// Handle click and touch events for the plus-icon
document.querySelectorAll('.plus-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    console.log('Clicked the plus icon!');
    // Add functionality for click here
  });

  icon.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevents accidental double events
    console.log('Touched the plus icon!');
    // Add functionality for touch here
  });
});


