'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ['sell', {
    id: {
        type: _sequelize2.default.INTEGER(11),
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type: _sequelize2.default.STRING(10),
        unique: true,
        allowNull: false,
        comment: '药品名称'
    },

    standard: {
        type: _sequelize2.default.STRING(10),
        comment: '规格'
    },

    number: {
        type: _sequelize2.default.INTEGER(11),
        comment: '数量'
    },

    price: {
        type: _sequelize2.default.DECIMAL(10, 0).UNSIGNED,
        comment: '售价'
    },

    sellDate: {
        type: _sequelize2.default.DATE,
        comment: '销售日期'
    },

    sellMember: {
        type: _sequelize2.default.STRING(10),
        comment: '销售员'
    }
}];