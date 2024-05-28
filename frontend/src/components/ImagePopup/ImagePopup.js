import React from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import profilePhoto from "../../images/cat in clothes.jpeg"

function ImagePopup(props) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <div className={`popup popup_modal ${props.isOpen && 'popup_active'}`}>
            <div className="popup__modalWindow">
              <button 
                  className="popup__close-btn" 
                  type="button" 
                  aria-label="закрыть модальное окно" 
                  onClick={props.onClose}
              >
              </button>
              <img 
                 className="popup__image-modal" 
                 src={currentUser.avatar || profilePhoto}
                 alt="Big user" 
              />
              <h2 className="popup__title-modal">Yes, it's my big photo.</h2>
            </div>
        </div>
    )
}

export default ImagePopup;