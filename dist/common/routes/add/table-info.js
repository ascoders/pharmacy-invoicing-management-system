'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    title: '药品库存',
    fields: [{
        key: 'code',
        value: '产品编号'
    }, {
        key: 'name',
        value: '药品名称'
    }, {
        key: 'standard',
        value: '规格'
    }, {
        key: 'number',
        value: '数量'
    }, {
        key: 'create',
        value: '生产日期'
    }, {
        key: 'effectiveTime',
        value: '有效期'
    }, {
        key: 'purchasePrice',
        value: '进价'
    }, {
        key: 'price',
        value: '售价'
    }, {
        key: 'supplier',
        value: '供应商'
    }, {
        key: 'member',
        value: '采购员'
    }, {
        key: 'factory',
        value: '仓库'
    }],
    get: {
        url: '/api/drugs',
        method: 'get',
        beforeSend: function beforeSend(info, currentPage, response) {
            info.page = currentPage;
            return info;
        },
        success: function success(res, pagination) {
            pagination.allPage = res.count / 10;
            return res.rows;
        }
    }
};