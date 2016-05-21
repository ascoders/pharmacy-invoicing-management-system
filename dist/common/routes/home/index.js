'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _action = require('./action');

var actions = _interopRequireWildcard(_action);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _fitButton = require('fit-button');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactImmutableRenderMixin = require('react-immutable-render-mixin');

require('./index.scss');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _reactRedux.connect)(function (state) {
    return {};
}, function (dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)(actions, dispatch));
}), _dec(_class = (0, _reactImmutableRenderMixin.immutableRenderDecorator)(_class = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

        _this.state = {
            isLogin: false
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            _axios2.default.get('/api/is-login', {}).then(function (res) {
                if (res.data) {
                    _this2.setState({
                        isLogin: true
                    });
                }
            });
        }
    }, {
        key: 'handleLogin',
        value: function handleLogin() {
            var _this3 = this;

            _axios2.default.get('/api/login', {}).then(function (res) {
                _this3.setState({
                    isLogin: true
                });
            });
        }
    }, {
        key: 'handleSignOut',
        value: function handleSignOut() {
            var _this4 = this;

            _axios2.default.get('/api/sign-out', {}).then(function (res) {
                _this4.setState({
                    isLogin: false
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: '_namespace' },
                '欢迎光临药店进销存管理系统',
                !this.state.isLogin ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'login',
                            style: { marginTop: 20, display: 'flex' } },
                        _react2.default.createElement(_fitInput2.default, { label: '帐号',
                            style: { marginRight: 10 } }),
                        _react2.default.createElement(_fitInput2.default, { label: '密码' })
                    ),
                    _react2.default.createElement(
                        _fitButton.Button,
                        { onClick: this.handleLogin.bind(this) },
                        '登录'
                    )
                ) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _fitButton.Button,
                        { onClick: this.handleSignOut.bind(this) },
                        '退出'
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component)) || _class) || _class);
exports.default = Home;