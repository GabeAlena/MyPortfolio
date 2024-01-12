import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = ({ isLoggedIn }) => {
    return (
        <div className="navigation">
            <nav className="navigation__nav">
            { isLoggedIn ?
                <>
                    <NavLink to="/account" className="header__account">Account</NavLink>
                    <NavLink to="/" className="header__exit">Exit</NavLink>
                </>  
            : 
                <>
                    <NavLink to="/SignUp" className="navigation__register">Sign Up</NavLink>
                    <NavLink to="/SignIn" className="navigation__login">Sign In</NavLink>
                </>  
            }
            </nav>
        </div>
    )
}

export default Navigation;