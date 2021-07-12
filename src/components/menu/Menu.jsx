import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AnchorLink from '../anchor-link/AnchorLink';
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
          <Link
            to={PATHNAME.about}
            className="menu__link"
            onClick={handleClick}
          >
            {translation.about}
          </Link>
        </li>
        <li className="menu__item">
          <AnchorLink
            className="menu__anchor-link"
            elementToScrollId="projects"
            text={translation.projects}
            onClick={handleClick}
          />
        </li>
        <li className="menu__item">
          <AnchorLink
            className="menu__anchor-link"
            elementToScrollId="skills"
            text={translation.skills}
            onClick={handleClick}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
