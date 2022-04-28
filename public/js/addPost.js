const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const postImage = document.getElementById('post-image');
const addPost = document.getElementById('add-btn');

addPost.addEventListener('click', () => {
  const title = postTitle.value;
  const content = postContent.value;
  const image = postImage.files[0];
	const user_id = JSON.parse(window.sessionStorage.getItem('user')).id;

  let data = new FormData();
  data.append('title',title);
  data.append('content',content);
  data.append('image',image);
  data.append('user_id',user_id);

  if (title) {
    fetch('/api/v1/addPost', {
      method: 'POST',
      body: data,
    })
      .then((res) => {
        if (res.status === 201) {
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
