import {drug} from '../index'

export const findOne = async()=> {
    return await drug.findOne()
}

export const create = async(info)=> {
    return await drug.create(info)
}

export const findAndCountAll = async(info)=> {
    return await drug.findAndCountAll({
        offset: info.offset,
        limit : info.limit
    })
}