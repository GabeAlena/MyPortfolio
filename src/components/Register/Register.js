import { Link } from 'react-router-dom';
import noteBulb from '../../images/bulb.jpeg';
import registerPicture from '../../images/cat register without eye.png';

function Register() {
    function handleSubmit(e) {
        //reset the standart form sending 
        e.preventDefault();
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
                    <img src={registerPicture} alt="it might be a cat" className="register__picture" />
                    <form className="register__form" onSubmit={handleSubmit}>
                        <input 
                            className="register__input"
                            required
                            placeholder="first name"
                            id="first-name-register-input" 
                            name="first-name" 
                            type="text"
                            minLength="2"
                            maxLength="40"
                            //value={''}
                        />
                        <span className="register__error">{''}</span>
                        <input 
                            className="register__input"
                            required
                            placeholder="family name"
                            id="family-name-register-input" 
                            name="family-name" 
                            type="text"
                            minLength="2"
                            maxLength="40"
                            //value={''}
                        />
                        <span className="register__error">{''}</span>
                        <input 
                            className="register__input"
                            required
                            placeholder="example@gmail.com"
                            id="email-register-input" 
                            name="email" 
                            type="email"
                            minLength="2"
                            maxLength="40"
                            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
                            //value={''}
                        />
                        <span className="register__error">{''}</span>
                        <input
                            className="register__input"
                            required
                            placeholder="password"
                            id="password-first-register-input" 
                            name="password first" 
                            type="password"
                            minLength="2"
                            maxLength="40"
                            //value={''}
                        />
                        <span className="register__error">{''}</span>
                        <input
                            className="register__input"
                            required
                            placeholder="password"
                            id="password-second-register-input" 
                            name="password second" 
                            type="password"
                            minLength="2"
                            maxLength="40"
                            //value={''}
                        />
                        <span className="register__error">{''}</span>
                
                        <button type="submit" className="register__button">Sign Up</button>
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