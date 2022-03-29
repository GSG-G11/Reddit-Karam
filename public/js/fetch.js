const linkUsername = document.querySelector('.navbar-menu .user .username');
const userImage = document.querySelector('.navbar-menu #dropdown-toggle img');
const greetingUsername = document.querySelector('.navbar-menu .greeting .username');

// Set Navbar Mneu
const navMenuContent = () => {
    const user = window.sessionStorage.getItem('user') && JSON.parse(window.sessionStorage.getItem('user'));

    const navMenu = document.querySelector('.navbar-menu');
    if(user) {
        const { id, username, email, image } = user;
        navMenu.classList.add('logged');
        linkUsername.textContent = username;
        userImage.src = image || '/img/user-default.png';
        greetingUsername.textContent = username;
    } else {
        navMenu.classList.add('not-logged');
    }
}


// Check if user is logged in
const checkLoggedIn = () => {
    fetch('/api/v1/check-logged', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(res => {
        if (res.status === 200) {
            window.sessionStorage.setItem('user', JSON.stringify(res.user));
        } else {
            window.sessionStorage.removeItem('user');
        }
        navMenuContent();
    })
}
window.addEventListener('load', checkLoggedIn);