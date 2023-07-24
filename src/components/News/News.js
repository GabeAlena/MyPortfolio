/*import profilePhoto from "../../images/cat in clothes.jpeg";*/
import newsPhoto from "../../images/alex-news.JPG";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

/* Need to change the condition after the registration part cause like this - it's not ok*/
function News() {
    const location = useLocation();

    return (
        <section className="news">
            <div className="news__page">
                <Link to="/portfolio" className={`news__page-about ${location.pathname === '/portfolio' ? 'news__page-about_checked' : ''}`}>About Me</Link>
                <div className="news__page-slash">/</div>
                <Link to="/news" className={`news__page-news ${location.pathname === '/news' ? 'news__page-news_checked' : ''}`}> News</Link>
            </div>
            <div className="news__photo-info">
                <div className="news__laptop">
                    <img className="news__photo" src={newsPhoto} alt="it's could be this guy"></img>
                    <div className="news__items">
                        <ul className="news__main-info">
                            <li className="news__info"><strong>First name: </strong>Aleksandr</li>
                            <li className="news__info"><strong>Family name: </strong>Bazhukov</li>
                            <li className="news__info"><strong>Date of birth: </strong>23 June 1993</li>
                            <li className="news__info"><strong>Country: </strong>Russia</li>
                            <li className="news__info"><strong>Occupation: </strong>Engineer</li>
                            <li className="news__info"><strong>Mob: </strong>+79876543210</li>
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
                            <li className="news__info"><strong>First name: </strong>Aleksandr</li>
                            <li className="news__info"><strong>Family name: </strong>Bazhukov</li>
                            <li className="news__info"><strong>Date of birth: </strong>23 June 1993</li>
                            <li className="news__info"><strong>Country: </strong>Russia</li>
                            <li className="news__info"><strong>Occupation: </strong>Engineer</li>
                            <li className="news__info"><strong>Mob: </strong>+79876543210</li>
                        </ul>
                        <img className="news__photo" src={newsPhoto} alt="it's could be this guy"></img>
                    </div>
                </div>
                <div className="news__small-screen">
                    <div className="news__items">
                        <img className="news__photo" src={newsPhoto} alt="it's could be this guy"></img>
                        <ul className="news__main-info">
                            <li className="news__info"><strong>First name: </strong>Aleksandr</li>
                            <li className="news__info"><strong>Family name: </strong>Bazhukov</li>
                            <li className="news__info"><strong>Date of birth: </strong>23 June 1993</li>
                            <li className="news__info"><strong>Country: </strong>Russia</li>
                            <li className="news__info"><strong>Occupation: </strong>Engineer</li>
                            <li className="news__info"><strong>Mob: </strong>+79876543210</li>
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
                    <h4 className="news__section-note">Note: What is this video about? I don't know actually.</h4>
                    <iframe className="news__section_video" width="700" height="525" src="https://www.youtube.com/embed/HaI1RgSVpYQ" title="Meeting Key Automotive Challenges with Simulation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                </div>
            </div>
        </section> 
    )
}

export default News;