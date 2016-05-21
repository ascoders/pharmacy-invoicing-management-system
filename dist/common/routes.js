'use strict';

Object.defineProperty(exports, "__esModule", {
       value: true
});

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _home = require('./routes/home');

var _home2 = _interopRequireDefault(_home);

var _counter = require('./routes/counter');

var _counter2 = _interopRequireDefault(_counter);

var _notFound = require('./routes/not-found');

var _notFound2 = _interopRequireDefault(_notFound);

var _search = require('./routes/search');

var _search2 = _interopRequireDefault(_search);

var _member = require('./routes/member');

var _member2 = _interopRequireDefault(_member);

var _sell = require('./routes/sell');

var _sell2 = _interopRequireDefault(_sell);

var _add = require('./routes/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
       _reactRouter.Route,
       { path: '/',
              component: _layout2.default },
       _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
       _react2.default.createElement(_reactRouter.Route, { path: '/counter',
              component: _counter2.default }),
       _react2.default.createElement(_reactRouter.Route, { path: '/add',
              component: _add2.default }),
       _react2.default.createElement(_reactRouter.Route, { path: '/member',
              component: _member2.default }),
       _react2.default.createElement(_reactRouter.Route, { path: '/search',
              component: _search2.default }),
       _react2.default.createElement(_reactRouter.Route, { path: '/sell',
              component: _sell2.default }),
       _react2.default.createElement(_reactRouter.Route, { path: '*',
              component: _notFound2.default })
);