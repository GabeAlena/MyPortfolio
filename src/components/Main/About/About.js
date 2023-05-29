import React from 'react';
import catMain from '../../../images/cat write with laptop.jpeg';

function About() {
    return (
        <section className="about__section">
            <div className="about__description-image">
                <p className="about__description">
                    What can you see? Here is a site-portfolio where you can post information about you,
                    your life, education, hobbies, career, various awards, any interesting news. Or you
                    can look through the profiles.
                </p>
                <img className="about__image" src={catMain} alt='here you could see the working cat'></img>
            </div>
            <p className="about__note">If you want to ask why this site is so gray, an answer is - because.</p>
        </section>
    )
}

export default About;