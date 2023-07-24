import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <nav className="navigation__nav">
                <NavLink to="/SignUp" className="navigation__register">Sign Up</NavLink>
                <NavLink to="/SignIn" className="navigation__login">Sign In</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;