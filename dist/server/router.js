'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _drug = require('./controllers/drug');

var drug = _interopRequireWildcard(_drug);

var _member = require('./controllers/member');

var member = _interopRequireWildcard(_member);

var _sell = require('./controllers/sell');

var sell = _interopRequireWildcard(_sell);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var wrap = function wrap(fn) {
    return function () {
        return fn.apply(undefined, arguments).catch(arguments.length <= 2 ? undefined : arguments[2]);
    };
};

exports.default = function (app) {
    app.post('/api/drug', wrap(drug.create));
    app.get('/api/drug', wrap(drug.findOne));
    app.get('/api/drugs', wrap(drug.findAll));
    app.post('/api/drugs', wrap(drug.update));
    app.delete('/api/drug', wrap(drug.del));

    app.post('/api/member', wrap(member.create));
    app.get('/api/member', wrap(member.findOne));
    app.get('/api/members', wrap(member.findAll));
    app.post('/api/members', wrap(member.update));
    app.delete('/api/member', wrap(member.del));

    app.post('/api/sell', wrap(sell.create));
    app.get('/api/sell', wrap(sell.findOne));
    app.get('/api/sells', wrap(sell.findAll));
    app.post('/api/sells', wrap(sell.update));
    app.delete('/api/sell', wrap(sell.del));

    app.get('/api/login', wrap(function () {
        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            req.session.login = true;
                            res.send(true);

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2) {
            return ref.apply(this, arguments);
        };
    }()));

    app.get('/api/is-login', wrap(function () {
        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            res.send(req.session.login);

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x3, _x4) {
            return ref.apply(this, arguments);
        };
    }()));

    app.get('/api/sign-out', wrap(function () {
        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            req.session.login = false;
                            res.send(true);

                        case 2:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x5, _x6) {
            return ref.apply(this, arguments);
        };
    }()));
};