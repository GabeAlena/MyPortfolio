import { React, useContext } from 'react';
import { NavLink, useLocation, Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function NavigationSidebar({ handleOpenMenu, sidebar, isLoggedIn, onSignOut }) {
    const location = useLocation();
    const currentUser = useContext(CurrentUserContext);

    return (
        <Routes>
            <Route exact path="/" element={
                <>
                    <section className={`navigation-sidebar ${sidebar ? 'sidebar_active' : ''}`}>
                        <div className="navigation-sidebar__nav">
                            <button className="navigation-sidebar__btn-exit" onClick={handleOpenMenu}></button>
                            <div className="navigation-sidebar__links-profile">
                                <nav className="navigation-sidebar__links">
                                    <NavLink to="/" onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/' ? 'navigation-sidebar__link_active' : ''}`}>Main page</NavLink>
                                    { isLoggedIn ?
                                        <>
                                            <NavLink to="/account" onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/account' ? 'navigation-sidebar__link_active' : ''}`}>Account</NavLink>
                                            <NavLink to="/SignIn" onMouseDown={onSignOut} onClick={handleOpenMenu} className="navigation-sidebar__link">Exit</NavLink>
                                        </>
                                    :
                                        <>
                                            <NavLink to="/SignUp" onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/SignUp' ? 'navigation-sidebar__link_active' : ''}`}>Sign Up</NavLink>
                                            <NavLink to="/SignIn" onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/SignIn' ? 'navigation-sidebar__link_active' : ''}`}>Sign In</NavLink>
                                        </>
                                    }
                                </nav> 
                            </div>      
                        </div>
                    </section>
                </>
            }/>
            <Route path="/account" element={
                <>
                    <section className={`navigation-sidebar ${sidebar ? 'sidebar_active' : ''}`}>
                        <div className="navigation-sidebar__nav">
                            <button className="navigation-sidebar__btn-exit" onClick={handleOpenMenu}></button>
                            <div className="navigation-sidebar__links-profile">
                                <nav className="navigation-sidebar__links">
                                    <NavLink to="/portfolio" onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/portfolio' ? 'navigation-sidebar__link_active' : ''}`}>Portfolio</NavLink>
                                    <NavLink to="/account" onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/account' ? 'navigation-sidebar__link_active' : ''}`}>Account</NavLink>
                                    <NavLink to="/SignIn" onMouseDown={onSignOut} onClick={handleOpenMenu} className="navigation-sidebar__link">Exit</NavLink>
                                </nav> 
                            </div>      
                        </div>
                    </section>
                </>
            }/>
            {["portfolio", "news"].map((path, index) =>
            <Route path={path} key={index} element={
                <>
                    <section className={`navigation-sidebar ${sidebar ? 'sidebar_active' : ''}`}>
                        <div className="navigation-sidebar__nav">
                            <button className="navigation-sidebar__btn-exit" onClick={handleOpenMenu}></button>
                            <div className="navigation-sidebar__links-profile">
                                <nav className="navigation-sidebar__links">
                                    <div onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/portfolio' ? 'navigation-sidebar__link_active' : ''} ${location.pathname === '/news' ? 'navigation-sidebar__link_active' : ''}`}>User profile: {currentUser.firstName}</div>
                                    { isLoggedIn ?
                                        <>
                                            <NavLink to="/account" onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/account' ? 'navigation-sidebar__link_active' : ''}`}>Account</NavLink>
                                            <NavLink to="/" onMouseDown={onSignOut} onClick={handleOpenMenu} className="navigation-sidebar__link">Exit</NavLink>
                                        </>
                                    :
                                        <>
                                            <NavLink to="/SignUp" onClick={handleOpenMenu} className="navigation-sidebar__link">Sign Up</NavLink>
                                            <NavLink to="/SignIn" onClick={handleOpenMenu} className="navigation-sidebar__link">Sign In</NavLink>
                                        </>
                                    }
                                </nav> 
                            </div>      
                        </div>
                    </section>
                </>
            }/>
            )}
        </Routes>
    )
}

export default NavigationSidebar;