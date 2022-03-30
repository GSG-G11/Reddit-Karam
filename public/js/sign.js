const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const signContainer = document.querySelector('.sign-container');

signupBtn.addEventListener('click', (e) => {
    signContainer.classList.add('signup-mode');
});

signinBtn.addEventListener('click', (e) => {
    signContainer.classList.remove('signup-mode');
});

// Check Mode Function
const checkMode = () => {
    const mode = window.location.href.split('#')[1];
    if(mode){
        signContainer.classList.add(mode);
    } else {
        return false;
    }
}

window.onload = checkMode();

// Generate Error Message Function
const inputsContainer = document.getElementsByClassName('input-container');

const generateError = (inputId, msg) => {
    const eleParent = document.getElementById(inputId).parentElement.parentElement;
    const errorMsg = document.getElementById(inputId).parentElement.nextElementSibling;

    eleParent.classList.add('error');
    errorMsg.textContent = msg;
}

// Fetch Signup Form
const signupInputs = document.querySelectorAll('.signup-input');

const signupUsername = document.getElementById('signup-username');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupConfirm = document.getElementById('signup-confirm');
const signup = document.getElementById('signup');

signup.addEventListener('click', (e) => {
    e.preventDefault();
    Array.from(inputsContainer).forEach(ele => ele.classList.remove('error'))
    if (signupUsername.value !== '' && signupEmail.value !== '' && signupPassword.value !== '' && signupConfirm.value !== ''){
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
        .then(data => data.json())
        .then(res => {
            if (res.msg === 'ValidationError'){
                res.err.details.forEach(ele => {
                    if(ele.path[0] === 'username'){
                        generateError(signupUsername.id, 'should be between 3 and 25 Charcter!')
                    } else if (ele.path[0] === 'email'){
                        generateError(signupEmail.id, 'Invalid Email!')
                    } else if (ele.path[0] === 'password'){
                        generateError(signupPassword.id, 'Password is too weak!')
                    } else if (ele.path[0] === 'confirmPass'){
                        generateError(signupConfirm.id, 'Passwords Not Matched!')
                    }
                })
            } else if (res.msg === 'Email is Already Exist!'){
                generateError(signupEmail.id, 'Email is Already Exist!')
            } else if (res.msg === 'Signup Successfully!') {
                window.location.href = '/';
            }
            else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Ops! Please Try again',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                })
            }
        })
        .catch(err => console.log('err', err));
    } else {
        const emptyInputs = Array.from(signupInputs).filter(input => input.value === '');
        emptyInputs.forEach(input => {
            const inputId = input.id;
            generateError(inputId, 'Input Is Required!')
        })
    }
});



// Fetch Signup Form
const signinInputs = document.querySelectorAll('.signin-input');

const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');
const signin = document.getElementById('login');

signin.addEventListener('click', (e) => {
    e.preventDefault();
    Array.from(inputsContainer).forEach(ele => ele.classList.remove('error'))
    if (signinEmail.value !== '' && signinPassword.value !== ''){
        fetch('/api/v1/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: signinEmail.value,
                password: signinPassword.value,
            })
        })
        .then(data => data.json())
        .then(res => {
            if (res.msg === 'ValidationError'){
                res.err.details.forEach(ele => {
                    if (ele.path[0] === 'email'){
                        generateError(signinEmail.id, 'Check Your Email!')
                    } else if (ele.path[0] === 'password'){
                        generateError(signinPassword.id, 'Check Your Password!')
                    }
                })
            } else if (res.msg === 'Signin Successfully!') {
                window.location.href = '/';
            } else if (res.msg === 'Email or Password is Wrong!') {
                Swal.fire({
                    title: 'Error!',
                    text: 'Email or Password is Wrong!',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                })
            }
            else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Ops! Please Try again',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                })
            }
        })
        .catch(err => console.log('err', err));
    } else {
        const emptyInputs = Array.from(signinInputs).filter(input => input.value === '');
        emptyInputs.forEach(input => {
            const inputId = input.id;
            generateError(inputId, 'Input Is Required!')
        })
    }
});