const userContent = document.getElementById('user-content');
const generateUser = (user) => {
    userContent.innerHTML = 
    `<div class="user-pic">
        <img src="${user.image || '/img/user-default.png'}" alt="User Picture">
    </div>
    <div class="user-info">
        <h4 class="username">${user.username}</h4>
        <p class="email">${user.email}</p>
    </div>`;

}

const user_id = window.location.href.split('/')[4]

const fetchUser = () => {
    fetch(`/api/v1/show/${user_id}/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(data => data.json())
    .then(res => {
        generateUser(res.data);
    })
    .catch(err => console.log(err));
}

window.addEventListener('load', fetchUser)