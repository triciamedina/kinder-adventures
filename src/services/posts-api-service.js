import config from '../config';

const PostsApiService = {
    printPosts() {
        return fetch(`${config.API_BASE_URL}/wp/v2/posts`, {
            method: 'GET',
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default PostsApiService;