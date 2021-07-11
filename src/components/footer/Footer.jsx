import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.scss';

const Footer = ({ mix = '' }) => {
  const user = useSelector((state) => state.user);

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${mix}`}>
      <p className="footer__copyright">
        &copy; {user.name}. {currentYear}.
      </p>
    </footer>
  );
};

export default Footer;
