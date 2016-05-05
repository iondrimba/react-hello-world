import React from 'react';

class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.onChange=this.onTextChange.bind(this);
        this.onClick=this.onButtonClick.bind(this);
        this.state = {
            name: '',
            enabled:false
        };
    }
    isEnabledCss() {
        let enabledCss = 'disabled';
        if(this.state.enabled){
            enabledCss = '';
        }
        return enabledCss;
    }
    shouldComponentUpdate(nextProps, nextState) {
        let update = true;
        if(this.isTextBlank(nextState.name)){
            update = false;
        }
        return update;
    }
    isTextBlank(text) {
        let isblank = false;

        if(text.length===0) {
            isblank = true;
        }

        let result = text.match(/\w/g);
        if(result===null){
            isblank = true;
        }

        return isblank;
    }
    enableButton(text) {
        let retorno = !this.isTextBlank(text);
        return retorno;
    }
    disableButton() {
        let retorno ='';
        if(this.state.enabled===false) {
            retorno = 'disabled';
        }

        return retorno;
    }
    onTextChange(evt) {
        console.log('onTextChange',evt.currentTarget.value);
        this.setState({ name: evt.currentTarget.value, enabled:this.enableButton(evt.currentTarget.value) });
    }
    onButtonClick() {
        this.props.onAdd(this.state.name);
        this.setState({ name: '', enabled:false });
    }
    componentWillMount() {
        console.log('TodoAdd componentWillMount');
        return true;
    }
    componentDidMount() {
        console.log('TodoAdd componentDidMount');
        return true;
    }
    render() {
        console.log('TodoAdd render');
        return (
            <div className="add-comp">
                < input type="text" onChange={this.onChange}  placeholder="todo" value={this.state.name}/>
                < button type="button" className={this.isEnabledCss()} disabled={this.disableButton()} onClick={this.onClick}>Add</button >
            </div >
        );
    }
}

TodoAdd.propTypes = { onAdd: React.PropTypes.func };

export default TodoAdd;