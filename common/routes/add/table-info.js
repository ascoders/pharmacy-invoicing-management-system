export default  {
    title : '药品库存',
    fields: [{
        key  : 'id',
        value: '产品编号'
    }, {
        key  : 'standard',
        value: '规格'
    }, {
        key  : 'purchasePrice',
        value: '进价'
    }, {
        key  : 'price',
        value: '售价'
    }, {
        key  : 'create',
        value: '生产日期'
    }, {
        key  : 'effectiveTime',
        value: '有效期'
    }],
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
    }
}