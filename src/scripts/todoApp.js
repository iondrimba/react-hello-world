import React from 'react';
import TodoAdd from './todoAdd';
import TodoList from './todoList';
import TodoFilter from './todoFilter';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos:[
            {
                label:'aaa',
                completed:false,
                id:0
            },
            {
                label:'bbb',
                completed:false,
                id:1
            },
            {
                label:'ccc',
                completed:true,
                id:2
            }
            ],
            filteredCount:3,
            filter:'todos'
        };

        this.onAdd = this.onAddTodo.bind(this);
        this.onFilter = this.onFilterTodo.bind(this);
        this.onClick = this.onClickItem.bind(this);

    }
    onAddTodo(text) {
        this.state.todos.push({label:text, completed:false, id:this.state.todos.length});
        this.setState({todos:this.state.todos});
    }
    onClickItem(todo) {
        todo.completed = !todo.completed;
        let selected = this.state.todos.filter(function(item) {
            return item.id === todo.id;
        });

        selected.completed=!todo.completed;

        let count = this.getCount(this.state.todos);
        if(count==0 && this.state.filter==='completos') {
            this.setState({todos:this.state.todos, filter:'todos'});
        }else{
            this.setState({todos:this.state.todos, count:count});
        }

    }
    getCount(array){
        let count = 0;
        if(this.state.filter==='completos') {
            array.map(function(item){
                if(item.completed===true){
                    count++;
                }
            });
        }else{
            count = array.length;
        }

        return count;
    }
    onFilterTodo(filter) {
        this.setState({filter:filter});
    }
    render() {
        return (
            <div>
                <TodoAdd onAdd = {this.onAdd}/>
                <TodoList todos={this.state.todos}  filter={this.state.filter} onClick={this.onClick} />
                <TodoFilter onFilter={this.onFilter} filter={this.state.filter}/>
            </div>
        );
    }
}

export default TodoApp;