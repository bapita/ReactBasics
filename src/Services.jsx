import React from 'react';
import {useParams} from 'react-router-dom';
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
    const { technology, subtech } = useParams();
    return(
        <>
            <h1> {technology} Services page using useParams()</h1>
            <h1> {subtech} Services page using useParams()</h1>
        </>
    );
}

export default Services;