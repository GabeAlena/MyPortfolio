import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Router, useNavigate, useLocation, useParams } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NavigationSidebar from '../Navigation/NavigationSidebar/NavigationSidebar';
import NotFound from '../NotFound/NotFound';
import Account from '../Account/Account';
import Portfolio from '../Portfolio/Portfolio';
import News from '../News/News';
import ImagePopup from '../ImagePopup/ImagePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/api.js';
import * as auth from '../../utils/auth.js';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [userPhoto, setUserPhoto] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [userId, setUserId] = useState(null);

    const isOpen = isEditAvatarPopupOpen || userPhoto;

    const handleOpenMenu = () => {
      setSidebar(!sidebar);
    }

    const checkToken = () => {
      const token = localStorage.getItem('token');
      if (token) {
        auth.checkToken(token)
          .then((res) => {
            if (res) {
              setCurrentUser(res);
              setIsLoggedIn(true);
              //navigate('/');
              console.log(res);
              console.log('data in checkToken');
            }
          })
          .catch((err) => {
            console.log('Error during token check:', err.message); // Add this line for debugging
            //handleSignOut();
          })
      }
    };

    useEffect(() => {
      checkToken();
    }, []);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token/* || isLoggedIn*/) {
        setIsLoggedIn(true);
      }
    }, [isLoggedIn]);

    // дает переходить по url аторизованному пользователю
    // и позволяет выкидывать пользователя при невалидном токине
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        if (location.pathname === "/account") {
          console.log(token);
          handleSignOut();
        }
      } 
    }, [isLoggedIn]);

    useEffect(() => {
      getUserInfo();
    }, [isLoggedIn]);

    function getUserInfo() {
      if (isLoggedIn) {
        api.getUserInfo()
          .then((res) => {
            if (res) {
              setCurrentUser(res);
              setIsLoggedIn(true);
            }
          })
          .catch((err) => console.log(err));
      }
    };

    function handleSignOut() {
      console.log('you exit');
      setCurrentUser({});
      setIsLoggedIn(false);
      localStorage.removeItem('token');
      localStorage.clear();
      navigate('/');
    };

    function handleRegister(data) {
      auth.register(data)
        .then((res) => {
          setCurrentUser(res);
          navigate('/SignIn');
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(console.log('in register must be a tooltip'));
    };

    function handleLogin(data) {
      auth.authorization(data)
        .then((res) => {
          if (res.token) { 
            localStorage.setItem('token', res.token);
            setCurrentUser(res);
            setIsLoggedIn(true);
            navigate('/account');
            console.log(res);
          }   
        })
        .catch((err) => {
          console.log(err);
          console.log("maybe loggenIn is false or token is not exist");
        })
        .finally(console.log('in login must be a tooltip'));
    };

    function handleUpdateUser(values) {
      api.editProfileData(values)
        .then((newProfileData) => {
          setCurrentUser(newProfileData);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
          console.log(values);
          console.log('finally in update profile');
        })
    };

    function handleUpdateAvatar(avatarFile) {
      const formData = new FormData();
      formData.append('avatar', avatarFile);

      api.patchAvatar(formData)
        .then((newAvatar) => {
          setCurrentUser(newAvatar);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
          closeAllPopups();
        })
    };

    /*function handleUpdateAvatar(data) {
      api.patchAvatar(data)
        .then((newAvatar) => {
          setCurrentUser(newAvatar);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
          closeAllPopups();
        })
    };*/

    function handleUserPhotoClick() {
      console.log('click on user photo');
      setUserPhoto(true);
    };

    useEffect(() => {
      function closeEscape(evt) {
        if (evt.key === 'Escape') {
          closeAllPopups();
        }
      }
      if (isOpen) {
        document.addEventListener('keydown', closeEscape);
        return () => {
          document.removeEventListener('keydown', closeEscape);
        };
      }
    }, [isOpen]);

    useEffect(() => {
      function closeClickMouse(evt) {
        if (evt.target.classList.contains('popup_active')) {
          closeAllPopups();
        }
      }
      if (isOpen) {
        document.addEventListener('mousedown', closeClickMouse);
        return () => {
          document.removeEventListener('mousedown', closeClickMouse);
        };
      }
    }, [isOpen]);

    function handleEditAvatarClick() {
      console.log('click on photo to change it');
      setIsEditAvatarPopupOpen(true);
    };

    function closeAllPopups() {
      setIsEditAvatarPopupOpen(false);
      setUserPhoto(false);
      console.log('close popup');
    };

    return (
      <CurrentUserContext.Provider value={currentUser}>            
        <Header
          isLoggedIn={isLoggedIn}
          handleOpenMenu={handleOpenMenu}
          onSignOut={handleSignOut}
          userId={userId}
        />

        <NavigationSidebar 
          isLoggedIn={isLoggedIn}
          sidebar={sidebar}
          handleOpenMenu={handleOpenMenu}
          onSignOut={handleSignOut}
          userId={userId}
        />

        <Routes>
          <Route path="/" exact element={
            <Main
              isLoggedIn={isLoggedIn}
            />
          }/>

          <Route path="/SignIn"
            element={<Login onLogin={handleLogin} />}
          />                    

          <Route path="/SignUp"
            element={<Register onRegister={handleRegister} />}
          />                    

          <Route path="/*" element={
            <NotFound />
          } />
          <Route path="/account" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Account
                onEditAvatar={handleEditAvatarClick}
                onUpdateUser={handleUpdateUser} 
              />
            </ProtectedRoute>  
          }/>
          <Route path="/portfolio/:userId" element={
            <Portfolio 
              isLoggedIn={isLoggedIn}
              onUserPhoto={handleUserPhotoClick}
              setUserId={setUserId}
            />
          }/>
          <Route path="/news/:userId" element={
            <News 
              isLoggedIn={isLoggedIn}
              onUserPhoto={handleUserPhotoClick}
              setUserId={setUserId}
            />
          }/>
        </Routes>

        <Footer />

        <ImagePopup 
          isOpen={userPhoto}
          onClose={closeAllPopups}
          userId={userId}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} 
        />
      </CurrentUserContext.Provider>
    );
}

export default App;
