'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _todoAdd = require('./todoAdd.jsx');

var _todoAdd2 = _interopRequireDefault(_todoAdd);

var _todoList = require('./todoList.jsx');

var _todoList2 = _interopRequireDefault(_todoList);

var _todoFilter = require('./todoFilter.jsx');

var _todoFilter2 = _interopRequireDefault(_todoFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
    _inherits(TodoApp, _React$Component);

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoApp).call(this, props));

        _this.state = {
            todos: [{
                label: 'aaa',
                completed: false,
                id: 0
            }, {
                label: 'bbb',
                completed: false,
                id: 1
            }, {
                label: 'ccc',
                completed: true,
                id: 2
            }],
            filteredCount: 3,
            filter: 'all'
        };

        console.log('OLA 333');

        _this.onAdd = _this.onAddTodo.bind(_this);
        _this.onFilter = _this.onFilterTodo.bind(_this);
        _this.onClick = _this.onClickItem.bind(_this);

        return _this;
    }

    _createClass(TodoApp, [{
        key: 'onAddTodo',
        value: function onAddTodo(text) {
            this.state.todos.push({ label: text, completed: false, id: this.state.todos.length });
            this.setState({ todos: this.state.todos });
        }
    }, {
        key: 'onClickItem',
        value: function onClickItem(todo) {
            todo.completed = !todo.completed;
            var selected = this.state.todos.filter(function (item) {
                return item.id === todo.id;
            });

            selected.completed = !todo.completed;

            var count = this.getCount(this.state.todos);
            if (count == 0 && this.state.filter === 'completed') {
                this.setState({ todos: this.state.todos, filter: 'all' });
            } else {
                this.setState({ todos: this.state.todos, count: count });
            }
        }
    }, {
        key: 'getCount',
        value: function getCount(array) {
            var count = 0;
            if (this.state.filter === 'completed') {
                array.map(function (item) {
                    if (item.completed === true) {
                        count++;
                    }
                });
            } else {
                count = array.length;
            }

            return count;
        }
    }, {
        key: 'onFilterTodo',
        value: function onFilterTodo(filter) {
            this.setState({ filter: filter });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_todoAdd2.default, { onAdd: this.onAdd }),
                _react2.default.createElement(_todoList2.default, { todos: this.state.todos, filter: this.state.filter, onClick: this.onClick }),
                _react2.default.createElement(_todoFilter2.default, { onFilter: this.onFilter, filter: this.state.filter })
            );
        }
    }]);

    return TodoApp;
}(_react2.default.Component);

exports.default = TodoApp;