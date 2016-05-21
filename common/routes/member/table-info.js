export default  {
    title : '药品库存',
    fields: [{
        key  : 'id',
        value: '用户编号'
    }, {
        key  : 'name',
        value: '用户名'
    }, {
        key  : 'create',
        value: '注册日期'
    }, {
        key  : 'phone',
        value: '电话号码'
    }, {
        key  : 'buy',
        value: '购买药品名称'
    }, {
        key  : 'buyTime',
        value: '购买药品时间'
    }, {
        key  : 'buyNumber',
        value: '购买药品数量'
    }, {
        key  : 'buyPrice',
        value: '总价格'
    }],
    get   : {
        url       : '/api/members',
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