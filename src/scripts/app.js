import React from '../../node_modules/react/dist/react';
import ReactDOM from '../../node_modules/react-dom/dist/react-dom';

class App {
    constructor() {
        class ComponentBusca extends React.Component {
            componentWillMount() {
                console.log('Busca componentWillMount');
                return true;
            }
            componentDidMount() {
                console.log('Busca componentDidMount');
                return true;
            }
            render() {
                console.log('Busca render');
                return <div > < input type = "text"
                placeholder = "Search"
                value = "" / > < button type = "button" > Buscar < /button > < /div > ;
            }
        }

        class ComponentUser extends React.Component {
            componentWillMount() {
                console.log('User componentWillMount');
                return true;
            }
            componentDidMount() {
                console.log('User componentDidMount');
                return true;
            }
            render() {
                console.log('User render');
                return <p > User { this.props.name } < /p>;
            }
        }

        class Main extends React.Component {
            componentWillMount() {
                console.log('App componentWillMount');
                return true;
            }
            componentDidMount() {
                console.log('App componentDidMount');
                return true;
            }
            render() {
                console.log('App render');
                return <div >
                    < ComponentBusca / >
                    < ComponentUser / > < /div > ;
            }
        }

        ComponentUser.propTypes = { name: React.PropTypes.string.isRequired };
        ComponentUser.defaultProps = { name: 'Ion' };
        Main.propTypes = { name: React.PropTypes.string.isRequired };

        ReactDOM.render( < Main name = "John" / > , document.getElementById('example'));
    }
}

window.app = new App();