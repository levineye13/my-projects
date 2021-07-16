import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PATHNAME } from '../../utils/constants';
import './Menu.scss';
import translationData from '../../translation';

const Menu = ({ mix = '', type = 'row', callback }) => {
  const language = useSelector((state) => state.language);
  const [isColumn, setIsColumn] = useState(false);

  const translation = translationData.menu[language];

  useEffect(() => {
    if (type === 'column') {
      setIsColumn(true);
    }
  }, []);

  const handleClick = () => {
    if (callback) {
      callback();
    }
  };

  return (
    <nav
      className={`menu ${
        isColumn ? 'menu_type_column' : 'menu_type_row'
      } ${mix}`}
    >
      <ul
        className={`menu__list ${
          isColumn ? 'menu__list_type_column' : 'menu__list_type_row'
        }`}
      >
        <li className="menu__item">
          <NavLink
            exact
            to={PATHNAME.root}
            className="menu__link"
            activeClassName="menu__link_active"
            onClick={handleClick}
          >
            {translation.main}
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to={PATHNAME.about}
            className="menu__link"
            activeClassName="menu__link_active"
            onClick={handleClick}
          >
            {translation.about}
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to={PATHNAME.projects}
            className="menu__link"
            activeClassName="menu__link_active"
            onClick={handleClick}
          >
            {translation.projects}
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to={PATHNAME.skills}
            className="menu__link"
            activeClassName="menu__link_active"
            onClick={handleClick}
          >
            {translation.skills}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
