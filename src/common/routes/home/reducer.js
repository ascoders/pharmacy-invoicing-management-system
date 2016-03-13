import {
    POSTS_GET,
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE
} from './action';

function posts(state = {
    error: {},
    isFetching: false,
    didInvalidate: false,
    lists: []
}, action) {
    switch (action.type) {
    case POSTS_GET_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
    case POSTS_GET_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            lists: action.lists,
            lastUpdated: action.receivedAt
        });
    case POSTS_GET_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false
        });
    default:
        return state;
    }
}

export default function reducer(state = {}, action) {
    switch (action.type) {
    case POSTS_GET_REQUEST:
    case POSTS_GET_SUCCESS:
        let listsArray = []
        if (action.req && action.req.data) {
            let data = action.req.data.data
            listsArray = data.children.map(child => child.data)
        }
        return Object.assign({}, state, posts(state, {
            type: action.type,
            lists: listsArray
        }))

    case POSTS_GET_FAILURE:
        return Object.assign({}, state, posts(state, {
            type: action.type,
            lists: [],
            error: {
                status: action.error.status,
                statusText: action.error.statusText
            }
        }))

    default:
        return state
    }
}