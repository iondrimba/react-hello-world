'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoAdd = function (_React$Component) {
    _inherits(TodoAdd, _React$Component);

    function TodoAdd(props) {
        _classCallCheck(this, TodoAdd);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoAdd).call(this, props));

        _this.props = props;
        _this.onChange = _this.onTextChange.bind(_this);
        _this.onClick = _this.onButtonClick.bind(_this);
        _this.state = {
            name: '',
            enabled: false
        };
        return _this;
    }

    _createClass(TodoAdd, [{
        key: 'isEnabledCss',
        value: function isEnabledCss() {
            var enabledCss = 'disabled';
            if (this.state.enabled) {
                enabledCss = '';
            }
            return enabledCss;
        }
    }, {
        key: 'isTextBlank',
        value: function isTextBlank(text) {
            var isblank = false;

            if (text.length === 0) {
                isblank = true;
            }

            var result = text.match(/\w/g);
            if (result === null) {
                isblank = true;
            }

            return isblank;
        }
    }, {
        key: 'enableButton',
        value: function enableButton(text) {
            var retorno = !this.isTextBlank(text);
            return retorno;
        }
    }, {
        key: 'disableButton',
        value: function disableButton() {
            var retorno = '';
            if (this.state.enabled === false) {
                retorno = 'disabled';
            }

            return retorno;
        }
    }, {
        key: 'onTextChange',
        value: function onTextChange(evt) {
            this.setState({ name: evt.currentTarget.value, enabled: this.enableButton(evt.currentTarget.value) });
        }
    }, {
        key: 'onButtonClick',
        value: function onButtonClick() {
            this.props.onAdd(this.state.name);
            this.setState({ name: '', enabled: false });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'add-comp' },
                _react2.default.createElement('input', { type: 'text', onChange: this.onChange, placeholder: 'todo', value: this.state.name }),
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: this.isEnabledCss(), disabled: this.disableButton(), onClick: this.onClick },
                    'Add'
                )
            );
        }
    }]);

    return TodoAdd;
}(_react2.default.Component);

TodoAdd.propTypes = { onAdd: _react2.default.PropTypes.func };

exports.default = TodoAdd;