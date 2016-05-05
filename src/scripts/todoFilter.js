import React from 'react';

class TodoFilter extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
        this.onClickTodos = this.onClickItemTodos.bind(this);
        this.onClickCompletos = this.onClickItemCompletos.bind(this);
    }
    onClickItemTodos() {
        this.props.onFilter('todos');
    }
    onClickItemCompletos() {
        this.props.onFilter('completos');
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
                <button className={this.isActive('todos',this.props.filter)} onClick={this.onClickTodos} type="button">Todos</button>
                <button className={this.isActive('completos',this.props.filter)} onClick={this.onClickCompletos} type="button">Completos</button>
            </div>
        );
    }
}

TodoFilter.propTypes = { onFilter: React.PropTypes.func };
TodoFilter.propTypes = { filter: React.PropTypes.string.isRequired };

export default TodoFilter;