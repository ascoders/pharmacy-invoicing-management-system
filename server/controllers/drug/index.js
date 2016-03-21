import * as drug from '../../models/drug'

export const findOne = async(req, res)=> {
    const info = await drug.findOne()
    res.send(info)
}

export const findAll = async(req, res)=> {
    const info = await drug.findAndCountAll({
        offset: 0,
        limit : 10
    })
    res.send(info)
}

export const create = async(req, res)=> {
    const info = await drug.create(req.body)
    res.send(info)
}