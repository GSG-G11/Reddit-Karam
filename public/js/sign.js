const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const signContainer = document.querySelector('.sign-container');

signupBtn.addEventListener('click', (e) => {
    signContainer.classList.add('signup-mode');
});

signinBtn.addEventListener('click', (e) => {
    signContainer.classList.remove('signup-mode');
})