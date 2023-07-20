import React from 'react';
import { Link, Routes, Route, useLocation } from "react-router-dom";
import headerLogo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn, handleOpenMenu }) {
    const location = useLocation();

    return (
        <Routes>
            <Route exact path="/" element={
                <>
                    <header className="header">
                        <Link to="/" className="header__logo-link">
                            <img src={headerLogo} className="header__logo" alt="logo" />
                        </Link>
                        <Navigation onClick={handleOpenMenu} />
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
                                <div className={`header__portfolio ${location.pathname === '/portfolio' ? 'header__portfolio_active' : ''} ${location.pathname === '/news' ? 'header__portfolio_active' : ''}`}>User profile: Aleksandr</div>
                                { isLoggedIn ?
                                    <>
                                        <Link to="/account" className="header__account">Account</Link>
                                        <Link to="/" className="header__exit">Exit</Link>
                                    </>  
                                : 
                                    <>
                                        <Link to="/register" className="header__register">Register</Link>
                                        <Link to="/login" className="header__login">Login</Link>
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
                            <Link to="/portfolio" className={`header__portfolio ${location.pathname === '/portfolio' ? 'header__portfolio_active' : ''}`}>Portfolio</Link>
                            <Link to="/account" className={`header__account ${location.pathname === '/account' ? 'header__account_active' : ''}`}>Account</Link>
                            <Link to="/" className="header__exit">Exit</Link>
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