import Sequelize from 'sequelize'
import drugSchema from './drug/schema'

const sequelize = new Sequelize('pharmacy', 'root', '', {
    host   : 'localhost',
    dialect: 'mysql',
    pool   : {
        max : 5,
        min : 0,
        idle: 10000
    }
})

export const drug = sequelize.define(...drugSchema)

sequelize.sync()