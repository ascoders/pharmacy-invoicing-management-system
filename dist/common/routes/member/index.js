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

var _fitLayout = require('fit-layout');

var _reactImmutableRenderMixin = require('react-immutable-render-mixin');

require('./index.scss');

var _fitTable = require('fit-table');

var _fitTable2 = _interopRequireDefault(_fitTable);

var _tableInfo = require('./table-info');

var _tableInfo2 = _interopRequireDefault(_tableInfo);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _fitNumber = require('fit-number');

var _fitNumber2 = _interopRequireDefault(_fitNumber);

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Member = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        state: state.add
    };
}, function (dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)(actions, dispatch));
}), _dec(_class = (0, _reactImmutableRenderMixin.immutableRenderDecorator)(_class = function (_Component) {
    _inherits(Member, _Component);

    function Member(props) {
        _classCallCheck(this, Member);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Member).call(this, props));
    }

    _createClass(Member, [{
        key: 'handleAddDataChange',
        value: function handleAddDataChange(field, value) {
            this.props.setAddData({ field: field, value: value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var setAddData = _props.setAddData;
            var addDrug = _props.addDrug;
            var state = _props.state;


            return _react2.default.createElement(
                'div',
                { className: '_namespace' },
                _react2.default.createElement(
                    'div',
                    { className: 'fields' },
                    _react2.default.createElement(
                        _fitLayout.Row,
                        null,
                        _react2.default.createElement(
                            _fitLayout.Col,
                            { span: '6' },
                            _react2.default.createElement(_fitInput2.default, { onChange: this.handleAddDataChange.bind(this, 'name'),
                                label: '姓名' })
                        ),
                        _react2.default.createElement(
                            _fitLayout.Col,
                            { span: '6' },
                            _react2.default.createElement(_fitInput2.default, { onChange: this.handleAddDataChange.bind(this, 'phone'),
                                label: '手机号' })
                        ),
                        _react2.default.createElement(
                            _fitLayout.Col,
                            { span: '6' },
                            _react2.default.createElement(_fitInput2.default, { onChange: this.handleAddDataChange.bind(this, 'buy'),
                                label: '购买药品名称' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'fields' },
                    _react2.default.createElement(
                        _fitLayout.Row,
                        null,
                        _react2.default.createElement(
                            _fitLayout.Col,
                            { span: '6' },
                            _react2.default.createElement(_fitInput2.default, { onChange: this.handleAddDataChange.bind(this, 'buyTime'),
                                label: '购买药品时间' })
                        ),
                        _react2.default.createElement(
                            _fitLayout.Col,
                            { span: '6' },
                            _react2.default.createElement(_fitInput2.default, { onChange: this.handleAddDataChange.bind(this, 'buyNumber'),
                                label: '购买药品数量' })
                        ),
                        _react2.default.createElement(
                            _fitLayout.Col,
                            { span: '6' },
                            _react2.default.createElement(_fitInput2.default, { onChange: this.handleAddDataChange.bind(this, 'buyPrice'),
                                label: '总价格' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'fields' },
                    _react2.default.createElement(
                        _fitButton2.default,
                        { type: 'primary',
                            onClick: addDrug.bind(this, state.get('addData').toJS()) },
                        '新增'
                    )
                ),
                _react2.default.createElement(_fitTable2.default, _extends({ ref: 'table' }, _tableInfo2.default))
            );
        }
    }]);

    return Member;
}(_react.Component)) || _class) || _class);
exports.default = Member;