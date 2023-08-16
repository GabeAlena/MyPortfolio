import React from 'react';
import { useLocation } from "react-router-dom";
import portfolioPhoto from "../../images/alex.jpeg";
import newsPhoto from "../../images/alex-news.JPG";

function ImagePopup(props) {
    const location = useLocation();

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
                 src={location.pathname === '/portfolio' ? portfolioPhoto : newsPhoto} 
                 alt="Big user" 
              />
              <h2 className="popup__title-modal">Yes, it's my big photo.</h2>
            </div>
        </div>
    )
}

export default ImagePopup;