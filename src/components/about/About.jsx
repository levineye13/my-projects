import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SectionTitle from '../section-title/SectionTitle';
import { getAge } from '../../utils/utils';
import './About.scss';
import translationData from '../../translation';

const About = ({ mix = '' }) => {
  const state = useSelector((state) => ({
    user: state.user,
    language: state.language,
  }));

  const history = useHistory();

  const translation = translationData.about[state.language];
  const age = getAge('1999.04.13');

  return (
    <section className={`about ${mix}`}>
      <SectionTitle text={translation.title} />
      <button className="about__back" type="button" onClick={history.goBack}>
        &larr; {translation.back}
      </button>
      <p className="about__description">{translation.description}</p>
      <div className="about__container">
        <img
          className="about__avatar"
          src={state.user.avatarUrl}
          alt="Аватарка"
        />
        <ul className="about__list">
          <li className="about__item">
            <p className="about__text">
              {translation.language.key}: {translation.language.value}
            </p>
          </li>
          <li className="about__item">
            <p className="about__text">
              {translation.age}: {age || ''}
            </p>
          </li>
          <li className="about__item">
            <p className="about__text">
              {translation.education.key}: {translation.education.value}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
