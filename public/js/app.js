'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _todoApp = require('./todoApp.jsx');

var _todoApp2 = _interopRequireDefault(_todoApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_todoApp2.default, null), document.getElementById('example'));
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

var TodoItem = function (_React$Component) {
    _inherits(TodoItem, _React$Component);

    function TodoItem(props) {
        _classCallCheck(this, TodoItem);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).call(this, props));

        _this.props = props;
        _this.todo = _this.props.todo;
        _this.onClick = _this.onClickItem.bind(_this);
        _this.state = {
            completed: _this.todo.completed
        };
        return _this;
    }

    _createClass(TodoItem, [{
        key: 'onClickItem',
        value: function onClickItem() {
            this.props.onClick(this.todo);
        }
    }, {
        key: 'isCompletedCSS',
        value: function isCompletedCSS() {
            var className = 'todoItem';

            if (this.todo.completed) {
                className = 'todoItem completed';
            }

            return className;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { className: this.isCompletedCSS(), onClick: this.onClick },
                this.todo.label
            );
        }
    }]);

    return TodoItem;
}(_react2.default.Component);

TodoItem.propTypes = { onClick: _react2.default.PropTypes.func };
TodoItem.propTypes = { todo: _react2.default.PropTypes.object.isRequired };

exports.default = TodoItem;
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