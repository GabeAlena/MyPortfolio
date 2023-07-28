/*import profilePhoto from "../../images/cat in clothes.jpeg";*/
import portfolioPhoto from "../../images/alex.jpeg";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import instagram from '../../images/instagram.png';
import telegram from '../../images/telegram.jpeg';

/* Need to change the condition after the registration part cause like this - it's not ok*/
function Portfolio(props) {
    const location = useLocation();

    return (
        <section className="portfolio">
            <div className="portfolio__page">
                <Link to="/portfolio" className={`portfolio__page-about ${location.pathname === '/portfolio' ? 'portfolio__page-about_checked' : ''}`}>About Me</Link>
                <div className="portfolio__page-slash">/</div>
                <Link to="/news" className={`portfolio__page-news ${location.pathname === '/news' ? 'portfolio__page-news_checked' : ''}`}> News</Link>
            </div>
            <div className="portfolio__photo-info">
                <div className="portfolio__laptop">
                    <img className="portfolio__photo" src={portfolioPhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                    <div className="portfolio__items">
                        <ul className="portfolio__main-info">
                            <li className="portfolio__info"><strong>First name: </strong>Aleksandr</li>
                            <li className="portfolio__info"><strong>Family name: </strong>Bazhukov</li>
                            <li className="portfolio__info"><strong>Date of birth: </strong>23 June 1993</li>
                            <li className="portfolio__info"><strong>Country: </strong>Russia</li>
                            <li className="portfolio__info"><strong>Occupation: </strong>Engineer</li>
                            <li className="portfolio__info"><strong>Mob: </strong>+79876543210</li>
                            <li className="portfolio__info"><strong>Social media: </strong>
                                <a href="https://instagram.com/aleksandr_bazhukov_" target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                                <a href="https://t.me/aleksandr_bazhukov" target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </li>
                        </ul>
                        <p className="portfolio__welcoming">
                            Hi! Welcome to my page. My name is 'Aleksandr Bazhukov'. Here you can read info about me:
                        </p>
                        <ul className="portfolio__categories">
                            <li className="portfolio__category"><HashLink to="#life">life,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#education">education,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#career">career,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#competences">competences,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#hobbies">hobbies.</HashLink></li>
                        </ul>
                        <p className="portfolio__note">Or just scroll down &#8595;</p>
                    </div>
                    </div>
                <div className="portfolio__tablet">
                    <div className="portfolio__items portfolio__items_tablet">
                        <p className="portfolio__welcoming">
                            Hi! Welcome to my page. My name is 'Aleksandr Bazhukov'. Here you can read info about me:
                        </p>
                        <ul className="portfolio__categories">
                            <li className="portfolio__category"><HashLink to="#life">life,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#education">education,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#career">career,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#competences">competences,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#hobbies">hobbies.</HashLink></li>
                        </ul>
                        <p className="portfolio__note">Or just scroll down &#8595;</p>
                    </div>
                    <div className="portfolio__items">
                        <ul className="portfolio__main-info">
                            <li className="portfolio__info"><strong>First name: </strong>Aleksandr</li>
                            <li className="portfolio__info"><strong>Family name: </strong>Bazhukov</li>
                            <li className="portfolio__info"><strong>Date of birth: </strong>23 June 1993</li>
                            <li className="portfolio__info"><strong>Country: </strong>Russia</li>
                            <li className="portfolio__info"><strong>Occupation: </strong>Engineer</li>
                            <li className="portfolio__info"><strong>Mob: </strong>+79876543210</li>
                            <li className="portfolio__info"><strong>Social media: </strong>
                                <a href="https://instagram.com/aleksandr_bazhukov_" target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                                <a href="https://t.me/aleksandr_bazhukov" target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </li>
                        </ul>
                        <img className="portfolio__photo" src={portfolioPhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                    </div>
                </div>
                <div className="portfolio__small-screen">
                    <div className="portfolio__items">
                        <img className="portfolio__photo" src={portfolioPhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                        <ul className="portfolio__main-info">
                            <li className="portfolio__info"><strong>First name: </strong>Aleksandr</li>
                            <li className="portfolio__info"><strong>Family name: </strong>Bazhukov</li>
                            <li className="portfolio__info"><strong>Date of birth: </strong>23 June 1993</li>
                            <li className="portfolio__info"><strong>Country: </strong>Russia</li>
                            <li className="portfolio__info"><strong>Occupation: </strong>Engineer</li>
                            <li className="portfolio__info"><strong>Mob: </strong>+79876543210</li>
                            <li className="portfolio__info"><strong>Social media: </strong>
                                <a href="https://instagram.com/aleksandr_bazhukov_" target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                                <a href="https://t.me/aleksandr_bazhukov" target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__items portfolio__items_small-screen">
                        <p className="portfolio__welcoming">
                            Hi! Welcome to my page. My name is 'Aleksandr Bazhukov'. Here you can read info about me:
                        </p>
                        <ul className="portfolio__categories">
                            <li className="portfolio__category"><HashLink to="#life">life,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#education">education,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#career">career,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#competences">competences,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#hobbies">hobbies.</HashLink></li>
                        </ul>
                        <p className="portfolio__note">Or just scroll down &#8595;</p>
                    </div>
                </div>
            </div>
            <div className="portfolio__sections">
                <div className="portfolio__section" id="life">
                    <h3 className="portfolio__label">Life:</h3>
                    <div className="portfolio__section_data">
                        I was born in Russia in the Perm region. And now I live in Perm.
                        Married. Love animals. 
                    
                    </div>
                </div>  
                <div className="portfolio__section" id="education">
                    <h3 className="portfolio__label">Education:</h3>
                    <div className="portfolio__section_data">
                        I graduated from the Aerospace Faculty of the Perm National Reserch
                        Polytechnic University (PNRPU) and got the Diploma of Specialist. 
                        My specialty was rocket and space technology. I was a postgraduate for
                        three years, but I never graduated.
                    </div>
                </div>
                <div className="portfolio__section" id="career">
                    <h3 className="portfolio__label">Career:</h3>
                    <div className="portfolio__section_data">
                        Here might be my career, sorry...
                    </div>
                </div>
                <div className="portfolio__section" id="competences">
                    <h3 className="portfolio__label">Competences:</h3>
                    <div className="portfolio__section_data">
                        MS Office, ANSYS, Python...
                    </div>
                </div>
                <div className="portfolio__section" id="hobbies">
                    <h3 className="portfolio__label">Hobbies:</h3>
                    <div className="portfolio__section_data">
                        I love playing video games in my spare time.
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Portfolio;