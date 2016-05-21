import Sequelize from 'sequelize'

export default ['drug', {
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

    purchasePrice: {
        type   : Sequelize.DECIMAL(10, 0).UNSIGNED,
        comment: '进价'
    },

    price: {
        type   : Sequelize.DECIMAL(10, 0).UNSIGNED,
        comment: '售价'
    },

    create: {
        type   : Sequelize.DATE,
        comment: '生产日期'
    },

    effectiveTime: {
        type   : Sequelize.INTEGER,
        comment: '有效时间(天)'
    },

    member: {
        type   : Sequelize.STRING,
        comment: '采购员'
    },

    factory: {
        type   : Sequelize.STRING,
        comment: '仓库'
    },

    code: {
        type   : Sequelize.STRING,
        comment: '产品编号'
    },

    number: {
        type   : Sequelize.INTEGER,
        comment: '数量'
    },

    supplier: {
        type   : Sequelize.STRING,
        comment: '供应商'
    }
}]