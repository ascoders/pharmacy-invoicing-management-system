'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxUndo = require('redux-undo');

var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

var _reducer = require('./layout/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./routes/not-found/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./routes/home/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = require('./routes/counter/reducer');

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = require('./routes/add/reducer');

var _reducer10 = _interopRequireDefault(_reducer9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 聚合各 reducer
// 将路由也加入 reducer
var rootReducer = (0, _redux.combineReducers)({
    layout: _reducer2.default,
    notFound: _reducer4.default,
    home: _reducer6.default,
    counter: (0, _reduxUndo2.default)(_reducer8.default),
    routing: _reactRouterRedux.routerReducer,
    add: _reducer10.default
});

// 引用各模块 reducer


exports.default = rootReducer;