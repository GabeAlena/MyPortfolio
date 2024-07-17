import { React, useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import profilePhoto from "../../images/cat in clothes.jpeg"
import { api } from "../../utils/api";

function ImagePopup(props) {
    const currentUser = useContext(CurrentUserContext);
    const [userProfile, setUserProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (props.userId && (!currentUser || currentUser._id !== props.userId)) {
                try {
                    const userData = await api.getUserById(props.userId);
                    setUserProfile(userData);
                } catch(error) {
                    console.error('Error fetching user profile:', error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        };    

        fetchUserProfile();
    }, [props.userId, currentUser]);

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
                 src={currentUser?.avatar || userProfile?.avatar || profilePhoto}
                 alt="Big user" 
              />
              <h2 className="popup__title-modal">This is my big photo.</h2>
            </div>
        </div>
    )
}

export default ImagePopup;