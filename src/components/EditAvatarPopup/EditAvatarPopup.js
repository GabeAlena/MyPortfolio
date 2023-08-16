import React from 'react';

function PopupWithForm(props) {
    function handleSubmit(e) {
        //reset the standart form sending 
        e.preventDefault();
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
                        <label 
                            className="popup__label" 
                            id="avatar-label"
                            htmlFor="avatar-input"
                        >+</label>
                        <input
                            className="popup__input popup__input_avatar"
                            required
                            type="file"
                            id="avatar-input"
                            placeholder="link on avatar" 
                            name="avatar"
                            accept="image/*"
                        />
                        <span className="avatar-input-error popup__input-error">You need to choose a photo before update it!</span>
                    </fieldset>
                    <button type="submit" className="popup__button">Update</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;