import {sell} from '../index'

export const findOne = async()=> {
    return await sell.findOne()
}

export const create = async(info)=> {
    return await sell.create(info)
}

export const update = async(info, id)=> {
    return await sell.update(info, {
        where: {
            id: id
        }
    })
}

export const del = async(id)=> {
    return await sell.destroy({
        where: {
            id: id
        }
    })
}

export const findAndCountAll = async(info)=> {
    return await sell.findAndCountAll(info)
}