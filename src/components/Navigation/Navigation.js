import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <nav className="navigation__nav">
                <NavLink to="/register" className="navigation__register">Register</NavLink>
                <NavLink to="/login" className="navigation__login">Login</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;