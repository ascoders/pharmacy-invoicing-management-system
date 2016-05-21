export default  {
    title : '销售信息',
    fields: [{
        key  : 'name',
        value: '药品名称'
    }, {
        key  : 'standard',
        value: '规格'
    }, {
        key  : 'number',
        value: '数量'
    }, {
        key  : 'price',
        value: '售价'
    }, {
        key  : 'sellDate',
        value: '销售日期'
    }, {
        key  : 'sellMember',
        value: '销售员'
    }],
    get   : {
        url       : '/api/sells',
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