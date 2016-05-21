'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DECREMENT_COUNTER = exports.INCREMENT_COUNTER = exports.SET_COUNTER = undefined;
exports.undo = undo;
exports.redo = redo;
exports.setCounter = setCounter;
exports.incrementCounter = incrementCounter;
exports.decrementCounter = decrementCounter;

var _reduxUndo = require('redux-undo');

var SET_COUNTER = exports.SET_COUNTER = 'SET_COUNTER';
var INCREMENT_COUNTER = exports.INCREMENT_COUNTER = 'INCREMENT_COUNTER';
var DECREMENT_COUNTER = exports.DECREMENT_COUNTER = 'DECREMENT_COUNTER';

function undo() {
    return function (dispatch, getState) {
        dispatch(_reduxUndo.ActionCreators.undo());
    };
}

function redo() {
    return function (dispatch, getState) {
        dispatch(_reduxUndo.ActionCreators.redo());
    };
}

function setCounter(value) {
    return {
        type: SET_COUNTER,
        payload: value
    };
}

function incrementCounter() {
    return {
        type: INCREMENT_COUNTER
    };
}

function decrementCounter() {
    return {
        type: DECREMENT_COUNTER
    };
}