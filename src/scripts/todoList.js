'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _todoItem = require('./todoItem.jsx');

var _todoItem2 = _interopRequireDefault(_todoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_React$Component) {
    _inherits(TodoList, _React$Component);

    function TodoList(props) {
        _classCallCheck(this, TodoList);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).call(this, props));

        _this.props = props;
        return _this;
    }

    _createClass(TodoList, [{
        key: 'filterIntes',
        value: function filterIntes() {
            var itens = [];
            if (this.props.filter === 'completed') {
                this.props.todos.map(function (todo) {
                    if (todo.completed) {
                        itens.push(todo);
                    }
                });
            } else {
                itens = this.props.todos;
            }

            return itens;
        }
    }, {
        key: 'render',
        value: function render() {
            var itens = this.filterIntes();

            return _react2.default.createElement(
                'div',
                { className: 'todo-list' },
                itens.map(function (todo) {
                    return _react2.default.createElement(_todoItem2.default, { key: todo.id, todo: todo, onClick: this.props.onClick });
                }.bind(this))
            );
        }
    }]);

    return TodoList;
}(_react2.default.Component);

TodoList.propTypes = { todos: _react2.default.PropTypes.array.isRequired };
TodoList.propTypes = { filter: _react2.default.PropTypes.string.isRequired };
TodoList.propTypes = { onClick: _react2.default.PropTypes.func.isRequired };

exports.default = TodoList;