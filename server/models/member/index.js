import {member} from '../index'

export const findOne = async()=> {
    return await member.findOne()
}

export const create = async(info)=> {
    return await member.create(info)
}

export const update = async(info, id)=> {
    return await member.update(info, {
        where: {
            id: id
        }
    })
}

export const del = async(id)=> {
    return await member.destroy({
        where: {
            id: id
        }
    })
}

export const findAndCountAll = async(info)=> {
    return await member.findAndCountAll({
        offset: info.offset,
        limit : info.limit
    })
}