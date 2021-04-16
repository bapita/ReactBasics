import React from 'react';
import {NavLink} from 'react-router-dom';
// {Link} would work as well but "activeClassName" ca not be used there

const Navbar = () => {
    return (
        <>
            <br/><hr/>
            <div className="navbar">
            <NavLink exact activeClassName="active_class" to="/">About Page</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">Contact Page</NavLink>
            <NavLink activeClassName="active_class" to="/services/php/java">Services Page</NavLink>
            <NavLink exact activeClassName="active_class" to="/error">Error Page</NavLink>
            </div>
        </>
    );
}

export default Navbar;