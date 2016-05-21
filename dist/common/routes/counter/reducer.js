'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reducer;

var _action = require('./action');

function reducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _action.SET_COUNTER:
            return action.payload, 10;
        case _action.INCREMENT_COUNTER:
            return state + 1;
        case _action.DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}