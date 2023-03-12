const postForm = async (event) => {
    event.preventDefault();

    const post = document.querySelector('#text-confirm').value.trim();
    const user_id = parseInt(document.querySelector('#username-id-confirm').value.trim());

    if (post && user_id) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ post, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(post)
        console.log(user_id)
        console.log(response)
        if (response.ok) {
            // document.location.replace('/');
        } else {
            // alert('Failed to submit post.');
        }
    }
};

document.querySelector('.post-form').addEventListener('submit', postForm);