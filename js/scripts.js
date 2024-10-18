const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('ul');
const resumeLink = document.querySelector('.resume-link');
const resumePopup = document.querySelector('.resume-popup');
const closeResumeButton = document.querySelector('.resume-close button');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

resumeLink.addEventListener('click', (e) => {
  e.preventDefault();
  resumePopup.classList.add('show');
});

closeResumeButton.addEventListener('click', () => {
  resumePopup.classList.remove('show');
});

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
        const description = item.getAttribute('data-description');
        
        popupRole.innerText = role;
        popupDescription.innerText = description;
        
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

// Add event listeners to timeline items to trigger the popup
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        const role = item.getAttribute('data-role');
        const description = item.getAttribute('data-description');
        
        document.getElementById('popup-role').innerText = role;
        document.getElementById('popup-description').innerHTML = description; 

        document.getElementById('experience-popup').style.display = 'flex';
    });
});

const nameElement = document.getElementById('name-trigger');

const colors = ['#D08770', '#8FBCBB', '#A3BE8C', '#BF616A', '#EBCB8B']; // Colors to cycle through
let colorIndex = 0;
let popDuration = 500; // Default pop effect duration

function changeColorAndPop() {
    // Change color
    nameElement.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; 


    nameElement.style.transform = 'scale(1.1)'; 
    popDuration = 500; 

    setTimeout(() => {
        nameElement.style.transform = 'scale(1)';
    }, popDuration); 
}

let colorChangeInterval = setInterval(changeColorAndPop, 1000);

// Hover event to change duration
nameElement.addEventListener('mouseover', () => {
    clearInterval(colorChangeInterval); 
    popDuration = 100; 
    changeColorAndPop(); 
    colorChangeInterval = setInterval(changeColorAndPop, 750); 
});

// Reset when hover ends
nameElement.addEventListener('mouseout', () => {
    clearInterval(colorChangeInterval); 
    popDuration = 500; 
    colorChangeInterval = setInterval(changeColorAndPop, 1000); 
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector("nav ul");
    let menuOpen = false;

    // Toggle menu on button click
    menuIcon.addEventListener("click", function () {
        if (!menuOpen) {
            mobileMenu.classList.add("show");
            menuOpen = true;
        } else {
            mobileMenu.classList.remove("show");
            menuOpen = false;
        }
    });

    // Keep the menu open when hovering over the menu (child)
    mobileMenu.addEventListener("mouseenter", function () {
        if (menuOpen) {
            mobileMenu.classList.add("show");
        }
    });

    // Close the menu when mouse leaves the menu
    mobileMenu.addEventListener("mouseleave", function () {
        mobileMenu.classList.remove("show");
        menuOpen = false;
    });

    // Close the menu when clicking outside the menu and button
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("show");
            menuOpen = false;
        }
    });
});
