/*import profilePhoto from "../../images/cat in clothes.jpeg";*/
import portfolioPhoto from "../../images/alex.jpeg";
import { HashLink } from "react-router-hash-link";

/* Need to change the condition after the registration part cause like this - it's not ok*/
function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__photo-info">
                <div className="portfolio__laptop">
                    <img className="portfolio__photo" src={portfolioPhoto} alt="it's could be this guy"></img>
                    <div className="portfolio__items">
                        <ul className="portfolio__main-info">
                            <li className="portfolio__info"><strong>First name: </strong>Aleksandr</li>
                            <li className="portfolio__info"><strong>Family name: </strong>Bazhukov</li>
                            <li className="portfolio__info"><strong>Date of birth: </strong>23 June 1993</li>
                            <li className="portfolio__info"><strong>Country: </strong>Russia</li>
                            <li className="portfolio__info"><strong>Occupation: </strong>Engineer</li>
                            <li className="portfolio__info"><strong>Mob: </strong>+79876543210</li>
                        </ul>
                        <p className="portfolio__welcoming">
                            Hi! Welcome to my page. My name is 'Aleksandr Bazhukov'. Here you can read info about me:
                        </p>
                        <ul className="portfolio__categories">
                            <li className="portfolio__category"><HashLink to="#life">life,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#education">education,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#career">career,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#competences">competences,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#hobbies">hobbies,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#news">news.</HashLink></li>
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
                            <li className="portfolio__category"><HashLink to="#hobbies">hobbies,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#news">news.</HashLink></li>
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
                        </ul>
                        <img className="portfolio__photo" src={portfolioPhoto} alt="it's could be this guy"></img>
                    </div>
                </div>
                <div className="portfolio__small-screen">
                    <div className="portfolio__items">
                        <img className="portfolio__photo" src={portfolioPhoto} alt="it's could be this guy"></img>
                        <ul className="portfolio__main-info">
                            <li className="portfolio__info"><strong>First name: </strong>Aleksandr</li>
                            <li className="portfolio__info"><strong>Family name: </strong>Bazhukov</li>
                            <li className="portfolio__info"><strong>Date of birth: </strong>23 June 1993</li>
                            <li className="portfolio__info"><strong>Country: </strong>Russia</li>
                            <li className="portfolio__info"><strong>Occupation: </strong>Engineer</li>
                            <li className="portfolio__info"><strong>Mob: </strong>+79876543210</li>
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
                            <li className="portfolio__category"><HashLink to="#hobbies">hobbies,</HashLink></li>
                            <li className="portfolio__category"><HashLink to="#news">news.</HashLink></li>
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
                <div className="portfolio__section" id="news">
                    <h3 className="portfolio__label">News:</h3>
                    <div className="portfolio__section_data">
                        Nothing interesting.
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Portfolio;