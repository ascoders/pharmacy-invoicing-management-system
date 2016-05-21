'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ['drug', {
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

    purchasePrice: {
        type: _sequelize2.default.DECIMAL(10, 0).UNSIGNED,
        comment: '进价'
    },

    price: {
        type: _sequelize2.default.DECIMAL(10, 0).UNSIGNED,
        comment: '售价'
    },

    create: {
        type: _sequelize2.default.DATE,
        comment: '生产日期'
    },

    effectiveTime: {
        type: _sequelize2.default.INTEGER,
        comment: '有效时间(天)'
    },

    member: {
        type: _sequelize2.default.STRING,
        comment: '采购员'
    },

    factory: {
        type: _sequelize2.default.STRING,
        comment: '仓库'
    },

    code: {
        type: _sequelize2.default.STRING,
        comment: '产品编号'
    },

    number: {
        type: _sequelize2.default.INTEGER,
        comment: '数量'
    },

    supplier: {
        type: _sequelize2.default.STRING,
        comment: '供应商'
    }
}];