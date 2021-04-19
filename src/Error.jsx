import React from 'react';
import { NavLink } from "react-router-dom";


const Error = () => {
    return(
        <>
           <h1>404 Page not found! </h1>
           <NavLink to="/">Home Page</NavLink>
        </>
    );
}

export default Error;