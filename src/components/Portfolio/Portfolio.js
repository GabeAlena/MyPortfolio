import NotFound from "../NotFound/NotFound";
import profilePhoto from "../../images/cat in clothes.jpeg"

/* Need to change the condition after the registration part cause like this - it's not ok*/
function Portfolio({ isLoggenIn }) {
    return (
        <section className="account">
            {  isLoggenIn ?
                <NotFound />
            :
                <div className="account__logined-users">
                    <div className="account__photo-items">
                        <img className="account__photo" src={profilePhoto} alt="it's could be photo of this guy"></img>
                        <div className="portfolio__items">
                            <ul className="portfolio__infoes">
                                <li className="portfolio__info"><span className="portfolio__info-span">First name:</span>Aleksandr</li>
                                <li className="portfolio__info"><span className="portfolio__info-span">Family name:</span>Bazhukov</li>
                                <li className="portfolio__info"><span className="portfolio__info-span">Date of birth:</span>23 June 1993</li>
                                <li className="portfolio__info"><span className="portfolio__info-span">Country:</span>Russia</li>
                                <li className="portfolio__info"><span className="portfolio__info-span">Occupation:</span>Engineer</li>
                                <li className="portfolio__info"><span className="portfolio__info-span">Phone number:</span>+79876543210</li>
                            </ul>
                            <p className="portfolio__welcoming">
                                Hi! Welcome to my page. My name is 'Aleksandr Bazhukov'. Here you can read info about me:
                            </p>
                            <ul className="portfolio__categories">
                                <li className="portfolio__category">life,</li>
                                <li className="portfolio__category">education,</li>
                                <li className="portfolio__category">career,</li>
                                <li className="portfolio__category">competences,</li>
                                <li className="portfolio__category">hobbies,</li>
                                <li className="portfolio__category">news.</li>
                            </ul>
                            <p className="portfolio__note">Or just scroll down &#8595;</p>
                        </div>
                    </div>
                <form className="account__forms">
                    <div className="account__section">
                        <label className="account__label">Life:</label>
                        <textarea 
                            className="account__section_input"
                            required
                            id="life-account-section-input"
                            name="life" 
                            type="text"
                            minLength="2"
                            maxLength="400"
                            //value={""}
                            placeholder="Where you were born? Marriage? Kids? Your life in several sentences. 
                            When your text will be written, please click *checkmark*. Also you can click *delete* 
                            and remove all what you have written here, but I hope it's unnecessary.
                            If you want to write more, please click *plus* ->"
                        />
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button type="button" aria-label="redact data" className="account__redact-btn"></button>
                                <button type="submit" aria-label="accept data" className="account__accept-btn"></button>
                            </div>
                            <button type="reset" aria-label="delete data" className="account__delete-btn"></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>     
                </form>

                <form className="account__forms">
                    <div className="account__section">
                        <label className="account__label">Education:</label>
                        <textarea 
                            className="account__section_input"
                            required
                            id="education-account-section-input"
                            name="education" 
                            type="text"
                            minLength="2"
                            maxLength="400"
                            //value={""}
                            placeholder="University? Faculty? Degrees? An additional education?
                            If you want to write more, please click *plus* ->"
                        />
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button type="button" aria-label="redact data" className="account__redact-btn"></button>
                                <button type="submit" aria-label="accept data" className="account__accept-btn"></button>
                            </div>
                            <button type="reset" aria-label="delete data" className="account__delete-btn"></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>   
                </form>

                <form className="account__forms">
                    <div className="account__section">
                        <label className="account__label">Career:</label>
                        <textarea 
                            className="account__section_input"
                            required
                            id="career-account-section-input"
                            name="career" 
                            type="text"
                            minLength="2"
                            maxLength="400"
                            //value={""}
                            placeholder="Please describe places of your past jobs and your duties.
                            You can use one block for one work.
                            If you want to write more, please click *plus* ->"
                        />
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button type="button" aria-label="redact data" className="account__redact-btn"></button>
                                <button type="submit" aria-label="accept data" className="account__accept-btn"></button>
                            </div>
                            <button type="reset" aria-label="delete data" className="account__delete-btn"></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>      
                </form>

                <form className="account__forms">
                    <div className="account__section">
                        <label className="account__label">Competences:</label>
                        <textarea 
                            className="account__section_input"
                            required
                            id="competences-account-section-input"
                            name="competences" 
                            type="text"
                            minLength="2"
                            maxLength="400"
                            //value={""}
                            placeholder="Please describe uour skills. Which computer programs can you operate?
                            What programming languages do you know? Foreign languages?
                            If you want to write more, please click *plus* ->"
                        />
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button type="button" aria-label="redact data" className="account__redact-btn"></button>
                                <button type="submit" aria-label="accept data" className="account__accept-btn"></button>
                            </div>
                            <button type="reset" aria-label="delete data" className="account__delete-btn"></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>      
                </form>

                <form className="account__forms">
                    <div className="account__section">
                        <label className="account__label">Hobbies:</label>
                        <textarea 
                            className="account__section_input"
                            required
                            id="hobbies-account-section-input"
                            name="hobbies" 
                            type="text"
                            minLength="2"
                            maxLength="400"
                            //value={""}
                            placeholder="What do you like to do in your spare time? For example:
                            computer games, programming, painting, cooking, sewing and etc.
                            If you want to write more, please click *plus* ->"
                        />
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button type="button" aria-label="redact data" className="account__redact-btn"></button>
                                <button type="submit" aria-label="accept data" className="account__accept-btn"></button>
                            </div>
                            <button type="reset" aria-label="delete data" className="account__delete-btn"></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>        
                </form>

                <form className="account__forms">
                    <div className="account__section">
                        <label className="account__label">News:</label>
                        <textarea 
                            className="account__section_input"
                            required
                            id="news-account-section-input"
                            name="news"
                            type="text"
                            minLength="2"
                            maxLength="400"
                            //value={""}
                            placeholder="Here you can add any interesting news in your field of interests.
                            For example: new invention, program and etc.
                            If you want to write more, please click *plus* ->"
                        />
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button type="button" aria-label="redact data" className="account__redact-btn"></button>
                                <button type="submit" aria-label="accept data" className="account__accept-btn"></button>
                            </div>
                            <button type="reset" aria-label="delete data" className="account__delete-btn"></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>     
                </form>
                </div>    
            }
        </section> 
    )
}

export default Portfolio;