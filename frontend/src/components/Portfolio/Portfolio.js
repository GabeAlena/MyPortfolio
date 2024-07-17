import profilePhoto from "../../images/cat in clothes.jpeg";
import { Link, useLocation, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import instagram from '../../images/instagram.png';
import telegram from '../../images/telegram.jpeg';
import { api } from "../../utils/api";
import Loading from "../Loading/Loading";
import NotFoundUser from "../NotFoundUser/NotFoundUser";


/* Need to change the condition after the registration part cause like this - it's not ok*/
function Portfolio(props) {
    const location = useLocation();
    const currentUser = useContext(CurrentUserContext);
    const { userId: userIdFromParams } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const userId = props.userId || userIdFromParams;

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                let userData;
                if (currentUser && userId === currentUser._id) {
                    userData = await api.getUserInfo();
                } else {
                    userData = await api.getUserById(userId);
                }
                setUserProfile(userData);
            } catch(err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProfile();
    }, [userId, currentUser]);

    useEffect(() => {
        props.setUserId(userId);
    }, [userId, props]);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (!userProfile) {
        return (
            <NotFoundUser />
        )
    }

    return (
        <section className="portfolio">
            <div className="portfolio__page">
                <Link to={`/portfolio/${userId}`} className={`portfolio__page-about ${location.pathname.includes('/portfolio') ? 'portfolio__page-about_checked' : ''}`}>About Me</Link>
                <div className="portfolio__page-slash">/</div>
                <Link to={`/news/${userId}`} className={`portfolio__page-news ${location.pathname.includes('/news') ? 'portfolio__page-news_checked' : ''}`}> News</Link>
            </div>
            <div className="portfolio__photo-info">
                <div className="portfolio__laptop">
                    <img className="portfolio__photo" src={currentUser.avatar  || userProfile.avatar|| profilePhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                    <div className="portfolio__items">
                        <ul className="portfolio__main-info">
                            <li className="portfolio__info"><strong>First name: </strong>{currentUser.firstName || userProfile.firstName || '-'}</li>
                            <li className="portfolio__info"><strong>Family name: </strong>{currentUser.familyName || userProfile.familyName || '-'}</li>
                            <li className="portfolio__info"><strong>Date of birth: </strong>{currentUser.dateOfBirth || userProfile.dateOfBirth || '-'}</li>
                            <li className="portfolio__info"><strong>Country: </strong>{currentUser.country || userProfile.country || '-'}</li>
                            <li className="portfolio__info"><strong>Occupation: </strong>{currentUser.occupation || userProfile.occupation || '-'}</li>
                            <li className="portfolio__info"><strong>Mob: </strong>{currentUser.phoneNumber || userProfile.phoneNumber  || '-'}</li>
                            <li className="portfolio__info"><strong>Social media: </strong>
                            { currentUser.socialMediaInst === '' && currentUser.socialMediaTeleg !== '' ?
                                <> 
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaInst === '' && userProfile.socialMediaTeleg !== '' ?
                            <> 
                                <a href={userProfile.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </>    
                            : currentUser.socialMediaTeleg === '' && currentUser.socialMediaInst !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaTeleg === '' && userProfile.socialMediaInst !== '' ?
                            <>
                                <a href={userProfile.socialMediaInst} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                            </>                                
                            : currentUser.socialMediaInst !== '' && currentUser.socialMediaTeleg !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaInst !== '' && userProfile.socialMediaTeleg !== '' ?
                            <>
                                <a href={userProfile.socialMediaInst} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                                <a href={userProfile.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </>                                
                            : 
                                <>
                                    -
                                </>  
                            }
                            </li>
                        </ul>
                        <p className="portfolio__welcoming">
                            Hi! Welcome to my page. My name is {currentUser.firstName || userProfile.firstName || '?'} {currentUser.familyName || userProfile.familyName || '?'}. Here you can read info about me:
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
                            Hi! Welcome to my page. My name is {currentUser.firstName || userProfile.firstName} {currentUser.familyName || userProfile.familyName}. Here you can read info about me:
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
                            <li className="portfolio__info"><strong>First name: </strong>{currentUser.firstName || userProfile.firstName || '-'}</li>
                            <li className="portfolio__info"><strong>Family name: </strong>{currentUser.familyName || userProfile.familyName || '-'}</li>
                            <li className="portfolio__info"><strong>Date of birth: </strong>{currentUser.dateOfBirth || userProfile.dateOfBirth || '-'}</li>
                            <li className="portfolio__info"><strong>Country: </strong>{currentUser.country || userProfile.country || '-'}</li>
                            <li className="portfolio__info"><strong>Occupation: </strong>{currentUser.occupation || userProfile.occupation || '-'}</li>
                            <li className="portfolio__info"><strong>Mob: </strong>{currentUser.phoneNumber || userProfile.phoneNumber || '-'}</li>
                            <li className="portfolio__info"><strong>Social media: </strong>
                            { currentUser.socialMediaInst === '' && currentUser.socialMediaTeleg !== '' ?
                                <> 
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaInst === '' && userProfile.socialMediaTeleg !== '' ?
                            <> 
                                <a href={userProfile.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </>    
                            : currentUser.socialMediaTeleg === '' && currentUser.socialMediaInst !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaTeleg === '' && userProfile.socialMediaInst !== '' ?
                            <>
                                <a href={userProfile.socialMediaInst} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                            </>                                
                            : currentUser.socialMediaInst !== '' && currentUser.socialMediaTeleg !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaInst !== '' && userProfile.socialMediaTeleg !== '' ?
                            <>
                                <a href={userProfile.socialMediaInst} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                                <a href={userProfile.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </>                                
                            : 
                                <>
                                    -
                                </>  
                            }
                            </li>
                        </ul>
                        <img className="portfolio__photo" src={currentUser.avatar || userProfile.avatar || profilePhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                    </div>
                </div>
                <div className="portfolio__small-screen">
                    <div className="portfolio__items">
                        <img className="portfolio__photo" src={currentUser.avatar || userProfile.avatar || profilePhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                        <ul className="portfolio__main-info">
                            <li className="portfolio__info"><strong>First name: </strong>{currentUser.firstName || userProfile.firstName || '-'}</li>
                            <li className="portfolio__info"><strong>Family name: </strong>{currentUser.familyName || userProfile.familyName || '-'}</li>
                            <li className="portfolio__info"><strong>Date of birth: </strong>{currentUser.dateOfBirth || userProfile.dateOfBirth || '-'}</li>
                            <li className="portfolio__info"><strong>Country: </strong>{currentUser.country || userProfile.country || '-'}</li>
                            <li className="portfolio__info"><strong>Occupation: </strong>{currentUser.occupation || userProfile.occupation || '-'}</li>
                            <li className="portfolio__info"><strong>Mob: </strong>{currentUser.phoneNumber || userProfile.phoneNumber || '-'}</li>
                            <li className="portfolio__info"><strong>Social media: </strong>
                            { currentUser.socialMediaInst === '' && currentUser.socialMediaTeleg !== '' ?
                                <> 
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaInst === '' && userProfile.socialMediaTeleg !== '' ?
                            <> 
                                <a href={userProfile.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </>    
                            : currentUser.socialMediaTeleg === '' && currentUser.socialMediaInst !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaTeleg === '' && userProfile.socialMediaInst !== '' ?
                            <>
                                <a href={userProfile.socialMediaInst} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                            </>                                
                            : currentUser.socialMediaInst !== '' && currentUser.socialMediaTeleg !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                        <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : userProfile.socialMediaInst !== '' && userProfile.socialMediaTeleg !== '' ?
                            <>
                                <a href={userProfile.socialMediaInst} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={instagram} alt="instagram link"></img>
                                </a>
                                <a href={userProfile.socialMediaTeleg} target="blank" className="portfolio__info-link">
                                    <img className="portfolio__info-link-img" src={telegram} alt="telegram link"></img>
                                </a>
                            </>                                
                            : 
                                <>
                                    -
                                </>  
                            }
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__items portfolio__items_small-screen">
                        <p className="portfolio__welcoming">
                            Hi! Welcome to my page. My name is {currentUser.firstName || userProfile.firstName} {currentUser.familyName || userProfile.familyName}. Here you can read info about me:
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
                        {currentUser.life || userProfile.life || ''}
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