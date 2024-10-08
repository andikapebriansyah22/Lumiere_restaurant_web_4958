import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Menu = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true,
    });

    sr.reveal(`.menu__content`, {
      interval: 200,
    });
  }, []);

  return (
    <section className="menu section bd-container" id="menu">
      <h2 className="section-title">Our Menu</h2>
      <div className="menu__container bd-grid">
        <div className="menu__content">
          <img src="./assets/img/plate1.png" alt="Dish 1" className="menu__img" />
          <h3 className="menu__name">Tasty Dish</h3>
          <span className="menu__preci">$15</span>
        </div>
        <div className="menu__content">
          <img src="/assets/img/plate2.png" alt="Dish 2" className="menu__img" />
          <h3 className="menu__name">Delicious Dish</h3>
          <span className="menu__preci">$20</span>
        </div>
        <div className="menu__content">
          <img src="/assets/img/plate3.png" alt="Dish 3" className="menu__img" />
          <h3 className="menu__name">Amazing Dish</h3>
          <span className="menu__preci">$18</span>
        </div>
        {/* Tambahkan item menu lainnya di sini */}
      </div>
    </section>
  );
};

export default Menu;
