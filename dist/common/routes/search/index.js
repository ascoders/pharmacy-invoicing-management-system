'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactImmutableRenderMixin = require('react-immutable-render-mixin');

require('./index.scss');

var _fitTable = require('fit-table');

var _fitTable2 = _interopRequireDefault(_fitTable);

var _tableInfo = require('./table-info');

var _tableInfo2 = _interopRequireDefault(_tableInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        state: state.search
    };
}, function (dispatch) {
    return (0, _redux.bindActionCreators)({}, dispatch);
}), _dec(_class = (0, _reactImmutableRenderMixin.immutableRenderDecorator)(_class = function (_Component) {
    _inherits(Search, _Component);

    function Search(props) {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));
    }

    _createClass(Search, [{
        key: 'render',
        value: function render() {
            var state = this.props.state;


            return _react2.default.createElement(
                'div',
                { className: '_namespace' },
                _react2.default.createElement(_fitTable2.default, _extends({ ref: 'table' }, _tableInfo2.default))
            );
        }
    }]);

    return Search;
}(_react.Component)) || _class) || _class);
exports.default = Search;