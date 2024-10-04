// Smooth scroll functionality
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

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

const popupContainerExp = document.getElementById('experience-popup');
const closePopupButtonExp = document.getElementById('close-popupExp');
const popupRole = document.getElementById('popup-role');
const popupDescription = document.getElementById('popup-description');

// Add event listeners to timeline items to trigger the popup
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        const role = item.getAttribute('data-role');
        
        // Populate popup content based on the clicked item
        popupRole.innerText = role;
        popupDescription.innerText = `Description for ${role}`;  // Placeholder description
        
        // Show popup
        popupContainerExp.style.display = 'flex';
    });
});

// Close the popup when the close button is clicked
closePopupButtonExp.addEventListener('click', () => {
    popupContainerExp.style.display = 'none';
});

// Close the popup when the user clicks outside of the popup content
popupContainerExp.addEventListener('click', (event) => {
    if (event.target === popupContainerExp) {
        popupContainerExp.style.display = 'none';
    }
});