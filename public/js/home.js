const postsContainer = document.getElementById('posts-container');

const generatePosts = (posts) => {
    let html = '';
    posts.forEach(post => {
        let post_image;
        if(post.post_image){
            post_image = `<div class="post-image">
                            <a href="/show/${post.id}/single-post">
                                <img src="${post.post_image}" alt="Post Image">
                            </a>
                        </div>`;
        }
        else {
            post_image = '';
        }
        html += `<div class="single-post" id="${post.id}">
                    <div class="post-info">
                        <div class="user-pic">
                            <img src="${post.image || '/img/user-default.png'}" alt="User Pic">
                        </div>
                        <div class="info">
                            <h4 class="username">
                                <a href="/show/${post.user_id}/user">${post.username}</a>
                            </h4>
                            <p class="post-date">
                                <span class="value">1 hour ago</span>
                            </p>
                        </div>
                    </div>
                    ${post_image}
                    <div class="post-content">
                        <p>
                            <a href="/show/${post.id}/single-post">
                                ${post.title}
                            </a>
                        </p>
                    </div>

                    <div class="post-reaction">
                        <div class="votes">
                            <button class="btn vote-btn inc-btn" id="inc" data-post="${post.id}">
                                <i class="ri-arrow-up-line"></i>
                                <span class="inc-num num">${post.up_count}</span>
                            </button>
                            <button class="btn vote-btn dec-btn" id="dec" data-post="${post.id}">
                                <i class="ri-arrow-down-line"></i>
                                <span class="inc-num num">${post.down_count}</span>
                            </button>
                        </div>
                        <a href="/show/${post.id}/single-post#comments" class="btn comments-btn">
                            <i class="ri-chat-1-line"></i>
                            <span class="comments-num num">${post.comments_count}</span>
                        </a>
                    </div>
                </div>`;
        postsContainer.innerHTML = html;
    });
};

window.addEventListener('load', () => {
    fetch('/api/v1/getPosts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(data => data.json())
    .then(res => {
        generatePosts(res.data);
    })
    .catch(err => console.log('err', err));
})
