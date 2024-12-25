import { React, useContext, useState, useEffect } from 'react';
import { NavLink, useLocation, Routes, Route, useParams } from 'react-router-dom';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { api } from "../../../utils/api";

function NavigationSidebar({ handleOpenMenu, sidebar, isLoggedIn, onSignOut, userId }) {
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
                                    <NavLink to={`/portfolio/${currentUser._id}`} onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname.includes('/portfolio') ? 'navigation-sidebar__link_active' : ''}`}>Portfolio</NavLink>
                                    <NavLink to="/account" onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname === '/account' ? 'navigation-sidebar__link_active' : ''}`}>Account</NavLink>
                                    <NavLink to="/SignIn" onMouseDown={onSignOut} onClick={handleOpenMenu} className="navigation-sidebar__link">Exit</NavLink>
                                </nav> 
                            </div>      
                        </div>
                    </section>
                </>
            }/>
            {["portfolio/:userId", "news/:userId"].map((path, index) =>
            <Route path={path} key={index} element={
                <>
                    <section className={`navigation-sidebar ${sidebar ? 'sidebar_active' : ''}`}>
                        <div className="navigation-sidebar__nav">
                            <button className="navigation-sidebar__btn-exit" onClick={handleOpenMenu}></button>
                            <div className="navigation-sidebar__links-profile">
                                <nav className="navigation-sidebar__links">
                                    <div onClick={handleOpenMenu} className={`navigation-sidebar__link ${location.pathname.includes('/portfolio') ? 'navigation-sidebar__link_active' : ''} ${location.pathname.includes('/news') ? 'navigation-sidebar__link_active' : ''}`}>
                                        User profile: {profileData.firstName || 'Loading...'} {profileData.familyName}
                                    </div>
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