import { React, useContext } from 'react';
import { Link, Routes, Route, useLocation, NavLink } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import headerLogo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn, handleOpenMenu, onSignOut }) {
    const location = useLocation();
    const currentUser = useContext(CurrentUserContext);

    return (
        <Routes>
            <Route exact path="/" element={
                <>
                    <header className="header">
                        <Link to="/" className="header__logo-link">
                            <img src={headerLogo} className="header__logo" alt="logo" />
                        </Link>
                        <div className="header__nav">
                                { isLoggedIn ?
                                    <>
                                        <NavLink to="/account" className="header__account">Account</NavLink>
                                        <NavLink to="/" className="header__exit" onClick={onSignOut}>Exit</NavLink>
                                    </>  
                                : 
                                    <>
                                        <NavLink to="/SignUp" className="header__register">Sign Up</NavLink>
                                        <NavLink to="/SignIn" className="header__login">Sign In</NavLink>
                                    </>  
                                }
                        </div>
                        <button type="button" className="header__nav-button" onClick={handleOpenMenu}>
                            <span></span>
                        </button>
                    </header>
                </>
            }/>
            {["portfolio", "news"].map((path, index) => 
                <Route path={path} key={index} element={
                    <>
                        <header className="header">
                            <Link to="/" className="header__logo-link">
                                <img  src={headerLogo} className="header__logo" alt="logo" />
                            </Link>
                            <div className="header__nav">
                                <div className={`header__portfolio ${location.pathname === '/portfolio' ? 'header__portfolio_active' : ''} ${location.pathname === '/news' ? 'header__portfolio_active' : ''}`}>User profile: {currentUser.firstName}</div>
                                { isLoggedIn ?
                                    <>
                                        <NavLink to="/account" className="header__account">Account</NavLink>
                                        <NavLink to="/" className="header__exit" onClick={onSignOut}>Exit</NavLink>
                                    </>  
                                : 
                                    <>
                                        <NavLink to="/SignUp" className="header__register">Sign Up</NavLink>
                                        <NavLink to="/SignIn" className="header__login">Sign In</NavLink>
                                    </>  
                                }
                            </div>
                            <button type="button" className="header__nav-button" onClick={handleOpenMenu}>
                                <span></span>
                            </button>
                        </header>
                    </>
                }/>
            )}          
            <Route path="/account" element={
                <>
                    <header className="header">
                        <Link to="/" className="header__logo-link">
                            <img src={headerLogo} className="header__logo" alt="logo" />
                        </Link>    
                        <div className="header__nav">
                            <NavLink to="/portfolio" className={`header__portfolio ${location.pathname === '/portfolio' ? 'header__portfolio_active' : ''}`}>Portfolio</NavLink>
                            <NavLink to="/account" className={`header__account ${location.pathname === '/account' ? 'header__account_active' : ''}`}>Account</NavLink>
                            <NavLink to="/" className="header__exit" onClick={onSignOut}>Exit</NavLink>
                        </div>
                        <button type="button" className="header__nav-button" onClick={handleOpenMenu}>
                            <span></span>
                        </button>
                    </header>
                </>
            }/>
            {["register", "login", "*"].map((path, index) => 
                <Route path={path} key={index} element={
                    <>
                        <header className="header">
                            <Link className="header__logo-link" to="/">
                                <img src={headerLogo} className="header__logo" alt="logo" />
                            </Link>    
                        </header>
                    </>
                }/>                    
            )}          
        </Routes>
    )
}

export default Header;