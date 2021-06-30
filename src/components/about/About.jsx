import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SectionTitle from '../section-title/SectionTitle';
import { getAge } from '../../utils/utils';
import { YANDEX_LINK, MIREA_LINK } from '../../utils/constants';
import './About.scss';

const About = ({ user, mix = '' }) => {
  const { avatar_url } = user;
  const history = useHistory();

  const age = getAge('1999.04.13');

  return (
    <section className={`about ${mix}`}>
      <SectionTitle text="Обо мне" />
      <button className="about__back" type="button" onClick={history.goBack}>
        &larr; Назад
      </button>
      <p className="about__description">
        Всем привет! Я являюсь начинающим веб-разработчиком. В 2021 окончил
        университет{' '}
        <a
          className="about__link"
          href={MIREA_LINK}
          target="_blank"
          rel="noreferrer"
        >
          РТУ МИРЭА
        </a>{' '}
        и получил степень бакалавра. Успешно окончил курсы Яндекс.Практикума по
        программе{' '}
        <a
          className="about__link"
          href={YANDEX_LINK}
          target="_blank"
          rel="noreferrer"
        >
          веб-разработчик.
        </a>{' '}
        Увлекаюсь программированием, игрой на гитаре.
      </p>
      <div className="about__container">
        <img className="about__avatar" src={avatar_url} alt="Аватарка" />
        <ul className="about__list">
          <li className="about__item">
            <p className="about__text">Языки: Русский</p>
          </li>
          <li className="about__item">
            <p className="about__text">Возраст: {age || ''}</p>
          </li>
          <li className="about__item">
            <p className="about__text">Образование: высшее</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(About);
