import profilePhoto from "../../images/cat in clothes.jpeg";
import { Link, useLocation, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
//import portfolioPhoto from "../../images/alex.jpeg";
import instagram from '../../images/instagram.png';
import telegram from '../../images/telegram.jpeg';
import { api } from "../../utils/api";
import Loading from "../Loading/Loading";
import NotFoundUser from "../NotFoundUser/NotFoundUser";

/* Need to change the condition after the registration part cause like this - it's not ok*/
function News(props) {
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
                    userData = await api.getUserByIdInNews(userId);
                }
                setUserProfile(userData);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProfile();
    }, [userId, currentUser]);

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
        <section className="news">
            <div className="news__page">
                <Link to={`/portfolio/${userId}`} className={`news__page-about ${location.pathname.includes('/portfolio') ? 'news__page-about_checked' : ''}`}>About Me</Link>
                <div className="news__page-slash">/</div>
                <Link to={`/news/${userId}`} className={`news__page-news ${location.pathname.includes('/news') ? 'news__page-news_checked' : ''}`}> News</Link>
            </div>
            <div className="news__photo-info">
                <div className="news__laptop">
                    <img className="news__photo" src={currentUser.avatar || userProfile.avatar || profilePhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                    <div className="news__items">
                        <ul className="news__main-info">
                            <li className="news__info"><strong>First name: </strong>{currentUser.firstName || userProfile.firstName || '-'}</li>
                            <li className="news__info"><strong>Family name: </strong>{currentUser.familyName || '-'}</li>
                            <li className="news__info"><strong>Date of birth: </strong>{currentUser.dateOfBirth || '-'}</li>
                            <li className="news__info"><strong>Country: </strong>{currentUser.country || '-'}</li>
                            <li className="news__info"><strong>Occupation: </strong>{currentUser.occupation || '-'}</li>
                            <li className="news__info"><strong>Mob: </strong>{currentUser.phoneNumber || '-'}</li>
                            <li className="news__info"><strong>Social media: </strong>
                            { currentUser.socialMediaInst === '' && currentUser.socialMediaTeleg !== '' ?
                                <> 
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : currentUser.socialMediaTeleg === '' && currentUser.socialMediaInst !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                </>
                            : currentUser.socialMediaInst !== '' && currentUser.socialMediaTeleg !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : 
                                <>
                                    -
                                </>  
                            }
                            </li>
                        </ul>
                        <p className="news__welcoming">
                            Hi! Oh, you decided to read the news, didn't you? So, let's see what we have:
                        </p>
                        <ul className="news__categories">
                            <li className="news__category"><HashLink to="#ansys">Ansys.</HashLink></li>
                        </ul>
                        <p className="news__note">Or just scroll down &#8595;</p>
                    </div>
                    </div>
                <div className="news__tablet">
                    <div className="news__items news__items_tablet">
                        <p className="news__welcoming">
                            Hi! Oh, you decided to read the news, didn't you? So, let's see what we have:
                        </p>
                        <ul className="news__categories">
                            <li className="news__category"><HashLink to="#ansys">Ansys.</HashLink></li>
                        </ul>
                        <p className="news__note">Or just scroll down &#8595;</p>
                    </div>
                    <div className="news__items">
                        <ul className="news__main-info">
                            <li className="news__info"><strong>First name: </strong>{currentUser.firstName || '-'}</li>
                            <li className="news__info"><strong>Family name: </strong>{currentUser.familyName || '-'}</li>
                            <li className="news__info"><strong>Date of birth: </strong>{currentUser.dateOfBirth || '-'}</li>
                            <li className="news__info"><strong>Country: </strong>{currentUser.country || '-'}</li>
                            <li className="news__info"><strong>Occupation: </strong>{currentUser.occupation || '-'}</li>
                            <li className="news__info"><strong>Mob: </strong>{currentUser.phoneNumber || '-'}</li>
                            <li className="news__info"><strong>Social media: </strong>
                            { currentUser.socialMediaInst === '' && currentUser.socialMediaTeleg !== '' ?
                                <> 
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : currentUser.socialMediaTeleg === '' && currentUser.socialMediaInst !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                </>
                            : currentUser.socialMediaInst !== '' && currentUser.socialMediaTeleg !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : 
                                <>
                                    -
                                </>  
                            }
                            </li>
                        </ul>
                        <img className="news__photo"src={currentUser.avatar || profilePhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                    </div>
                </div>
                <div className="news__small-screen">
                    <div className="news__items">
                        <img className="news__photo" src={currentUser.avatar || profilePhoto} alt="it's could be this guy" onClick={props.onUserPhoto}></img>
                        <ul className="news__main-info">
                            <li className="news__info"><strong>First name: </strong>{currentUser.firstName || '-'}</li>
                            <li className="news__info"><strong>Family name: </strong>{currentUser.familyName || '-'}</li>
                            <li className="news__info"><strong>Date of birth: </strong>{currentUser.dateOfBirth || '-'}</li>
                            <li className="news__info"><strong>Country: </strong>{currentUser.country || '-'}</li>
                            <li className="news__info"><strong>Occupation: </strong>{currentUser.occupation || '-'}</li>
                            <li className="news__info"><strong>Mob: </strong>{currentUser.phoneNumber || '-'}</li>
                            <li className="news__info"><strong>Social media: </strong>
                            { currentUser.socialMediaInst === '' && currentUser.socialMediaTeleg !== '' ?
                                <> 
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={telegram} alt="telegram link"></img>
                                    </a>
                                </>
                            : currentUser.socialMediaTeleg === '' && currentUser.socialMediaInst !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                </>
                            : currentUser.socialMediaInst !== '' && currentUser.socialMediaTeleg !== '' ?
                                <>
                                    <a href={currentUser.socialMediaInst} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={instagram} alt="instagram link"></img>
                                    </a>
                                    <a href={currentUser.socialMediaTeleg} target="blank" className="news__info-link">
                                        <img className="news__info-link-img" src={telegram} alt="telegram link"></img>
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
                    <div className="news__items news__items_small-screen">
                        <p className="news__welcoming">
                            Hi! Oh, you decided to read the news, didn't you? So, let's see what we have:
                        </p>
                        <ul className="news__categories">
                            <li className="news__category"><HashLink to="#ansys">Ansys.</HashLink></li>
                        </ul>
                        <p className="news__note">Or just scroll down &#8595;</p>
                    </div>
                </div>
            </div>
            <div className="news__sections">
                <div className="news__section" id="ansys">
                    <h3 className="news__label">Ansys:</h3>
                    <h4 className="news__section-note">
                        {currentUser.news || userProfile.news || ''}
                    </h4>
                    <iframe className="news__section_video" width="700" height="525" src="https://www.youtube.com/embed/HaI1RgSVpYQ" title="Meeting Key Automotive Challenges with Simulation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                </div>
            </div>
        </section> 
    )
}

export default News;