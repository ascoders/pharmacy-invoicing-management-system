'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.del = exports.update = exports.create = exports.findAll = exports.findOne = undefined;

var _drug = require('../../models/drug');

var drug = _interopRequireWildcard(_drug);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var findOne = exports.findOne = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return drug.findOne();

                    case 2:
                        info = _context.sent;

                        res.send(info);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function findOne(_x, _x2) {
        return ref.apply(this, arguments);
    };
}();

var findAll = exports.findAll = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
        var sql, info;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        sql = {
                            offset: (req.query.page - 1) * 10,
                            limit: 10
                        };


                        if (req.query.name) {
                            sql.where = {
                                name: req.query.name
                            };
                        }

                        _context2.next = 4;
                        return drug.findAndCountAll(sql);

                    case 4:
                        info = _context2.sent;

                        res.send(info);

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function findAll(_x3, _x4) {
        return ref.apply(this, arguments);
    };
}();

var create = exports.create = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
        var info;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return drug.create(req.body);

                    case 2:
                        info = _context3.sent;

                        res.send(info);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function create(_x5, _x6) {
        return ref.apply(this, arguments);
    };
}();

var update = exports.update = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(req, res) {
        var id, updateInfo, info;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.body.id;
                        updateInfo = _defineProperty({}, req.body.key, req.body.value);
                        _context4.next = 4;
                        return drug.update(updateInfo, id);

                    case 4:
                        info = _context4.sent;

                        res.send(info);

                    case 6:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function update(_x7, _x8) {
        return ref.apply(this, arguments);
    };
}();

var del = exports.del = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(req, res) {
        var id, info;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        id = req.body.id;
                        _context5.next = 3;
                        return drug.del(id);

                    case 3:
                        info = _context5.sent;

                        res.status(200).send(true);

                    case 5:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function del(_x9, _x10) {
        return ref.apply(this, arguments);
    };
}();