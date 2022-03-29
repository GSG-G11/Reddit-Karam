// Drop Down Menu
const dropdownMenu = document.querySelector('#dropdown-menu');
const dropdownToggle = document.querySelector('#dropdown-toggle');

dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
});

// Check if user is logged in
const checkLoggedIn = () => {
    
}