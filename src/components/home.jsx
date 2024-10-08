import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true,
    });

    // Animasi untuk bagian home
    sr.reveal(`.home__data, .home__img`, {
      interval: 200,
    });

    // Animasi untuk section menu
    sr.reveal(`.menu__content`, {
      interval: 200,
      duration: 1500,
      scale: 0.8,  // Menambahkan efek scale
      easing: 'ease-in-out',  // Menambahkan easing
    });
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__data">
            <h1 className="home__title">Lumière</h1>
            <h2 className="home__subtitle">Bringing You a Joyful Taste Experience.</h2>
            <a href="#menu" className="button">View Menu</a>
          </div>
          <img src="/assets/img/home.png" alt="Home" className="home__img" />
        </div>
      </section>

      <section className="menu section bd-container" id="menu">
        <h2 className="section-title">Our Menu</h2>
        <div className="menu__container bd-grid">
          <div className="menu__content">
            <img src="/assets/img/plate1.png" alt="Dish 1" className="menu__img" />
            <h3 className="menu__name">Blooming Salad</h3>
            <span className="menu__preci">$15</span>
          </div>
          <div className="menu__content">
            <img src="/assets/img/plate2.png" alt="Dish 2" className="menu__img" />
            <h3 className="menu__name">Kamisato Special Salad</h3>
            <span className="menu__preci">$20</span>
          </div>
          <div className="menu__content">
            <img src="/assets/img/plate3.png" alt="Dish 3" className="menu__img" />
            <h3 className="menu__name">Fragrant Salad</h3>
            <span className="menu__preci">$18</span>
          </div>
          {/* Tambahkan item menu lainnya di sini */}
        </div>
      </section>
    </>
  );
};

export default Home;
