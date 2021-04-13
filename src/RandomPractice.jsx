import React from 'react';
import * as calc from './Calculations';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function RandomPractice() {
    //var React = require('react');
    //var ReactDOM = require('react-dom');

    //render method takes one single element, not multiple
    //using [] we can eleiminate <div> tag and write array of elements 
    //instead of div, we can use React.Fragment to take multiple elements
    // instead of react fragment, we can use <> and </> 
    const fname = "Bapita";
    const lname = "Roy";
    const d = new Date().toLocaleDateString();
    const t = new Date().toLocaleTimeString();

    // creating an object for inline CSS
    const inlineCss = {
        color: '#fa9191',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textShadow: '0px 2px 4px #ffe9c5',
        margin: '50px 0',
        fontFamily: '"Josefin Sans", sans-serif'
    };

    return (
        <>
            <h1 style={inlineCss}>Inline CSS</h1>
            <p>Using template literals</p>
            <p>{`my name is ${fname} ${lname}`}</p>
            <p>{`Current date is ${d} and current time is ${t}`}</p>
            <p>{fname}'s List of {2 + 3} best series</p>
            <p>My lucky no is {Math.random()}</p>
            <p>Addition of two numbers {calc.default(40,4)}</p>
            <p>Division of two numbers {calc.div(40,3)}</p>
            <p>Multiplication of two numbers {calc.mult(40,4)}</p>
            <p>Subtraction of two numbers {calc.subs(40,3)}</p>
            <h1 className ="text-capitalize text-center mt-5 text-danger ">Bootstrap class</h1>
            <button className="btn btn-success align-content-center">Bootstrap button</button>
        </>
    );

}
// only one will be default
export default RandomPractice;

// other exports will be like this
// export {Random, Practice};