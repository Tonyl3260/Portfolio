// Smooth scroll functionality
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Interest button toggle functionality
const buttons = document.querySelectorAll('.interest-buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});