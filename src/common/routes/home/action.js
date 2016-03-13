import request from 'axios'

export const POSTS_GET = 'POSTS_GET'
export const POSTS_GET_REQUEST = 'POSTS_GET_REQUEST'
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS'
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE'

const shouldFetchPosts = (state, reddit) => {
    const posts = state.postsByReddit[reddit];
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate;
    }
}

export const fetchPosts = (reddit = 'reactjs') => {
    return {
        type: POSTS_GET,
        reddit: reddit,
        promise: request.get(`http://www.reddit.com/r/${reddit}.json`)
    }
}

export const fetchPostsIfNeeded = (reddit) => {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), reddit)) {
            return dispatch(fetchPosts(reddit))
        }
    }
}