import React from 'react'

export default  {
    title : '库存查询',
    fields: [{
        key  : 'code',
        value: '产品编号'
    }, {
        key  : 'name',
        value: '药品名称',
        edit : true
    }, {
        key  : 'standard',
        value: '规格',
        edit : true
    }, {
        key  : 'number',
        value: '数量',
        edit : true
    }, {
        key  : 'create',
        value: '生产日期'
    }, {
        key  : 'effectiveTime',
        value: '有效期'
    }, {
        key  : 'purchasePrice',
        value: '进价'
    }, {
        key  : 'price',
        value: '售价'
    }, {
        key  : 'supplier',
        value: '供应商'
    }, {
        key  : 'member',
        value: '采购员'
    }, {
        key  : 'factory',
        value: '仓库'
    }],
    edit  : {
        url       : '/api/drugs',
        method    : 'post',
        beforeSend: (rowInfo, key, newValue)=> {
            return {
                id   : rowInfo['id'],
                key  : key,
                value: newValue
            }
        },
        success   : (res)=> {
            return {
                ok     : true,
                message: res.errmsg
            }
        }
    },
    del   : {
        url       : '/api/drug',
        method    : 'delete',
        alert     : (colInfo)=> {
            return (
                <div>确认删除{colInfo.name}吗?</div>
            )
        },
        beforeSend: (colInfo)=> {
            return {
                id: colInfo.id
            }
        },
        success   : (res)=> {
            return {
                ok     : true,
                message: 'oh!! no'
            }
        }
    },
    get   : {
        url       : '/api/drugs',
        method    : 'get',
        beforeSend: (info, currentPage, response)=> {
            info.page = currentPage
            return info
        },
        success   : (res, pagination)=> {
            pagination.allPage = res.count / 10
            return res.rows
        }
    },
    finder: [
        {
            label: '药品名',
            key  : 'name',
            type : 'text'
        }
    ]
}