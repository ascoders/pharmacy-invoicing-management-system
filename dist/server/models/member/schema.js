'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ['member', {
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
        comment: '用户名'
    },

    create: {
        type: _sequelize2.default.DATE,
        comment: '注册时间'
    },

    password: {
        type: _sequelize2.default.STRING(32),
        comment: '密码'
    },

    phone: {
        type: _sequelize2.default.STRING(32),
        comment: '手机号'
    },

    buy: {
        type: _sequelize2.default.STRING(32),
        comment: '购买药品名称'
    },

    buyTime: {
        type: _sequelize2.default.STRING(32),
        comment: '购买日期'
    },

    buyNumber: {
        type: _sequelize2.default.INTEGER(11),
        comment: '购买药品数量'
    },

    buyPrice: {
        type: _sequelize2.default.DECIMAL(10, 0).UNSIGNED,
        comment: '购买价格'
    }
}];