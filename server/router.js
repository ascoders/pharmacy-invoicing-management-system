import * as drug from './controllers/drug'

const wrap = fn => (...args) => fn(...args).catch(args[2])

export default (app)=> {
    app.post('/api/drug', wrap(drug.create))
    app.get('/api/drug', wrap(drug.findOne))
    app.get('/api/drugs', wrap(drug.findAll))
}