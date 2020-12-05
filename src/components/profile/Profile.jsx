import React, { useContext } from 'react';
import { UserContext } from './../../context/UserContext';
import './Profile.scss';
import avatar from './../../images/profile-avatar.jpg';
import gitImg from './../../images/profile-git.svg';

const Profile = function () {
  const userInfo = useContext(UserContext);
  const { name, email, avatar_url } = userInfo || '';

	return (
		<section className="profile section page__profile">
			<div className="profile__avatar-wrapper">
				<img src={avatar_url || avatar} alt="Фото профиля." className="profile__avatar" />
			</div>
			<div className="profile__info">
        <p className="profile__name">{name}</p>
        <p className="profile__mail">{email}</p>
				<a className="profile__link" href="https://github.com/levineye13" target="_blanck">
					<img className="profile__link-img" src={gitImg} alt="Значок Гитхаба." />
				</a>
			</div>
		</section>
	);
}

export default Profile;