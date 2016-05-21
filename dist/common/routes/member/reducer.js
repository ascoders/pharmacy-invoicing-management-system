'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createReducer;

var _action = require('./action');

var action = _interopRequireWildcard(_action);

var _reduxImmutablejs = require('redux-immutablejs');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = _immutable2.default.fromJS({
    addData: {}
});

exports.default = (0, _reduxImmutablejs.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, action.SET_ADD_DATA, function (state, action) {
    return state.mergeDeep({
        addData: _defineProperty({}, action.data.field, action.data.value)
    });
}), _defineProperty(_createReducer, action.ADD_DRUG, function (state, action) {
    return state.mergeDeep({});
}), _defineProperty(_createReducer, action.ADD_DRUG_SUCCESS, function (state, action) {
    return state;
}), _createReducer));