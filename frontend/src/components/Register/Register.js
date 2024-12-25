import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ValidationForm } from '../../utils/validationForm';
import noteBulb from '../../images/bulb.jpeg';
/*import registerPicture from '../../images/cat register without eye.png';*/
/*import registerPicture from '../../images/worm-register2.png';*/

function Register({ onRegister }) {
    const { values, handleChange, errors, isValid } = ValidationForm();

    function handleSubmit(e) {
        e.preventDefault();
        if (values.password === values.confirmPassword) {
            onRegister(values);
        } else {
            console.log('password are not the same');
        }
    }

    return ( 
        <div className="register-page">
            <div className="register-page__note">
                <img src={noteBulb} alt="bulb" className="register-page__note-sign"></img>
                <p className="register-page__note-text">If you want to return on the main page, please click logo "MY.PORTFOLIO"!</p>
            </div>
            <div className="register">
                <h1 className="register__signup">Register</h1>
                <div className="register__form-picture">
                    <img className="register__picture" />
                    <form className="register__form" onSubmit={handleSubmit}>
                        <input 
                            className={`register__input ${errors.firstName ? 'register__input_error' : ''}`}
                            required
                            placeholder="first name"
                            id="first-name-register-input" 
                            name="firstName" 
                            type="text"
                            minLength="2"
                            maxLength="40"
                            value={values.firstName || ''}
                            onChange={handleChange}
                        />
                        <span className="register__error">{errors.firstName || ''}</span>
                        <input 
                            className={`register__input ${errors.secondName ? 'register__input_error' : ''}`}
                            required
                            placeholder="family name"
                            id="family-name-register-input" 
                            name="familyName" 
                            type="text"
                            minLength="2"
                            maxLength="40"
                            value={values.secondName}
                            onChange={handleChange}
                        />
                        <span className="register__error">{errors.secondName || ''}</span>
                        <input 
                            className={`register__input ${errors.email ? 'register__input_error' : ''}`}
                            required
                            placeholder="example@gmail.com"
                            id="email-register-input" 
                            name="email" 
                            type="email"
                            minLength="2"
                            maxLength="40"
                            //pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
                            value={values.email || ''}
                            onChange={handleChange}
                        />
                        <span className="register__error">{errors.email || ''}</span>
                        <input
                            className={`register__input ${errors.password ? 'register__input_error' : ''}`}
                            required
                            placeholder="password"
                            id="password-first-register-input" 
                            name="password" 
                            type="password"
                            minLength="5"
                            maxLength="10"
                            value={values.password || ''}
                            onChange={handleChange}
                        />
                        <span className="register__error">{errors.password || ''}</span>
                        <input
                            className={`register__input ${errors.confirmPassword ? 'register__input_error' : ''}`}
                            required
                            placeholder="password"
                            id="password-second-register-input" 
                            name="confirmPassword" 
                            type="password"
                            minLength="5"
                            maxLength="10"
                            value={values.confirmPassword || ''}
                            onChange={handleChange}
                        />
                        <span className="register__error">{errors.confirmPassword || ''}</span>
                
                        <button type="submit" className={`register__button ${!isValid ? 'register__button_disabled' : ''}`}>Sign Up</button>
                        <div className="login__in">
                            <p>Already registered?</p>
                            <Link to="/SignIn" className="register__login-link">Click here!</Link>
                        </div>
                    </form>
                </div>
            </div>    
        </div>
    )
}

export default Register;