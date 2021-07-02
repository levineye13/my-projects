import './Footer.scss';

const Footer = ({ mix = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${mix}`}>
      <p className="footer__copyright">&copy; Олег Жаров. {currentYear}.</p>
    </footer>
  );
};

export default Footer;
