import React from 'react';

class TodoFilter extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
        this.onClickTodos = this.onClickItemTodos.bind(this);
        this.onClickCompletos = this.onClickItemCompletos.bind(this);
    }
    onClickItemTodos() {
        this.props.onFilter('all');
    }
    onClickItemCompletos() {
        this.props.onFilter('completed');
    }
    isActive(className, filter) {
        let css = className;

        if(className===filter){
            css =`${className} active`;
        }

        return css;
    }
    render() {
        return (
            <div className="todo-filter">
                <button className={this.isActive('all',this.props.filter)} onClick={this.onClickTodos} type="button">all</button>
                <button className={this.isActive('completed',this.props.filter)} onClick={this.onClickCompletos} type="button">completed</button>
            </div>
        );
    }
}

TodoFilter.propTypes = { onFilter: React.PropTypes.func };
TodoFilter.propTypes = { filter: React.PropTypes.string.isRequired };

export default TodoFilter;