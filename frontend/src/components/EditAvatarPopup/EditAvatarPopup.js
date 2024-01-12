import React from 'react';
import { useRef, useEffect } from 'react';

function EditAvatarPopup(props) {
    const avatarRef = useRef();

    useEffect(() => {
        if (props.isOpen) {
            avatarRef.current.value = '';
        }
    }, [props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return(
        <div className={`popup popup_avatar ${props.isOpen ? 'popup_active' : ''}`}>
            <div className="popup__container">
                <button 
                    className="popup__close-btn" 
                    type="button" 
                    aria-label="close popup" 
                    onClick={props.onClose}
                >
                </button>
                <form
                    className="popup__form" 
                    name="change photo"
                    onSubmit={handleSubmit}
                >
                    <h2 className="popup__title">Choose a profile picture:</h2>
                    <fieldset className="popup__info">
                        <input
                            className="popup__input popup__input_type_avatar"
                            required
                            type="url"
                            id="avatar-input"
                            placeholder="Avatar link" 
                            name="avatar"
                            ref={avatarRef}
                        />
                        <span className="avatar-input-error popup__input-error"></span>
                    </fieldset>
                    <button type="submit" onSubmit={handleSubmit} className="popup__button">Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditAvatarPopup;



                    /*<fieldset className="popup__info">
                        <label 
                            className="popup__label" 
                            id="avatar-label"
                            htmlFor="avatar-input"
                        >+</label>
                        <input
                            className="popup__input popup__input_avatar"
                            required
                                type="file"
                                size="5 MB"
                                id="avatar-input"
                                placeholder="link on avatar" 
                                name="avatar"
                                accept="image/*"
                                ref={avatarRef}
                            />
                        <div id="preview"></div>    
                        <span className="avatar-input-error popup__input-error">You need to choose a photo before update it!</span>
                    </fieldset>*/