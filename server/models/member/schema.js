import Sequelize from 'sequelize'

export default ['member', {
    id: {
        type         : Sequelize.INTEGER(11),
        primaryKey   : true,
        unique       : true,
        autoIncrement: true,
        allowNull    : false
    },

    name: {
        type     : Sequelize.STRING(10),
        unique   : true,
        allowNull: false,
        comment  : '用户名'
    },

    create: {
        type   : Sequelize.DATE,
        comment: '注册时间'
    },

    password: {
        type   : Sequelize.STRING(32),
        comment: '密码'
    },

    phone: {
        type   : Sequelize.STRING(32),
        comment: '手机号'
    },

    buy: {
        type   : Sequelize.STRING(32),
        comment: '购买药品名称'
    },

    buyTime: {
        type   : Sequelize.STRING(32),
        comment: '购买日期'
    },

    buyNumber: {
        type   : Sequelize.INTEGER(11),
        comment: '购买药品数量'
    },

    buyPrice: {
        type   : Sequelize.DECIMAL(10, 0).UNSIGNED,
        comment: '购买价格'
    }
}]