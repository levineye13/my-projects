import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Menu from '../menu/Menu';
import Sidebar from '../sidebar/Sidebar';
import { PATHNAME, LANGUAGES } from '../../utils/constants';
import { setLanguage } from '../../redux/actions';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();

  const [isButtonActive, setButtonActive] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.ru);

  const handleClickButtonMenu = () => {
    setButtonActive(!isButtonActive);
    setOpenMenu(!isOpenMenu);
  };

  const handleClickLanguage = ({ target }) => {
    setIsChecked(!isChecked);

    if (target.checked) {
      setCurrentLanguage(target.value);
    }

    const language = target.value;
    dispatch(setLanguage(language));
  };

  return (
    <header className="header">
      <a
        href={PATHNAME.root}
        className="header__link-logo"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="header__logo"
          viewBox="0 0 782 980"
        >
          <path d="M138 1c-21.4.4-39.1 1.2-42.9 1.9C62.7 9.1 29 36 13 68.5c-8.4 17.2-10 24.4-11.2 51C.3 150.8.3 828.8 1.7 860c.9 19.5 1.4 23.7 3.7 31.5 7.2 24.4 24.7 49.7 45.2 65.5 7 5.5 23.6 14.6 29.9 16.6 19.6 6 58.6 6.7 346.4 6.1 159.3-.3 242.4-.8 250.1-1.6 6.3-.6 14.4-1.9 18-2.9 32.9-9.6 60.2-34.1 76.5-68.5 7.1-14.9 7.4-17.2 8.5-54.7 1.5-51.3 1.8-605.8.3-614.3-1-6-1.7-7.4-6.7-13.1C762.4 212 606.2 60.1 560.1 17.2L541.7 0 358.1.2C257.1.3 158.1.7 138 1zm363 88.2c0 38.4 1.3 68.9 3.4 82.1 3.9 23.9 13.3 42 31.9 61.4 17.4 18.2 37.6 29.8 58.7 33.9 11.1 2.2 40.4 3.3 87.3 3.4h41.9l-.5 287.2c-.6 319.9-.6 320.6-7.2 333.8-4.8 9.3-19.4 21.9-34.3 29.4l-5.3 2.7-283.2-.4c-211.7-.2-284.5-.6-288.2-1.5-17-4-33.7-18.5-43.4-37.9l-3.1-6.2V102.8l4-7.6c5.2-10.1 11.5-17.9 19.7-24.7 8.4-6.9 15.2-10.3 23.4-11.7 8.5-1.4 107.8-2.4 266.2-2.6L501 56v33.2z" />
          <path d="M240.5 120.5c-11.5 2.5-22 8.5-33.3 19-7.8 7.2-12.7 14.4-15.9 23.6-2.4 6.7-2.7 8.8-2.7 22.2l-.1 14.7-2.9 2.3c-2.5 2-2.9 2.9-2.8 7.4.2 6 3.9 18.1 8.8 29 2 4.3 5.4 11.9 7.4 16.9 4.5 11.1 9.9 19.1 17.2 26 9 8.6 19.1 12.4 32.5 12.4 15.1 0 26.6-4.5 35.5-13.8 6.1-6.4 8-9.7 12.8-22 1.9-5.1 5-10.6 7.7-13.9 5.6-6.8 9.1-14.6 10.9-24.1 1.2-6.2 1.2-8.1-.1-13.5-1-4.3-1.5-12-1.5-24.7 0-26.1-2-32.2-12.3-39-2.7-1.7-7.9-5.9-11.5-9.2-13.8-12.5-31.7-17.3-49.7-13.3zM199.5 296.9c-24.3 11.1-53.8 26-57.1 28.7-5 4-9.7 10.8-12.3 17.9-2.5 6.6-3.7 15.7-5 37-.6 9.3-1.3 19.6-1.6 22.7l-.6 5.8h126.6c69.6 0 126.5-.3 126.5-.8 0-.4-.5-12.6-1-27.2-1.1-28.5-2-34.6-6.8-43.4-5.6-10.4-11.3-14.1-47.5-31.3-13.1-6.2-24.1-11.3-24.3-11.3-1 0-4.7 10-14.9 40.7-5.8 17.5-11.4 33.6-12.4 35.8l-1.8 4-2-4c-1.1-2.2-3.5-8.2-5.3-13.3l-3.3-9.3 5.2-10.7c2.8-5.9 5.1-12.1 5.1-13.7 0-3.5-4.4-9-8.5-10.5-4.4-1.7-13.2-1.2-17.5 1-8.2 4.2-8.7 8.2-3 21.6 2.4 5.6 4 11 4 13.3 0 4.4-6.7 26.1-8.1 26.1-1.4 0-3.5-4.8-7.4-17.5-13.5-43.6-20.4-63.5-22-63.5-.5 0-2.8.9-5 1.9zM216 461.9l-70.5.6-4.2 2.3c-10.9 5.8-16.8 15.1-16.8 26.2.1 4.3.7 7.6 1.8 9.8 3 5.4 9.5 11.2 16.5 14.5l6.7 3.2 151.5.3c154.3.3 321.1-1.1 335.5-2.8 16.2-1.9 18.5-3.3 23.1-13.5 4-8.6 3.9-16.7-.2-25.5-1.7-3.6-4-7.3-5.1-8.3-3.4-2.9-14.7-4.6-38.3-5.6-27.4-1.2-302.5-2-400-1.2zM156 577c-17.1 1.2-24.5 5.6-28.9 17.5-1.2 3-2.1 7.6-2.1 10.2 0 8.5 1.8 12.2 9.8 20.2l7.4 7.4 241.7-.6c144.7-.4 245.9-1 252.3-1.6 5.9-.5 12-1.7 13.6-2.5 7.2-3.7 13.7-16.2 12.9-24.8-.9-10.3-9.9-22.3-17.9-23.9-8.3-1.8-118.1-2.8-297.3-2.7-99.5.1-185.7.4-191.5.8zM175 691c-15.1.4-29.1 1.1-31.1 1.4-5.5 1.2-12.9 7.3-16.2 13.6-2.6 5-2.9 6.2-2.5 13.6.5 9.8 3.1 15 11.2 21.8l5.3 4.6h503.8l6-5.8c7.7-7.3 9.8-11.6 10.3-21.2.3-6.7.1-8.1-2.5-13-3.2-6.1-9.3-11.3-15.1-13-2-.6-16.7-1.5-32.7-2-33.4-1-395.3-1-436.5 0zM150.3 806c-11.5 1-18.1 4.2-23 11.3-8 11.8-6 25.5 5.4 37.5l4.8 5 146.1.7 146 .6 7.2-7.5c9.8-10.3 12.1-18 8.7-29.2-1.8-6-6.2-11.6-12-14.9-3.6-2.2-6.2-2.7-17.1-3.5-15.2-1.1-252.6-1.1-266.1 0z" />
        </svg>
      </a>
      <button className="header__menu-button" onClick={handleClickButtonMenu}>
        <span
          className={`header__button-element ${
            isButtonActive ? 'header__button-element_active' : ''
          }`}
        />
      </button>
      <Menu mix="header__menu" />
      <nav className="header__language-menu">
        <span className="header__current-language">{currentLanguage}</span>
        <ul className="header__language-list">
          <li className="header__language-item">
            <label className="header__language-label">
              <input
                type="radio"
                className="header__language-hidden"
                name="hidden-radio"
                checked={!isChecked}
                onChange={handleClickLanguage}
                value={LANGUAGES.ru}
              />
              <span className="header__language-text">{LANGUAGES.ru}</span>
            </label>
          </li>
          <li className="header__language-item">
            <label className="header__language-label">
              <input
                type="radio"
                className="header__language-hidden"
                name="hidden-radio"
                checked={isChecked}
                onChange={handleClickLanguage}
                value={LANGUAGES.en}
              />
              <span className="header__language-text">{LANGUAGES.en}</span>
            </label>
          </li>
        </ul>
      </nav>
      <Sidebar isOpen={isOpenMenu} onClose={handleClickButtonMenu} />
    </header>
  );
};

export default Header;
