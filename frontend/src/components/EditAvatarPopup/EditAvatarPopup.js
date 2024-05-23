import React from 'react';
import { useRef, useEffect, useState } from 'react';

function EditAvatarPopup(props) {
    const avatarRef = useRef();
    const [avatarPath, setAvatarPath] = useState('');

    //console.log(avatarPath);
    useEffect(() => {
        if (props.isOpen) {
            avatarRef.current.value = '';
            setAvatarPath('');
        }
    }, [props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            //avatar: avatarRef.current.value
            avatar: avatarPath
        });
    };

    function loadFile(event) {
        const reader = new FileReader();
        /*const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setAvatarPath(e.target.result);
            }
            reader.readAsDataURL(file);
        }*/
        reader.onload = function() {
            setAvatarPath(reader.result); // Сохраняем base64 в состояние
            const output = document.getElementById('output');
            const url = URL.createObjectURL(event.target.files[0]); // Создаем URL из данных файла
            output.src = url; // Устанавливаем URL как src изображения
            //console.log(url);
        }
        reader.readAsDataURL(event.target.files[0]);
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
                            type="file"
                            id="avatar-input"
                            placeholder="Avatar link" 
                            name="avatar"
                            ref={avatarRef}
                            accept="image/*"
                            onChange={loadFile}
                        />
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