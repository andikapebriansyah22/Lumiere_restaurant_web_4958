import { useEffect } from 'react';  // Tambahkan ini
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 200) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <Link to="/" className="nav__logo">Lumière Kitchen</Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
            <li className="nav__item"><Link to="/menu" className="nav__link">Menu</Link></li>
            <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
            <li className="nav__item"><Link to="/Services" className="nav__link">Services</Link></li>
            <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
