import Sequelize from 'sequelize'
import drugSchema from './drug/schema'
import memberSchema from './member/schema'
import sellSchema from './sell/schema'

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
export const member = sequelize.define(...memberSchema)
export const sell = sequelize.define(...sellSchema)

sequelize.sync()