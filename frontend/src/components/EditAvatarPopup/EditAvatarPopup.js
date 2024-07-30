import React from 'react';
import { useRef, useEffect/*, useState*/ } from 'react';

function EditAvatarPopup(props) {
    const avatarRef = useRef();
    const fileChosenRef = useRef(null);

    const handleFileChange = (event) => {
        const fileName = event.target.files[0]?.name || 'No file chosen';
        fileChosenRef.current.textContent = fileName;
        if (fileName !== 'No file chosen') {
            fileChosenRef.current.style.color = 'green';
        } else {
            fileChosenRef.current.style.color = 'red';
        }
    };

    useEffect(() => {
        if (props.isOpen) {
            avatarRef.current.value = '';
        }
    }, [props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();

        const fileInput = avatarRef.current.files[0];
        console.log(fileInput);

        props.onUpdateAvatar(fileInput);
    };

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
                            type="file"
                            id="avatar-input"
                            placeholder="Avatar link" 
                            name="avatar"
                            ref={avatarRef}
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="avatar-input" className="popup__custom-file-upload">
                            Select File
                        </label>
                        <span id="file-chosen" ref={fileChosenRef} className='popup__file-chosen'>No file chosen</span>
                        <span className="avatar-input-error popup__input-error"></span>
                    </fieldset>
                    <button type="submit" className="popup__button">Update</button>
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