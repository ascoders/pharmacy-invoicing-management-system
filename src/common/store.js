import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from './promiseMiddleware'
import rootReducer from './reducer'

const middlewareBuilder = () => {
    let middleware = {}
    let universalMiddleware = [thunk, promiseMiddleware]
    let allComposeElements = []

    if (process.browser) {
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
            middleware = applyMiddleware(...universalMiddleware)
            allComposeElements = [
                middleware
            ]
        } else {
            middleware = applyMiddleware(
                ...universalMiddleware,
                require('redux-logger')()
            )
            allComposeElements = [
                middleware,
                window.devToolsExtension ? window.devToolsExtension() : f => f
            ]
        }
    } else {
        middleware = applyMiddleware(...universalMiddleware);
        allComposeElements = [
            middleware
        ]
    }

    return allComposeElements
}

const finalCreateStore = compose(...middlewareBuilder())(createStore)

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState)

    if (module.hot) {
        // 开启 reducer 的 hot-loader
        module.hot.accept('./reducer', () => {
            const nextRootReducer = require('./reducer')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}