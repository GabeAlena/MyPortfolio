import React, { useEffect, useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ValidationForm } from '../../utils/validationForm';
//import NotFound from "../NotFound/NotFound";
import profilePhoto from "../../images/cat in clothes.jpeg"
import noPhoto from "../../images/no photo.jpeg";
//import editPicture from "../../images/cat-stretching.jpeg";
import editPicture from "../../images/worm.jpeg";
//import editPictureTurned from "../../images/cat-stretching-turned.jpeg";
import editPictureTurned from "../../images/worm-turned.jpeg";
import instagram from '../../images/instagram.png';
import telegram from '../../images/telegram.jpeg';

/* Need to change the condition after the registration part cause like this - it's not ok*/
function Account(props) {
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, isValid, setValues, errors } = ValidationForm();

    const [isEditingGeneral, setIsEditingGeneral] = useState(false);
    const [isEditingLife, setIsEditingLife] = useState(false);
    const [isEditingEducation, setIsEditingEducation] = useState(false);
    const [isEditingCareer, setIsEditingCareer] = useState(false);
    const [isEditingCompetences, setIsEditingCompetences] = useState(false);
    const [isEditingHobbies, setIsEditingHobbies] = useState(false);
    const [isEditingNews, setIsEditingNews] = useState(false);

    // Load values from localStorage and context
    useEffect(() => {
        const savedValues = {
            life: localStorage.getItem('lifeValue') || currentUser.life || '',
            education: localStorage.getItem('educationValue') || currentUser.education || '',
            career: localStorage.getItem('careerValue') || currentUser.career || '',
            competences: localStorage.getItem('competencesValue') || currentUser.competences || '',
            hobbies: localStorage.getItem('hobbiesValue') || currentUser.hobbies || '',
            news: localStorage.getItem('newsValue') || currentUser.news || ''
        };

        setValues(savedValues);
    }, [setValues, currentUser]);

    // Save values to localStorage on change
    useEffect(() => {
        if (values.life !== undefined) localStorage.setItem('lifeValue', values.life);
    }, [values.life]);

    useEffect(() => {
        if (values.education !== undefined) localStorage.setItem('educationValue', values.education);
    }, [values.education]);

    useEffect(() => {
        if (values.career !== undefined) localStorage.setItem('careerValue', values.career);
    }, [values.career]);

    useEffect(() => {
        if (values.competences !== undefined) localStorage.setItem('competencesValue', values.competences);
    }, [values.competences]);

    useEffect(() => {
        if (values.hobbies !== undefined) localStorage.setItem('hobbiesValue', values.hobbies);
    }, [values.hobbies]);

    useEffect(() => {
        if (values.news !== undefined) localStorage.setItem('newsValue', values.news);
    }, [values.news]);

    // Load initial values from context
    useEffect(() => {
        setValues(currentUser);
    }, [setValues, currentUser]);

    const handleSubmit = (e, section) => {
        e.preventDefault();
        const updatedData = { ...values };
        props.onUpdateUser(updatedData);

        if (section === 'general') setIsEditingGeneral(false);
        if (section === 'life') setIsEditingLife(false);
        if (section === 'education') setIsEditingEducation(false);
        if (section === 'career') setIsEditingCareer(false);
        if (section === 'competences') setIsEditingCompetences(false);
        if (section === 'hobbies') setIsEditingHobbies(false);
        if (section === 'news') setIsEditingNews(false);
    };

    const handleReset = (fieldName, section) => {
        if (['life', 'education', 'career', 'competences', 'hobbies', 'news'].includes(fieldName)) {
            setValues(values => ({
                ...values,
                [fieldName]: ''
            }));

            localStorage.removeItem(`${fieldName}Value`);

            const updatedUser = {
                ...currentUser,
                [fieldName]: ''
            };

            props.onUpdateUser(updatedUser);

            if (section === 'life') setIsEditingLife(false);
            if (section === 'education') setIsEditingEducation(false);
            if (section === 'career') setIsEditingCareer(false);
            if (section === 'competences') setIsEditingCompetences(false);
            if (section === 'hobbies') setIsEditingHobbies(false);
            if (section === 'news') setIsEditingNews(false);
        }
    };

    const enableEditing = (section) => {
        if (section === 'general') setIsEditingGeneral(true);
        if (section === 'life') setIsEditingLife(true);
        if (section === 'education') setIsEditingEducation(true);
        if (section === 'career') setIsEditingCareer(true);
        if (section === 'competences') setIsEditingCompetences(true);
        if (section === 'hobbies') setIsEditingHobbies(true);
        if (section === 'news') setIsEditingNews(true);
    };

    const handleDoubleClick = (section) => {
        enableEditing(section);
    };

    const handleKeyDown = (e, section) => {
        if (e.key === 'Enter') {
            handleSubmit(e, section);
        }
    };

    /*useEffect(() => {
        function handleClickRedactBtnAccountForm(evt) {
            const hasClass = evt.target.classList.contains('account__redact-btn_about');
            console.log(hasClass);

            if (hasClass) {
                console.log('click on edit button');
                document.getElementById('first-name-account-input').disabled = false;
                document.getElementById('family-name-account-input').disabled = false;
                document.getElementById('date-of-birth-account-input').disabled = false;
                document.getElementById('country-account-input').disabled = false;
                document.getElementById('occupation-account-input').disabled = false;
                document.getElementById('phone-number-account-input').disabled = false;
                document.getElementById('social-media-inst-account-input').disabled = false;
                document.getElementById('social-media-teleg-account-input').disabled = false;

                const acceptButtonMain = document.getElementById('main-view-account-accept-btn');
                acceptButtonMain.classList.add('account__accept-btn_active');
                const acceptButtonTurned = document.getElementById('turned-view-account-accept-btn');
                acceptButtonTurned.classList.add('account__accept-btn_active');

                document.getElementById('main-view-account-redact-btn').removeEventListener('click', handleClickRedactBtnAccountForm);
                document.getElementById('turned-view-account-redact-btn').removeEventListener('click', handleClickRedactBtnAccountForm);
                
            } else {
                console.log('it is not edit button');            
            }
        }
        document.getElementById('main-view-account-redact-btn').addEventListener('click', handleClickRedactBtnAccountForm);
        document.getElementById('turned-view-account-redact-btn').addEventListener('click', handleClickRedactBtnAccountForm);
    });

    useEffect(() => {
        function handleClickAcceptBtnAccountForm(evt) {
            const hasClass = evt.target.classList.contains('account__accept-btn_active');

            if (hasClass === true) {
                console.log('click on accept button');
                document.getElementById('first-name-account-input').disabled = true;
                document.getElementById('family-name-account-input').disabled = true;
                document.getElementById('date-of-birth-account-input').disabled = true;
                document.getElementById('country-account-input').disabled = true;
                document.getElementById('occupation-account-input').disabled = true;
                document.getElementById('phone-number-account-input').disabled = true;
                document.getElementById('social-media-inst-account-input').disabled = true;
                document.getElementById('social-media-teleg-account-input').disabled = true;

                const acceptButtonMain = document.getElementById('main-view-account-accept-btn');
                acceptButtonMain.classList.remove('account__accept-btn_active');
                const acceptButtonTurned = document.getElementById('turned-view-account-accept-btn');
                acceptButtonTurned.classList.remove('account__accept-btn_active');

                document.getElementById('main-view-account-accept-btn').removeEventListener('click', handleClickAcceptBtnAccountForm);
                document.getElementById('turned-view-account-accept-btn').removeEventListener('click', handleClickAcceptBtnAccountForm);
                
            } else {
                console.log('it is not accept button');            
            }
        }
        document.getElementById('main-view-account-accept-btn').addEventListener('click', handleClickAcceptBtnAccountForm);
        document.getElementById('turned-view-account-accept-btn').addEventListener('click', handleClickAcceptBtnAccountForm);
    });*/

    /*useEffect(() => {
        function handleClickSectionLifeBtn(evt) {
            const hasClass = evt.target.classList.contains('account__redact-btn_section-life');
            console.log(hasClass);
            if (hasClass) {
                console.log('click on edit button in life section');
                document.getElementById('life-account-section-input').disabled = false;
                const acceptButtonInSectionLife = document.getElementById('account-accept-btn-section-life');
                acceptButtonInSectionLife.classList.add('account__accept-btn_active');
                document.getElementById('account-redact-btn-section-life').removeEventListener('click', handleClickSectionLifeBtn);
            } else {
                console.log('it is not edit button in life section');            
            }
        }
        document.getElementById('account-redact-btn-section-life').addEventListener('click', handleClickSectionLifeBtn);
    });*/

    /*useEffect(() => {
        function handleClickSectionEducationBtn(evt) {
            const hasClass = evt.target.classList.contains('account__redact-btn_section-education');
            console.log(hasClass);
            if (hasClass) {
                console.log('click on edit button in education section');
                document.getElementById('education-account-section-input').disabled = false;
                const acceptButtonInSectionEducation = document.getElementById('account-accept-btn-section-education');
                acceptButtonInSectionEducation.classList.add('account__accept-btn_active');
                document.getElementById('account-redact-btn-section-education').removeEventListener('click', handleClickSectionEducationBtn);
            } else {
                console.log('it is not edit button in education section');            
            }
        }
        document.getElementById('account-redact-btn-section-education').addEventListener('click', handleClickSectionEducationBtn);
    });

    useEffect(() => {
        function handleClickSectionCareerBtn(evt) {
            const hasClass = evt.target.classList.contains('account__redact-btn_section-career');
            console.log(hasClass);
            if (hasClass) {
                console.log('click on edit button in career section');
                document.getElementById('career-account-section-input').disabled = false;
                const acceptButtonInSectionCareer = document.getElementById('account-accept-btn-section-career');
                acceptButtonInSectionCareer.classList.add('account__accept-btn_active');
                document.getElementById('account-redact-btn-section-career').removeEventListener('click', handleClickSectionCareerBtn);
            } else {
                console.log('it is not edit button in career section');            
            }
        }
        document.getElementById('account-redact-btn-section-career').addEventListener('click', handleClickSectionCareerBtn);
    });

    useEffect(() => {
        function handleClickSectionCompetencesBtn(evt) {
            const hasClass = evt.target.classList.contains('account__redact-btn_section-competences');
            console.log(hasClass);
            if (hasClass) {
                console.log('click on edit button in competences section');
                document.getElementById('competences-account-section-input').disabled = false;
                const acceptButtonInSectionCompetences = document.getElementById('account-accept-btn-section-competences');
                acceptButtonInSectionCompetences.classList.add('account__accept-btn_active');
                document.getElementById('account-redact-btn-section-competences').removeEventListener('click', handleClickSectionCompetencesBtn);
            } else {
                console.log('it is not edit button in competences section');            
            }
        }
        document.getElementById('account-redact-btn-section-competences').addEventListener('click', handleClickSectionCompetencesBtn);
    });

    useEffect(() => {
        function handleClickSectionHobbiesBtn(evt) {
            const hasClass = evt.target.classList.contains('account__redact-btn_section-hobbies');
            console.log(hasClass);
            if (hasClass) {
                console.log('click on edit button in hobbies section');
                document.getElementById('hobbies-account-section-input').disabled = false;
                const acceptButtonInSectionHobbies = document.getElementById('account-accept-btn-section-hobbies');
                acceptButtonInSectionHobbies.classList.add('account__accept-btn_active');
                document.getElementById('account-redact-btn-section-hobbies').removeEventListener('click', handleClickSectionHobbiesBtn);
            } else {
                console.log('it is not edit button in hobbies section');            
            }
        }
        document.getElementById('account-redact-btn-section-hobbies').addEventListener('click', handleClickSectionHobbiesBtn);
    });

    useEffect(() => {
        function handleClickSectionNewsBtn(evt) {
            const hasClass = evt.target.classList.contains('account__redact-btn_section-news');
            console.log(hasClass);
            if (hasClass) {
                console.log('click on edit button in news section');
                document.getElementById('news-account-section-input').disabled = false;
                const acceptButtonInSectionNews = document.getElementById('account-accept-btn-section-news');
                acceptButtonInSectionNews.classList.add('account__accept-btn_active');
                document.getElementById('account-redact-btn-section-news').removeEventListener('click', handleClickSectionNewsBtn);
            } else {
                console.log('it is not edit button in news section');            
            }
        }
        document.getElementById('account-redact-btn-section-news').addEventListener('click', handleClickSectionNewsBtn);
    });*/

    return (
        <section className="account">
                <div className="account__logined-users">
                    <div className="account__photo-items">
                        <div className="account__photos">
                            <img 
                                className="account__photo" 
                                target="_blank" 
                                id="output" 
                                type="image/*" 
                                src={currentUser.avatar || profilePhoto}
                                alt="it's could be me" 
                                onClick={props.onEditAvatar}
                            />
                            <div className="account__photo-text_under">
                                <img className="account__photo_under" src={noPhoto} alt="no"></img>
                                <div className="account__photo_text">Click here to change the photo!</div>
                            </div>
                        </div>
                        <form 
                            className="account__form" 
                            onSubmit={(e) => handleSubmit(e, 'general')}
                            onKeyDown={(e) => handleKeyDown(e, 'general')}
                        >
                            <div className="account__items">
                                <label className="account__label">First name:</label>
                                <input 
                                    className="account__input"
                                    required
                                    id="first-name-account-input"
                                    name="firstName" 
                                    type="text"
                                    minLength="2"
                                    maxLength="18"
                                    value={values.firstName || ''}
                                    placeholder="e.g.: Aleksandr"
                                    disabled={!isEditingGeneral}
                                    onChange={handleChange}
                                />
                                <span className="account__error">{errors.firstName || ''}</span>
                                <label className="account__label">Family name:</label>
                                <input 
                                    className="account__input"
                                    required
                                    id="family-name-account-input" 
                                    name="familyName" 
                                    type="text"
                                    minLength="2"
                                    maxLength="18"
                                    value={values.familyName || ''}
                                    placeholder="e.g.: Bazhukov"
                                    disabled={!isEditingGeneral}
                                    onChange={handleChange}
                                />
                                <span className="account__error">{errors.familyName || ''}</span>
                                <label className="account__label">Date of birth:</label>
                                <input 
                                    className="account__input"
                                    id="date-of-birth-account-input" 
                                    name="dateOfBirth" 
                                    type="text"
                                    minLength="2"
                                    maxLength="20"
                                    value={values.dateOfBirth || ''}
                                    placeholder="e.g.: 23 June 1993"
                                    disabled={!isEditingGeneral}
                                    onChange={handleChange}
                                />
                                <span className="account__error">{errors.dateOfBirth || ''}</span>
                                <label className="account__label">Country:</label>
                                <input 
                                    className="account__input"
                                    id="country-account-input" 
                                    name="country" 
                                    type="text"
                                    minLength="2"
                                    maxLength="18"
                                    value={values.country || ''}
                                    placeholder="e.g.: Russia"
                                    disabled={!isEditingGeneral}
                                    onChange={handleChange}
                                />
                                <span className="account__error">{errors.country || ''}</span>
                                <label className="account__label">Occupation:</label>
                                <input 
                                    className="account__input"
                                    id="occupation-account-input" 
                                    name="occupation" 
                                    type="text"
                                    minLength="2"
                                    maxLength="18"
                                    value={values.occupation || ''}
                                    placeholder="e.g.: Engineer"
                                    disabled={!isEditingGeneral}
                                    onChange={handleChange}
                                />
                                <span className="account__error">{errors.occupation || ''}</span>
                                <label className="account__label">Phone number:</label>
                                <input 
                                    className="account__input"
                                    id="phone-number-account-input" 
                                    name="phoneNumber" 
                                    type="tel"
                                    value={values.phoneNumber || ''}
                                    placeholder="e.g.: +79876543210"
                                    disabled={!isEditingGeneral}
                                    onChange={handleChange}
                                />
                                <span className="account__error">{errors.phoneNumber || ''}</span>
                                <label className="account__label">Social media:</label>
                                <div className="account__input-img">
                                    <img className="account__img" src={instagram} alt="instagram link"></img>
                                    <input 
                                        className="account__input account__input_social"
                                        id="social-media-inst-account-input" 
                                        name="socialMediaInst" 
                                        type="text"
                                        value={values.socialMediaInst || ''}
                                        placeholder="https://..."
                                        disabled={!isEditingGeneral}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="account__input-img">
                                    <img className="account__img" src={telegram} alt="telegram link"></img>             
                                    <input 
                                        className="account__input account__input_social"
                                        id="social-media-teleg-account-input" 
                                        name="socialMediaTeleg" 
                                        type="text"
                                        value={values.socialMediaTeleg || ''}
                                        placeholder="https://..."
                                        disabled={!isEditingGeneral}
                                        onChange={handleChange}
                                    />
                                </div>
                                <span className="account__error">{errors.socialMediaInst || errors.socialMediaTeleg || ''}</span>
                            </div>
                            <div className="account__photos-edit-items">
                                <div className="account__photos account__photos_another-view">
                                    <img className="account__photo" src={currentUser.avatar || profilePhoto} alt="it's could be me" onClick={props.onEditAvatar}></img>
                                    <div className="account__photo-text_under">
                                        <img className="account__photo_under" src={noPhoto} alt="no"></img>
                                        <div className="account__photo_text">Click here to change the photo!</div>
                                    </div>
                                </div>
                                <div className="account__edit-items account__edit-items_another-view">
                                    <div className="account__btns">
                                        <button 
                                            type="button" 
                                            aria-label="redact data" 
                                            id="turned-view-account-redact-btn" 
                                            className="account__redact-btn account__redact-btn_about"
                                            onClick={() => enableEditing('general')}
                                        ></button>
                                        <button 
                                            type="submit"
                                            aria-label="accept data"
                                            id="turned-view-account-accept-btn"
                                            className={`account__accept-btn account__accept-btn_about ${isEditingGeneral ? 'account__accept-btn_active' : ''}`}
                                        ></button>
                                    </div>    
                                    <img className="account__edit-picture" src={editPictureTurned} alt="here might be a turned cat"></img>
                                </div>
                            </div>
                            <div className="account__edit-items">
                                <div className="account__btns">
                                    <button 
                                        type="button" 
                                        aria-label="redact data" 
                                        id="main-view-account-redact-btn" 
                                        className="account__redact-btn account__redact-btn_about"
                                        onClick={() => enableEditing('general')}
                                    ></button>
                                    <button 
                                        type="submit"
                                        name="acceptButton"
                                        aria-label="accept data" 
                                        id="main-view-account-accept-btn" 
                                        //className="account__accept-btn account__accept-btn_about account__accept-btn_active"
                                        /*className={
                                            !isValid || (
                                                values.firstName === currentUser.firstName && 
                                                values.familyName === currentUser.familyName &&
                                                values.dateOfBirth === currentUser.dateOfBirth &&
                                                values.country === currentUser.country &&
                                                values.occupation === currentUser.occupation &&
                                                values.phoneNumber === currentUser.phoneNimber &&
                                                values.socialMediaInst === currentUser.socialMediaInst &&
                                                values.socialMediaTeleg === currentUser.socialMediaTeleg)
                                                    ? 'account__accept-btn account__accept-btn_about'
                                                    : 'account__accept-btn account__accept-btn_about account__accept-btn_active'
                                        }*/
                                        className={`account__accept-btn account__accept-btn_about ${isEditingGeneral ? 'account__accept-btn_active' : ''}`}
                                    ></button>
                                </div>    
                                <img className="account__edit-picture" src={editPicture} alt="here might be a cat"></img>
                            </div>
                        </form>    
                    </div>
                <form 
                    className="account__forms" 
                    onSubmit={(e) => handleSubmit(e, 'life')}
                    onKeyDown={(e) => handleKeyDown(e, 'life')}
                >
                    <div className="account__section" /*onDoubleClick={() => handleDoubleClick('life')}*/>
                        <label className="account__label">Life:</label>
                        {isEditingLife ? (
                            <textarea 
                                className="account__section_input"
                                id="life-account-section-input"
                                name="life" 
                                type="text"
                                value={values.life || ''}
                                /*placeholder="Where you were born? Marriage? Kids? Your life in several sentences. 
                                When your text will be written, please click *checkmark*. Also you can click *delete* 
                                and remove all what you have written here, but I hope it's unnecessary.
                                If you want to write more, please click *plus* ->"*/
                                onChange={handleChange}
                            />
                        ) : (
                            <div className="account__section_input" onDoubleClick={() => handleDoubleClick('life')}>
                                {values.life || ''}
                            </div>
                        )}
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button 
                                    type="button" 
                                    aria-label="redact data" 
                                    id="account-redact-btn-section-life" 
                                    className="account__redact-btn account__redact-btn_section-life"
                                    onClick={() => enableEditing('life')}
                                ></button>
                                <button 
                                    type="submit"
                                    aria-label="accept data" 
                                    id="account-accept-btn-section-life" 
                                    className={`account__accept-btn ${isEditingLife ? 'account__accept-btn_active' : ''}`}
                                ></button>
                            </div>
                            <button 
                                type="button" 
                                aria-label="delete data" 
                                className="account__delete-btn"
                                onClick={() => handleReset('life', 'life')}
                            ></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>     
                </form>

                <form 
                    className="account__forms" 
                    onSubmit={(e) => handleSubmit(e, 'education')}
                    onKeyDown={(e) => handleKeyDown(e, 'education')}
                >
                    <div className="account__section">
                        <label className="account__label">Education:</label>
                        {isEditingEducation ? (
                            <textarea 
                                className="account__section_input"
                                id="education-account-section-input"
                                name="education" 
                                type="text"
                                value={values.education || ''}
                                /*placeholder="University? Faculty? Degrees? An additional education?
                                If you want to write more, please click *plus* ->"*/
                                onChange={handleChange}
                            />
                        ) : (
                            <div className="account__section_input" onDoubleClick={() => handleDoubleClick('education')}>
                                {values.education || ''}
                            </div>
                        )}
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button 
                                    type="button" 
                                    aria-label="redact data" 
                                    id="account-redact-btn-section-education" 
                                    className="account__redact-btn account__redact-btn_section-education"
                                    onClick={() => enableEditing('education')}
                                ></button>
                                <button 
                                    type="submit" 
                                    aria-label="accept data" 
                                    id="account-accept-btn-section-education" 
                                    className={`account__accept-btn ${isEditingEducation ? 'account__accept-btn_active' : ''}`}
                                ></button>
                            </div>
                            <button 
                                type="button" 
                                aria-label="delete data" 
                                className="account__delete-btn"
                                onClick={() => handleReset('education', 'education')}
                            ></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>   
                </form>

                <form 
                    className="account__forms" 
                    onSubmit={(e) => handleSubmit(e, 'career')}
                    onKeyDown={(e) => handleKeyDown(e, 'career')}
                >
                    <div className="account__section">
                        <label className="account__label">Career:</label>
                        {isEditingCareer ? (
                            <textarea 
                                className="account__section_input"
                                id="career-account-section-input"
                                name="career" 
                                type="text"
                                value={values.career || ''}
                                /*placeholder="Please describe places of your past jobs and your duties.
                                You can use one block for one work.
                                If you want to write more, please click *plus* ->"*/
                                onChange={handleChange}                       
                            />
                        ) : (
                            <div className="account__section_input" onDoubleClick={() => handleDoubleClick('career')}>
                                {values.career || ''}
                            </div>
                        )}
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button 
                                    type="button" 
                                    aria-label="redact data" 
                                    id="account-redact-btn-section-career" 
                                    className="account__redact-btn account__redact-btn_section-career"
                                    onClick={() => enableEditing('career')}
                                ></button>
                                <button 
                                    type="submit" 
                                    aria-label="accept data" 
                                    id="account-accept-btn-section-career" 
                                    className={`account__accept-btn ${isEditingCareer ? 'account__accept-btn_active' : ''}`}
                                ></button>
                            </div>
                            <button 
                                type="button" 
                                aria-label="delete data" 
                                className="account__delete-btn"
                                onClick={() => handleReset('career', 'career')}
                            ></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>      
                </form>

                <form 
                    className="account__forms" 
                    onSubmit={(e) => handleSubmit(e, 'competences')}
                    onKeyDown={(e) => handleKeyDown(e, 'competences')}
                >
                    <div className="account__section">
                        <label className="account__label">Competences:</label>
                        {isEditingCompetences ? (
                            <textarea 
                                className="account__section_input"
                                id="competences-account-section-input"
                                name="competences" 
                                type="text"
                                value={values.competences || ''}
                                /*placeholder="Please describe uour skills. Which computer programs can you operate?
                                What programming languages do you know? Foreign languages?
                                If you want to write more, please click *plus* ->"*/
                                onChange={handleChange}                        
                            />
                        ) : (
                            <div className="account__section_input" onDoubleClick={() => handleDoubleClick('competences')}>
                                {values.competences || ''}
                            </div>
                        )}
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button 
                                    type="button" 
                                    aria-label="redact data" 
                                    id="account-redact-btn-section-competences" 
                                    className="account__redact-btn account__redact-btn_section-competences"
                                    onClick={() => enableEditing('competences')}
                                ></button>
                                <button 
                                    type="submit" 
                                    aria-label="accept data" 
                                    id="account-accept-btn-section-competences" 
                                    className={`account__accept-btn ${isEditingCompetences ? 'account__accept-btn_active' : ''}`}
                                ></button>
                            </div>
                            <button 
                                type="button" 
                                aria-label="delete data" 
                                className="account__delete-btn"
                                onClick={() => handleReset('competences', 'competences')}
                            ></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>      
                </form>

                <form 
                    className="account__forms" 
                    onSubmit={(e) => handleSubmit(e, 'hobbies')}
                    onKeyDown={(e) => handleKeyDown(e, 'hobbies')}
                >
                    <div className="account__section">
                        <label className="account__label">Hobbies:</label>
                        {isEditingHobbies ? (
                            <textarea 
                                className="account__section_input"
                                id="hobbies-account-section-input"
                                name="hobbies" 
                                type="text"
                                value={values.hobbies || ''}
                                /*placeholder="What do you like to do in your spare time? For example:
                                computer games, programming, painting, cooking, sewing and etc.
                                If you want to write more, please click *plus* ->"*/
                                onChange={handleChange}                       
                            />
                        ) : (
                            <div className="account__section_input" onDoubleClick={() => handleDoubleClick('hobbies')}>
                                {values.hobbies || ''}
                            </div>
                        )}
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button 
                                    type="button" 
                                    aria-label="redact data" 
                                    id="account-redact-btn-section-hobbies" 
                                    className="account__redact-btn account__redact-btn_section-hobbies"
                                    onClick={() => enableEditing('hobbies')}
                                ></button>
                                <button 
                                    type="submit" 
                                    aria-label="accept data" 
                                    id="account-accept-btn-section-hobbies" 
                                    className={`account__accept-btn ${isEditingHobbies ? 'account__accept-btn_active' : ''}`}
                                ></button>
                            </div>
                            <button 
                                type="button" 
                                aria-label="delete data" 
                                className="account__delete-btn"
                                onClick={() => handleReset('hobbies', 'hobbies')}
                            ></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>        
                </form>

                <form 
                    className="account__forms" 
                    onSubmit={(e) => handleSubmit(e, 'news')}
                    onKeyDown={(e) => handleKeyDown(e, 'news')}
                >
                    <div className="account__section">
                        <label className="account__label">News:</label>
                        {isEditingNews ? (
                            <textarea 
                                className="account__section_input"
                                id="news-account-section-input"
                                name="news"
                                type="text"
                                value={values.news || ''}
                                /*placeholder="Here you can add any interesting news in your field of interests.
                                For example: new invention, program and etc.
                                If you want to write more, please click *plus* ->"*/
                                onChange={handleChange}                        
                            />
                        ) : (
                            <div className="account__section_input" onDoubleClick={() => handleDoubleClick('news')}>
                                {values.news || ''}
                            </div>
                        )}
                    </div>
                    <div className="account__btns_forms">
                        <div className="account__redact-accept-delete">
                            <div className="account__redact-accept">
                                <button 
                                    type="button" 
                                    aria-label="redact data" 
                                    id="account-redact-btn-section-news" 
                                    className="account__redact-btn account__redact-btn_section-news"
                                    onClick={() => enableEditing('news')}
                                ></button>
                                <button 
                                    type="submit" 
                                    aria-label="accept data" 
                                    id="account-accept-btn-section-news" 
                                    className={`account__accept-btn ${isEditingNews ? 'account__accept-btn_active' : ''}`}
                                ></button>
                            </div>
                            <button 
                                type="button" 
                                aria-label="delete data" 
                                className="account__delete-btn"
                                onClick={() => handleReset('news', 'news')}
                            ></button>
                        </div>
                        <button type="button" aria-label="plus data" className="account__plus-btn"></button>
                    </div>     
                </form>
                </div>    
        </section> 
    )
}

export default Account;