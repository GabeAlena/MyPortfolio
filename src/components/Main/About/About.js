import React from 'react';
import { Link } from "react-router-dom";
import catMain from '../../../images/cat write with laptop.jpeg';

function About() {
    return (
        <section className="about__section">
            <div className="about__description-image">
                <img className="about__image" src={catMain} alt='here you could see the working cat'></img>
                <p className="about__description">
                    &#128161; What can you see? Here is a site-portfolio where you can post information about you,
                    your life, education, hobbies, career, various awards, any interesting news. Or you
                    can look through the profiles because my site is not ready yet.
                </p>
            </div>
            <div className="about__description_profile-link">
                <p>&#128101; One of them you can see right</p>
                <Link className="about__description_link" to="/portfolio">HERE.</Link>
            </div>
            <div className="about__description_job">
                &#128161; What else? Here you can see popular job search sites:

                <ul className="about__description_job-sites">
                    <li><a rel="noopener noreferrer" href="https://hh.kz" target="_blank" className="about__description_job-site">
                        HeadHunter (for post-Soviet countries)
                    </a></li>
                    <li><a rel="noopener noreferrer" href="https://suberjob.kz" target="_blank" className="about__description_job-site">
                        SuperJob (for post-Soviet countries)
                    </a></li>
                    <li><a rel="noopener noreferrer" href="https://layboard.com" target="_blank" className="about__description_job-site">
                        LAYBOARD (for all countries)
                    </a></li>
                    <li><a rel="noopener noreferrer" href="https://indeed.com" target="_blank" className="about__description_job-site">
                        Indeed (for all countries)
                    </a></li>
                    <li><a rel="noopener noreferrer" href="https://idealist.org" target="_blank" className="about__description_job-site">
                        idealist (for all countries)
                    </a></li>
                </ul>
            </div>
            <p className="about__note">If you want to ask why this site is so gray, the answer is - because.</p>
        </section>
    )
}

export default About;