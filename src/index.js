import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 



class Content extends React.Component {

    render() {
        return (
            <div 
                className="content"
            >
                {this.props.content}
            </div>
        );
    }
} 

class Tab extends React.Component {

    render() {
        return (
            <div className="tab"
                onClick={this.props.onClick}
            >
                {this.props.tabName}
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'content tab 1'
        }
    }

    

    onClick(innerContent, i) {
        this.setState({content: innerContent});
    }

    render() {
        return (
            <div className="app">
                <div className="tabContainer">
                    <Tab id="1" tabName="tab 1" onClick={this.onClick.bind(this, 'content tab 1')} />
                    <Tab id="2" tabName="tab 2" onClick={this.onClick.bind(this, 'content tab 2')} />
                    <Tab id="3" tabName="tab 3" onClick={this.onClick.bind(this, 'content tab 3')} />
                </div>   
                    <Content content={this.state.content} />
            </div>
        );
    }
}

const element = document.getElementById('root');
ReactDOM.render(<App />, element);