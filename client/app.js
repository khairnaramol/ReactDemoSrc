// Code Here
import React from 'react';
import ReactDOM from 'react-dom'

class HelloComponent extends React.Component{
    render(){
        return <h1>Hello react using ES6</h1>
    }
}
ReactDOM.render(
    React.createElement(HelloComponent), 
    document.getElementById('content')
);
