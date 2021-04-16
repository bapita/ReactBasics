import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
// useParam() is one of the Hooks of react router DOM

// using match, without Hooks

/* const Services = ({ match }) => {
    return(
        <>
            <h1> {match.params.technology} Services page</h1>
        </>
    );
}
*/

const Services = () => {
    const { technology, subtech } = useParams(); // curly braces shows objects 
    const location = useLocation(); // to find out the current URL path
    const history = useHistory(); // to go back and forward 
    return(
        <>
            <h1> {technology} Services page using useParams()</h1>
            <h1> {subtech} Services page using useParams()</h1>
            <p>My current location is {location.pathname}</p>
            {location.pathname === `/services/php/java` ? 
            <>
                <button style={{margin:20}}
                onClick={() => {history.push("/")}}>Move to Home Page</button>
                <button onClick={() => {history.goBack()}}>Move Back</button>
                <button style={{margin:20}} onClick={() =>{history.goForward()}}>Move Forward</button>
                <button onClick={() => {alert("Correct URL. Now change it");}}>Alert</button>
            </>
                : null
            }
            {
                /*
                    <button onClick={() => {history.goBack()}}>Move Back</button>
                    <button onClick={() =>{history.goForward()}}>Move Forward</button>
                    <button onClick={() => {history.push("/")}}>HomePage</button>
                    
                */
            }
            
        </>
    );
}

export default Services;