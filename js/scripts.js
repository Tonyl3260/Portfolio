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

// Get the elements
const nameTrigger = document.getElementById('name-trigger');
const popupContainer = document.getElementById('popup-container');
const closePopupButton = document.getElementById('close-popup');

// Show the popup when the name "Tony!" is clicked
nameTrigger.addEventListener('click', () => {
    popupContainer.style.display = 'flex'; // Show popup
});

// Close the popup when the 'x' mark is clicked
closePopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none'; // Hide popup
});

// Optional: Close the popup if user clicks outside the popup
popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});

