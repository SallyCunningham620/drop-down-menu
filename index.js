//index.js

// Get the button and menu elements
const button = document.getElementById("myButton");
const menu = document.getElementById("myDropdown");

// Add event listener to the button
button.addEventListener("click", function(event) {
  // Toggle the 'show' class on the menu element
  menu.classList.toggle("show");
  event.stopPropagation(); // Prevents the click from immediately propagating to the document
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  }
}