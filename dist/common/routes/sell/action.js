'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addDrug = exports.setAddData = exports.ADD_DRUG_SUCCESS = exports.ADD_DRUG_FAILURE = exports.ADD_DRUG_REQUEST = exports.ADD_DRUG = exports.SET_ADD_DATA = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_ADD_DATA = exports.SET_ADD_DATA = 'SET_ADD_DATA';
var ADD_DRUG = exports.ADD_DRUG = 'ADD_DRUG';
var ADD_DRUG_REQUEST = exports.ADD_DRUG_REQUEST = 'ADD_DRUG_REQUEST';
var ADD_DRUG_FAILURE = exports.ADD_DRUG_FAILURE = 'ADD_DRUG_FAILURE';
var ADD_DRUG_SUCCESS = exports.ADD_DRUG_SUCCESS = 'ADD_DRUG_SUCCESS';

var isomorphicRequestUrl = function isomorphicRequestUrl(url) {
    if (process.browser) {
        return url;
    } else {
        return 'http://127.0.0.1:8080' + url;
    }
};

var setAddData = exports.setAddData = function setAddData(value) {
    return {
        type: SET_ADD_DATA,
        data: value
    };
};

var addDrug = exports.addDrug = function addDrug(addData) {
    return {
        type: ADD_DRUG,
        promise: _axios2.default.post(isomorphicRequestUrl('/api/sell'), addData)
    };
};