import './Profile.scss';
import avatar from './../../images/profile-avatar.jpg';
import gitImg from './../../images/profile-git.svg';

const Profile = function () {
	return (
		<section className="profile section page__profile">
			<div className="profile__avatar-wrapper">
				<img src={avatar} alt="Фото профиля." className="profile__avatar" />
			</div>
			<div className="profile__info">
				<p className="profile__name">Oleg Zharov</p>
				<p className="profile__mail">levineye@gmail.com</p>
				<a className="profile__link" href="https://github.com/levineye13" target="_blanck">
					<img className="profile__link-img" src={gitImg} alt="Значок Гитхаба." />
				</a>
			</div>
		</section>
	);
}

export default Profile;