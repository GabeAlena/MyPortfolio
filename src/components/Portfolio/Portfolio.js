import profilePhoto from "../../images/cat in clothes.jpeg"

/* Need to change the condition after the registration part cause like this - it's not ok*/
function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__photo-info">
                <img className="portfolio__photo" src={profilePhoto} alt="it's could be photo of this guy"></img>
                <div className="portfolio__items">
                    <ul className="portfolio__main-info">
                        <li className="portfolio__info"><strong>First name: </strong>Aleksandr</li>
                        <li className="portfolio__info"><strong>Family name: </strong>Bazhukov</li>
                        <li className="portfolio__info"><strong>Date of birth: </strong>23 June 1993</li>
                        <li className="portfolio__info"><strong>Country: </strong>Russia</li>
                        <li className="portfolio__info"><strong>Occupation: </strong>Engineer</li>
                        <li className="portfolio__info"><strong>Phone number: </strong>+79876543210</li>
                    </ul>
                    <p className="portfolio__welcoming">
                        Hi! Welcome to my page. My name is 'Aleksandr Bazhukov'. Here you can read info about me:
                    </p>
                    <ul className="portfolio__categories">
                        <li className="portfolio__category"><a href="#life">life,</a></li>
                        <li className="portfolio__category"><a href="#education">education,</a></li>
                        <li className="portfolio__category">career,</li>
                        <li className="portfolio__category">competences,</li>
                        <li className="portfolio__category">hobbies,</li>
                        <li className="portfolio__category">news.</li>
                    </ul>
                    <p className="portfolio__note">Or just scroll down &#8595;</p>
                </div>
            </div>
            <div className="portfolio__sections">
                <div className="portfolio__section" id="life">
                    <h3 className="portfolio__label">Life:</h3>
                    <div className="portfolio__section_data"></div>
                </div>  
                <div className="portfolio__section" id="education">
                    <h3 className="portfolio__label">Education:</h3>
                    <div className="portfolio__section_data"></div>
                </div>  
            </div>
        </section> 
    )
}

export default Portfolio;