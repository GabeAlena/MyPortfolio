import React from 'react';
import instagram from '../../images/instagram.png';
import github from '../../images/github.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__sign">&#169; 2023 by Alena Bazhukova</div>
            <div className="footer__links">
                <a href="https://instagram.com/alena_bazhukova" target="blank" className="footer__link">
                    <img className="footer__link-img" src={instagram} alt="instagram link"></img>
                    <p>Instagram</p>
                </a>
                <a href="https://github.com/GabeAlena" target="blank" className="footer__link">
                    <img className="footer__link-img" src={github} alt="github link"></img>
                    <p>GitHub</p>
                </a>
            </div>
        </footer>
    )
}

export default Footer;