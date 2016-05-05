import React from 'react';
import TodoItem from './todoItem';

class TodoList extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
    }
    filterIntes() {
        let itens=[];
        if(this.props.filter==='completed') {
            this.props.todos.map(function(todo) {
                if( todo.completed) {
                    itens.push(todo);
                }
            });
        }else{
            itens = this.props.todos;
        }

        return itens;
    }
    render() {
        let itens = this.filterIntes();

        return (
            <div className="todo-list">{
                    itens.map(function(todo) {
                        console.log('list', todo);
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