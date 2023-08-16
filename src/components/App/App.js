import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
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

function App() {
    const [sidebar, setSidebar] = useState(false);
    const [userPhoto, setUserPhoto] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    const isOpen = isEditAvatarPopupOpen || userPhoto;

    const handleOpenMenu = () => {
        setSidebar(!sidebar);
    }

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
        <div className="app">
            <Header 
                handleOpenMenu={handleOpenMenu}
            />

            <NavigationSidebar 
                sidebar={sidebar}
                handleOpenMenu={handleOpenMenu}
            />

            <Routes>
                <Route path="/" exact element={
                  <Main />
                }/>
                <Route path="/SignIn" element={
                  <Login />
                }/>
                <Route path="/SignUp" element={
                  <Register />
                }/>
                <Route path="/*" element={
                  <NotFound />
                } />
                <Route path="/account" element={
                  <Account 
                    onEditAvatar={handleEditAvatarClick}
                  />
                }/>
                <Route path="/portfolio" element={
                  <Portfolio 
                    onUserPhoto={handleUserPhotoClick}
                  />
                }/>
                <Route path="/news" element={
                  <News 
                    onUserPhoto={handleUserPhotoClick}
                  />
                }/>
            </Routes>

            <Footer />

            <ImagePopup 
              isOpen={userPhoto}
              onClose={closeAllPopups}
            />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups} 
            />
        </div>  
    );
}

export default App;
