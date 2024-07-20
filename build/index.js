// Get DOM elements
const menuBar = document.getElementById('menu-bar');
const catMenu = document.getElementById('cat_menu');
const closeBtn = document.getElementById('btn');

// Function to toggle menu visibility
function toggleMenu() {
    catMenu.classList.toggle('hidden');
}

// Event listener for hamburger icon click
menuBar.addEventListener('click', function() {
    toggleMenu();
});

// Event listener for close button click
closeBtn.addEventListener('click', function() {
    toggleMenu();
});
