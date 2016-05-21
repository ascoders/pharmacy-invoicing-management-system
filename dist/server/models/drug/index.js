'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findAndCountAll = exports.del = exports.update = exports.create = exports.findOne = undefined;

var _index = require('../index');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var findOne = exports.findOne = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _index.drug.findOne();

                    case 2:
                        return _context.abrupt('return', _context.sent);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function findOne() {
        return ref.apply(this, arguments);
    };
}();

var create = exports.create = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(info) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _index.drug.create(info);

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function create(_x) {
        return ref.apply(this, arguments);
    };
}();

var update = exports.update = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(info, id) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return _index.drug.update(info, {
                            where: {
                                id: id
                            }
                        });

                    case 2:
                        return _context3.abrupt('return', _context3.sent);

                    case 3:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function update(_x2, _x3) {
        return ref.apply(this, arguments);
    };
}();

var del = exports.del = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return _index.drug.destroy({
                            where: {
                                id: id
                            }
                        });

                    case 2:
                        return _context4.abrupt('return', _context4.sent);

                    case 3:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function del(_x4) {
        return ref.apply(this, arguments);
    };
}();

var findAndCountAll = exports.findAndCountAll = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(info) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return _index.drug.findAndCountAll(info);

                    case 2:
                        return _context5.abrupt('return', _context5.sent);

                    case 3:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function findAndCountAll(_x5) {
        return ref.apply(this, arguments);
    };
}();