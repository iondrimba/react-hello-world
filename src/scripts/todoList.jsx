import React from 'react';
import TodoItem from './todoItem.jsx';

class TodoList extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
    }
    filterItems() {
        let items=[];
        if(this.props.filter==='completed') {
            this.props.todos.map(function(todo) {
                if( todo.completed) {
                    items.push(todo);
                }
            });
        }else{
            items = this.props.todos;
        }

        return items;
    }
    render() {
        let items = this.filterItems();

        return (
            <div className="todo-list">{
                    items.map(function(todo) {
                        return (
                            <TodoItem key={todo.id} todo={todo} onClick={this.props.onClick}/>
                        );
                    }.bind(this))
                 }
            </div>
        );
    }
}

TodoList.propTypes = { todos: React.PropTypes.array.isRequired };
TodoList.propTypes = { filter: React.PropTypes.string.isRequired };
TodoList.propTypes = { onClick: React.PropTypes.func.isRequired };


export default TodoList;
