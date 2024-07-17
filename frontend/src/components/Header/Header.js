import { React, useContext, useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation, NavLink, useParams } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import headerLogo from '../../images/logo.png';
import { api } from "../../utils/api";

function Header({ isLoggedIn, handleOpenMenu, onSignOut, userId }) {
    const location = useLocation();
    const currentUser = useContext(CurrentUserContext);
    const [userProfile, setUserProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (userId && (!currentUser || currentUser._id !== userId)) {
                try {
                    const userData = await api.getUserById(userId);
                    setUserProfile(userData);
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        };    

        fetchUserProfile();
    }, [userId, currentUser]);

    const profileData = userProfile || currentUser;

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
            {["/portfolio/:userId", "/news/:userId"].map((path, index) => 
                <Route path={path} key={index} element={
                    <>
                        <header className="header">
                            <Link to="/" className="header__logo-link">
                                <img  src={headerLogo} className="header__logo" alt="logo" />
                            </Link>
                            <div className="header__nav">
                                <div className={`header__portfolio ${location.pathname.includes('/portfolio') ? 'header__portfolio_active' : ''} ${location.pathname.includes('/news') ? 'header__portfolio_active' : ''}`}>
                                    User profile: {profileData.firstName || 'Loading...'} {profileData.familyName}
                                </div>
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
                            <NavLink to={`/portfolio/${currentUser._id}`} className={`header__portfolio_signed ${location.pathname.includes('/portfolio') ? 'header__portfolio_active' : ''}`}>Portfolio</NavLink>
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