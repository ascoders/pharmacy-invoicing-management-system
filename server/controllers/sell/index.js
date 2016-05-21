import * as sell from '../../models/sell'

export const findOne = async(req, res)=> {
    const info = await sell.findOne()
    res.send(info)
}

export const findAll = async(req, res)=> {
    let sql = {
        offset: (req.query.page - 1) * 10,
        limit : 10
    }

    if (req.query.name) {
        sql.where = {
            name: req.query.name
        }
    }

    const info = await sell.findAndCountAll(sql)
    res.send(info)
}

export const create = async(req, res)=> {
    const info = await sell.create(req.body)
    res.send(info)
}

export const update = async(req, res)=> {
    const id = req.body.id
    const updateInfo = {
        [req.body.key]: req.body.value
    }
    const info = await sell.update(updateInfo, id)
    res.send(info)
}

export const del = async(req, res)=> {
    const id = req.body.id
    const info = await sell.del(id)
    res.status(200).send(true)
}