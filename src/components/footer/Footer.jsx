import './Footer.scss';

const Footer = function () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section page__footer">
      <p className="footer__copyright">&copy; Олег Жаров. {currentYear}.</p>
    </footer>
  );
};

export default Footer;
