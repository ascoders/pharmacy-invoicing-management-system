import * as member from '../../models/member'

export const findOne = async(req, res)=> {
    const info = await member.findOne()
    res.send(info)
}

export const findAll = async(req, res)=> {
    const info = await member.findAndCountAll({
        offset: (req.query.page - 1) * 10,
        limit : 10
    })
    res.send(info)
}

export const create = async(req, res)=> {
    const info = await member.create(req.body)
    res.send(info)
}

export const update = async(req, res)=> {
    const id = req.body.id
    const updateInfo = {
        [req.body.key]: req.body.value
    }
    const info = await member.update(updateInfo, id)
    res.send(info)
}

export const del = async(req, res)=> {
    const id = req.body.id
    const info = await member.del(id)
    res.status(200).send(true)
}