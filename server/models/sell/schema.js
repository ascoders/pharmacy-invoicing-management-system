import Sequelize from 'sequelize'

export default ['sell', {
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
        comment  : '药品名称'
    },

    standard: {
        type   : Sequelize.STRING(10),
        comment: '规格'
    },

    number: {
        type   : Sequelize.INTEGER(11),
        comment: '数量'
    },

    price: {
        type   : Sequelize.DECIMAL(10, 0).UNSIGNED,
        comment: '售价'
    },

    sellDate: {
        type   : Sequelize.DATE,
        comment: '销售日期'
    },

    sellMember: {
        type   : Sequelize.STRING(10),
        comment: '销售员'
    }
}]