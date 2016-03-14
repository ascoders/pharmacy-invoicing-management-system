import request from 'axios'

export const POSTS_GET = 'POSTS_GET'
export const POSTS_GET_REQUEST = 'POSTS_GET_REQUEST'
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS'
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE'

const isomorphicRequestUrl = (url)=> {
    if (process.browser) {
        return url
    } else {
        return `http://127.0.0.1:8080${url}`
    }
}

const shouldFetchLists = (state) => {
    const home = state.home
    if (!home.lists) {
        return true
    } else if (home.isFetching) {
        return false
    } else {
        return true
    }
}

export const fetchLists = () => {
    const url = isomorphicRequestUrl('/api/author')
    return {
        type: POSTS_GET,
        promise: request.get(url)
    }
}

export const fetchListsIfNeeded = () => {
    return (dispatch, getState) => {
        if (shouldFetchLists(getState())) {
            return dispatch(fetchLists())
        }
    }
}