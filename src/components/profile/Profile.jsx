import React from 'react';
import { connect } from 'react-redux';
import './Profile.scss';
import avatar from './../../images/image-not-found.jpg';
import gitImg from './../../images/profile-git.svg';

const Profile = ({ user }) => {
  const { name, email, avatar_url } = user;

  return (
    <section className="profile content__profile">
      <div className="profile__avatar-wrapper">
        <img
          src={avatar_url || avatar}
          alt="Фото профиля."
          className="profile__avatar"
        />
      </div>
      <div className="profile__info">
        <p className="profile__name">{name}</p>
        <p className="profile__mail">{email}</p>
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
