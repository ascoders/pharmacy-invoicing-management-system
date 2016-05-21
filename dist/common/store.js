'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _promiseMiddleware = require('./promiseMiddleware');

var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var middlewareBuilder = function middlewareBuilder() {
    var middleware = {};
    var universalMiddleware = [_reduxThunk2.default, _promiseMiddleware2.default];
    var allComposeElements = [];

    if (process.browser) {
        middleware = _redux.applyMiddleware.apply(undefined, universalMiddleware);
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
            allComposeElements = [middleware];
        } else {
            allComposeElements = [middleware, window.devToolsExtension ? window.devToolsExtension() : function (f) {
                return f;
            }];
        }
    } else {
        middleware = _redux.applyMiddleware.apply(undefined, universalMiddleware);
        allComposeElements = [middleware];
    }

    return allComposeElements;
};

var finalCreateStore = _redux.compose.apply(undefined, _toConsumableArray(middlewareBuilder()))(_redux.createStore);

function configureStore(initialState) {
    var store = finalCreateStore(_reducer2.default, initialState);

    if (module.hot) {
        // 开启 reducer 的 hot-loader
        module.hot.accept('./reducer', function () {
            var nextRootReducer = require('./reducer');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}