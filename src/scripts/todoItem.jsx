import React from 'react';

class TodoItem extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
        this.todo = this.props.todo;
        this.onClick = this.onClickItem.bind(this);
        this.state={
            completed: this.todo.completed
        };
    }
    onClickItem() {
        this.props.onClick(this.todo);
    }
    isCompletedCSS() {
        let className='todoItem';

        if(this.todo.completed) {
            className='todoItem completed';
        }

        return className;
    }
    render() {
        return (
            <li className={this.isCompletedCSS()} onClick={this.onClick}>{this.todo.label}</li>
        );
    }
}

TodoItem.propTypes = { onClick: React.PropTypes.func };
TodoItem.propTypes = { todo: React.PropTypes.object.isRequired };

export default TodoItem;