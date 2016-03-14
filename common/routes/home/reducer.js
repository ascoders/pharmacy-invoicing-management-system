import {
    POSTS_GET,
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE
} from './action';

export default function reducer(state = {}, action) {
    switch (action.type) {
    case POSTS_GET_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        })

    case POSTS_GET_SUCCESS:
        let listsArray = []
        if (action.req && action.req.data) {
            listsArray = action.req.data.map(child => child)
        }
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            lists: listsArray,
            lastUpdated: action.receivedAt
        })

    case POSTS_GET_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            type: action.type,
            lists: [],
            error: {
                status: action.error.status,
                statusText: action.error.statusText
            }
        })

    default:
        return state
    }
}