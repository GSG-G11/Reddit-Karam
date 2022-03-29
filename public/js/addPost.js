const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const postImage = document.getElementById('post-image');
const addPost = document.getElementById('add-btn');

addPost.addEventListener('click', () => {
  const title = postTitle.value;
  const content = postContent.value;
  const image = postImage.value;
	const user_id = JSON.parse(window.sessionStorage.getItem('user')).id;
  const post = {
    title,
    content,
    image,
		user_id 
  };

	console.log(post);
  if (title) {
    fetch('/api/v1/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
				console.log(res);
        if (res.status === 201) {
					// window.location.href = '/';
					Swal.fire({
						icon: 'success',
						title: 'Great!',
						text: 'Post Added Successfully!',
						showConfirmButton: 'Cool',
					});
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
						confirmButtonText: 'Try again',
					});
				}
      })
      .catch((err) => {
        console.log(err);
      })
  } else {
		Swal.fire({
			title: 'Error!',
			text: 'Please Enter a Post Title',
			icon: 'error',
			confirmButtonText: 'Try again'
	})
	}
});
