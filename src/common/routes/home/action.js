import request from 'axios'

export const POSTS_GET = 'POSTS_GET'
export const POSTS_GET_REQUEST = 'POSTS_GET_REQUEST'
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS'
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE'

const shouldFetchLists = (state) => {
    const posts = null
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export const fetchLists = () => {
    return {
        type: POSTS_GET,
        promise: request.get(`http://www.reddit.com/r/reactjs.json`)
    }
}

export const fetchListsIfNeeded = () => {
    return (dispatch, getState) => {
        if (shouldFetchLists(getState())) {
            return dispatch(fetchLists())
        }
    }
}