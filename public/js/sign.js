const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const signContainer = document.querySelector('.sign-container');

signupBtn.addEventListener('click', (e) => {
    signContainer.classList.add('signup-mode');
});

signinBtn.addEventListener('click', (e) => {
    signContainer.classList.remove('signup-mode');
});


// Fetch Signup Form
const inputs = document.querySelectorAll('input');

const signupUsername = document.getElementById('signup-username');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupConfirm = document.getElementById('signup-confirm');
const signup = document.getElementById('signup');

signup.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('/api/v1/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: signupUsername.value,
            email: signupEmail.value,
            password: signupPassword.value,
            confirmPass: signupConfirm.value,
        })
    })
    .then(() => {
        inputs.forEach(input => {
            input.value = '';
        });
    })
    .catch(err => console.log(err));
});