// Select all elements with the class "fade-in"
const fadeElements = document.querySelectorAll('.fade-in');

// Add an event listener to the window for the scroll event
window.addEventListener('scroll', () => {
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the element is visible within the viewport
    if (rect.top < windowHeight - 50) {
      element.classList.add('visible');
    }
  });
});
