'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _action = require('./action');

var actions = _interopRequireWildcard(_action);

var _fitLayoutGlobal = require('fit-layout-global');

var _fitMenu = require('fit-menu');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = (_dec = (0, _reactRedux.connect)(function (state) {
    return {};
}, function (dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)(actions, dispatch));
}), _dec(_class = function (_Component) {
    _inherits(LayoutComponent, _Component);

    function LayoutComponent(props) {
        _classCallCheck(this, LayoutComponent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LayoutComponent).call(this, props));
    }

    _createClass(LayoutComponent, [{
        key: 'eventUndo',
        value: function eventUndo(e) {
            e.preventDefault();
            this.props.undo();
        }
    }, {
        key: 'eventRedo',
        value: function eventRedo(e) {
            e.preventDefault();
            this.props.redo();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _fitLayoutGlobal.Layout,
                null,
                _react2.default.createElement(
                    _fitLayoutGlobal.Header,
                    { height: '45' },
                    _react2.default.createElement(
                        _fitMenu.Menu,
                        { inverse: true,
                            style: { display: 'flex', alignIten: 'center', justifyContent: 'center' } },
                        _react2.default.createElement(
                            _fitMenu.MenuItem,
                            { brand: true,
                                to: '/',
                                style: { width: 200 } },
                            '药店进销存管理系统'
                        )
                    )
                ),
                _react2.default.createElement(
                    _fitLayoutGlobal.Sidebar,
                    { width: '150' },
                    _react2.default.createElement(
                        _fitMenu.Menu,
                        { inverse: true,
                            vertical: true },
                        _react2.default.createElement(
                            _fitMenu.MenuItem,
                            { to: '/add' },
                            '药品入库'
                        ),
                        _react2.default.createElement(
                            _fitMenu.MenuItem,
                            { to: '/search' },
                            '库存查询'
                        ),
                        _react2.default.createElement(
                            _fitMenu.MenuItem,
                            { to: '/sell' },
                            '药品销售'
                        ),
                        _react2.default.createElement(
                            _fitMenu.MenuItem,
                            { to: '/member' },
                            '会员管理'
                        )
                    )
                ),
                _react2.default.createElement(
                    _fitLayoutGlobal.Section,
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return LayoutComponent;
}(_react.Component)) || _class);
exports.default = LayoutComponent;