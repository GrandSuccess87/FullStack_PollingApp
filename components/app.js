//very first component rendered into index.html

//require react module in React variable
var React = require('react');

// create component
//react.createClass creates the component
var APP = React.createClass({

  //pass through literal with at least one thing: render function using ES6
  render() {
    var info = "Hello World From React";
    //pass through JSX, later convert it so the browser will understand it
    return (<h1>{info}</h1>);
  }
});

module.exports = APP;

//need to render component into doc, need a root client js file that will be the first js file run inside browser, clinet based js: app-client.js
