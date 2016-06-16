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

var TodoFilter = function (_React$Component) {
    _inherits(TodoFilter, _React$Component);

    function TodoFilter(props) {
        _classCallCheck(this, TodoFilter);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoFilter).call(this, props));

        _this.props = props;
        _this.onClickTodos = _this.onClickItemTodos.bind(_this);
        _this.onClickCompletos = _this.onClickItemCompletos.bind(_this);
        return _this;
    }

    _createClass(TodoFilter, [{
        key: 'onClickItemTodos',
        value: function onClickItemTodos() {
            this.props.onFilter('all');
        }
    }, {
        key: 'onClickItemCompletos',
        value: function onClickItemCompletos() {
            this.props.onFilter('completed');
        }
    }, {
        key: 'isActive',
        value: function isActive(className, filter) {
            var css = className;

            if (className === filter) {
                css = className + ' active';
            }

            return css;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'todo-filter' },
                _react2.default.createElement(
                    'button',
                    { className: this.isActive('all', this.props.filter), onClick: this.onClickTodos, type: 'button' },
                    'all'
                ),
                _react2.default.createElement(
                    'button',
                    { className: this.isActive('completed', this.props.filter), onClick: this.onClickCompletos, type: 'button' },
                    'completed'
                )
            );
        }
    }]);

    return TodoFilter;
}(_react2.default.Component);

TodoFilter.propTypes = { onFilter: _react2.default.PropTypes.func };
TodoFilter.propTypes = { filter: _react2.default.PropTypes.string.isRequired };

exports.default = TodoFilter;