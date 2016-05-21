import * as drug from './controllers/drug'
import * as member from './controllers/member'
import * as sell from './controllers/sell'

const wrap = fn => (...args) => fn(...args).catch(args[2])

export default (app)=> {
    app.post('/api/drug', wrap(drug.create))
    app.get('/api/drug', wrap(drug.findOne))
    app.get('/api/drugs', wrap(drug.findAll))
    app.post('/api/drugs', wrap(drug.update))
    app.delete('/api/drug', wrap(drug.del))

    app.post('/api/member', wrap(member.create))
    app.get('/api/member', wrap(member.findOne))
    app.get('/api/members', wrap(member.findAll))
    app.post('/api/members', wrap(member.update))
    app.delete('/api/member', wrap(member.del))

    app.post('/api/sell', wrap(sell.create))
    app.get('/api/sell', wrap(sell.findOne))
    app.get('/api/sells', wrap(sell.findAll))
    app.post('/api/sells', wrap(sell.update))
    app.delete('/api/sell', wrap(sell.del))

    app.get('/api/login', wrap(async(req, res)=> {
        req.session.login = true
        res.send(true)
    }))

    app.get('/api/is-login', wrap(async(req, res)=> {
        res.send(req.session.login)
    }))

    app.get('/api/sign-out', wrap(async(req, res)=> {
        req.session.login = false
        res.send(true)
    }))
}