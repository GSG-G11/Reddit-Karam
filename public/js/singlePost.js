const postContent = document.getElementById('post-content');

const generatePosts = (post) => {
    let html = `<div class="single-post" id="${post.id}">
                    <div class="post-info">
                        <div class="user-pic">
                            <img src="${post.user_image || '/img/user-default.png'}" alt="User Pic">
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

                    <div class="post-image">
                        <a href="/show/${post.id}/single-post">
                            <img src="${post.post_image}" alt="Post Image">
                        </a>
                    </div>

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
        postContent.innerHTML = html;
};

const postId = window.location.pathname.split('/')[2];

window.addEventListener('load', () => {
    fetch(`/api/v1/${postId}/singlePost`, {
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

    fetchComments();
})

const postComments = document.getElementById('post-commnets');
const generateComments = (comments) => {
    let html = '';
    comments.forEach(comment => {
        html += `<div class="single-comment">
                    <div class="comment-info">
                        <div class="user-pic">
                            <img src="${comment.user_image || '/img/user-default.png'}" alt="User Pic">
                        </div>
                        <div class="info">
                            <h4 class="username">
                                <a href="/show/${comment.user_id}/user">admin</a>
                            </h4>
                            <p class="comment-date">
                                <span class="value">1 min ago</span>
                            </p>
                        </div>
                    </div>
                    <div class="comment-content">
                        <p>${comment.content}</p>
                    </div>
                </div>`;
            postComments.innerHTML = html;
    });
}


const fetchComments = () => {
    fetch(`/api/v1/show/post/${postId}/comments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(data => data.json())
    .then(res => {
        console.log(res.data);
        generateComments(res.data);
    })
    .catch(err => console.log('err', err));
}


// Fetch Add Comment
const addComment = document.getElementById('add-comment');

addComment.addEventListener('click', (e) => {
    
    if (!window.sessionStorage.getItem('user')){
        window.location.href = '/sign';
    }
    e.preventDefault();

    const comment = document.getElementById('comment').value;
    const user_id = JSON.parse(window.sessionStorage.getItem('user')).id;

    if (!comment) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please Enter a Comment',
            confirmButtonText: 'Try again',
        });
    } else {
        fetch(`/api/v1/addComment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment, user_id, post_id: postId }),
        })
        .then(data => data.json())
        .then(res => {
            fetchComments();
        })
        .catch(err => console.log('err', err));
    }
})