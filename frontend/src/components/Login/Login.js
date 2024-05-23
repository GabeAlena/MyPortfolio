import { Link } from 'react-router-dom';
import { ValidationForm } from '../../utils/validationForm';
import loginPicture from '../../images/cat login without face.png';
import noteBulb from '../../images/bulb.jpeg';

function Login({ onLogin }) {
    const { values, handleChange, errors, isValid } = ValidationForm();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values);
    }

    return (
        <div className="login-page">
            <div className="login-page__note">
                <img src={noteBulb} alt="bulb" className="login-page__note-sign"></img>
                <p className="login-page__note-text">If you want to return on the main page, please click logo "MY.PORTFOLIO"!</p>
            </div>
            <div className="login">
                <h1 className="login__signin">Authorization</h1>
                <div className="login__form-picture">
                    <form className="login__form" onSubmit={handleSubmit}>
                        <input 
                            className={`login__input ${errors.email ? 'login__input_error' : ''}`}
                            required
                            id="email-login-input" 
                            name="email" 
                            type="email"
                            minLength="2"
                            maxLength="40"
                            //pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
                            value={values.email || ''}                    
                            placeholder="example@gmail.com"  
                            onChange={handleChange}         
                        />
                        <span className="login__error">{errors.email || ''}</span>        
                        <input
                            className={`login__input ${errors.password ? 'login__input_error' : ''}`}
                            required
                            id="password-login-input" 
                            name="password" 
                            type="password"
                            minLength="5"
                            maxLength="10"
                            value={values.password || ''} 
                            placeholder="password"
                            onChange={handleChange}
                        />
                        <span className="login__error">{errors.password || ''}</span>                
                
                        <button type="submit" className={`login__button ${!isValid ? 'login__button_disabled' : ''}`}>Enter</button>
                        <div className="register__in">
                            <p>Haven't registered yet?</p>
                            <Link to="/SignUp" className="login__register-link">Click here!</Link>
                        </div>
                    </form>
                    <img src={loginPicture} alt="it might be a cat" className="login__picture" />
                </div>
            </div>
        </div>
    )
} 

export default Login;