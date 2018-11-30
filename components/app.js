//very first component rendered into index.html

//require react module in React variable
import React from 'react';
import ReactDOM from 'react-dom';
//import {render} from 'react-dom';

// create component
//react.createClass creates the component
class APP extends React.Component {

  //pass through literal with at least one thing: render function using ES6
  render() {
    // var info = "Hello World From React";
    //pass through JSX, later convert it so the browser will understand it
    return (<h1>Hello Quintessa and Mohammed From React!</h1>);
  }
};

module.exports = APP;

//need to render component into doc, need a root client js file that will be the first js file run inside browser, clinet based js: app-client.js
