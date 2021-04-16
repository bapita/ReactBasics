import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,document.getElementById("root"));

// traditional javascript
/*var h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1); 
*/
