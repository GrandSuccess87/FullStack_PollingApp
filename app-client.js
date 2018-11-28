// root client side js file

import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/app.js';

//render the APP component into React Container
ReactDOM.render(
  <APP />,
  document.getElementById("root")
);

//Next step: convert JSX code and ES6 to ES5 or below so the browser understands render function
//compile app.js and app-client.js to bundle.js and server it to the browser
//use webpack to create bundle.js file
