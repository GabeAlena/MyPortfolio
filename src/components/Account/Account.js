import NotFound from "../NotFound/NotFound";
import profilePhoto from "../../images/cat in clothes.jpeg"
import noPhoto from "../../images/no photo.jpeg";
import editPicture from "../../images/cat-stretching.jpeg";
import editPictureTurned from "../../images/cat-stretching-turned.jpeg";

/* Need to change the condition after the registration part cause like this - it's not ok*/
function Account({ isLoggenIn }) {
    function handleSubmit(e) {
        //reset the standart form sending 
        e.preventDefault();
    }

    return (
        <section className="account">
            {  isLoggenIn ?
                <NotFound />
            :
                <div className="account__logined-users">
                    <div className="account__photo-items">
                        <div className="account__photos">
                            <img className="account__photo" src={profilePhoto} alt="it's could be me"></img>
                            <div className="account__photo-text_under">
                                <img className="account__photo_under" src={noPhoto} alt="no"></img>
                                <div className="account__photo_text">Click here to change the photo!</div>
                            </div>
                        </div>
                        <form className="account__form" onSubmit={handleSubmit}>
                            <div className="account__items">
                                <label className="account__label">First name:</label>
                                <input 
                                    className="account__input"
                                    required
                                    id="first-name-account-input"
                                    name="first-name" 
                                    type="text"
                                    minLength="2"
                                    maxLength="18"
                                    //value={""}
                                    placeholder="e.g.: Aleksandr"
                                />
                                <span className="account__error">{'error'}</span>
                                <label className="account__label">Family name:</label>
                                <input 
                                    className="account__input"
                                    required
                                    id="family-name-account-input" 
                                    name="family-name" 
                                    type="text"
                                    minLength="2"
                                    maxLength="18"
                                    //value={""}
                                    placeholder="e.g.: Bazhukov"
                                />
                                <span className="account__error">{''}</span>
                                <label className="account__label">Date of birth:</label>
                                <input 
                                    className="account__input"
                                    required
                                    id="date-of-birth-account-input" 
                                    name="date-of-birth" 
                                    type="text"
                                    minLength="2"
                                    maxLength="20"
                                    //value={""}
                                    placeholder="e.g.: 23 June 1993"
                                />
                                <span className="account__error">{''}</span>
                                <label className="account__label">Country:</label>
                                <input 
                                    className="account__input"
                                    required
                                    id="country-account-input" 
                                    name="country" 
                                    type="text"
                                    minLength="2"
                                    maxLength="18"
                                    //value={""}
                                    placeholder="e.g.: Russia"
                                />
                                <span className="account__error">{''}</span>
                                <label className="account__label">Occupation:</label>
                                <input 
                                    className="account__input"
                                    required
                                    id="occupation-account-input" 
                                    name="occupation" 
                                    type="text"
                                    minLength="2"
                                    maxLength="18"
                                    //value={""}
                                    placeholder="e.g.: Engineer"
                                />
                                <span className="account__error">{''}</span>
                                <label className="account__label">Phone number:</label>
                                <input 
                                    className="account__input"
                                    required
                                    id="phone-number-account-input" 
                                    name="phone-number" 
                                    type="tel"
                                    minLength="2"
                                    maxLength="20"
                                    //value={""}
                                    placeholder="e.g.: +79876543210"
                                />
                                <span className="account__error">{''}</span>
                            </div>
                            <div className="account__photos-edit-items">
                                <div className="account__photos account__photos_another-view">
                                    <img className="account__photo" src={profilePhoto} alt="it's could be me"></img>
                                    <div className="account__photo-text_under">
                                        <img className="account__photo_under" src={noPhoto} alt="no"></img>
                                        <div className="account__photo_text">Click here to change the photo!</div>
                                    </div>
                                </div>
                                <div className="account__edit-items account__edit-items_another-view">
                                    <div className="account__btns">
                                        <button type="button" aria-label="redact data" className="account__redact-btn"></button>
                                        <button type="submit" aria-label="accept data" className="account__accept-btn"></button>
                                    </div>    
                                    <img className="account__edit-picture" src={editPictureTurned} alt="here might be a turned cat"></img>
                                </div>
                            </div>
                            <div className="account__edit-items">
                                <div className="account__btns">
                                    <button type="button" aria-label="redact data" className="account__redact-btn"></button>
                                    <button type="submit" aria-label="accept data" className="account__accept-btn"></button>
                                </div>    
                                <img className="account__edit-picture" src={editPicture} alt="here might be a cat"></img>
                            </div>
                        </form>    
                    </div>
                <form className="account__forms" onSubmit={handleSubmit}>
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

                <form className="account__forms" onSubmit={handleSubmit}>
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

                <form className="account__forms" onSubmit={handleSubmit}>
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

                <form className="account__forms" onSubmit={handleSubmit}>
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

                <form className="account__forms" onSubmit={handleSubmit}>
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

                <form className="account__forms" onSubmit={handleSubmit}>
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

export default Account;