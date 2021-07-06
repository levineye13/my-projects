import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.scss';
import avatar from './../../images/image-not-found.jpg';
import gitImg from './../../images/profile-git.svg';

const Profile = () => {
  const state = useSelector((state) => state.user);

  return (
    <section className="profile content__profile">
      <div className="profile__avatar-wrapper">
        <img
          src={state.avatarUrl || avatar}
          alt="Фото профиля."
          className="profile__avatar"
        />
      </div>
      <div className="profile__info">
        <p className="profile__name">{state.name || ''}</p>
        <p className="profile__mail">{state.email || ''}</p>
        <a
          className="profile__link"
          href="https://github.com/levineye13"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="profile__link-img"
            src={gitImg}
            alt="Значок Гитхаба."
          />
        </a>
      </div>
    </section>
  );
};

export default Profile;
