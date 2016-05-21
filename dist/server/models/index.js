'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sell = exports.member = exports.drug = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _schema = require('./drug/schema');

var _schema2 = _interopRequireDefault(_schema);

var _schema3 = require('./member/schema');

var _schema4 = _interopRequireDefault(_schema3);

var _schema5 = require('./sell/schema');

var _schema6 = _interopRequireDefault(_schema5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sequelize = new _sequelize2.default('pharmacy', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var drug = exports.drug = sequelize.define.apply(sequelize, _toConsumableArray(_schema2.default));
var member = exports.member = sequelize.define.apply(sequelize, _toConsumableArray(_schema4.default));
var sell = exports.sell = sequelize.define.apply(sequelize, _toConsumableArray(_schema6.default));

sequelize.sync();