import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Services = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true,
    });

    sr.reveal(`.services__content`, {
      interval: 200,
      scale: 0.9, // Menambahkan efek zoom
    });
  }, []);

  return (
    <section className="services section bd-container" id="services">
      <span className="section-subtitle">Offering</span>
      <h2 className="section-title">Our Amazing Services</h2>
      <div className="services__container bd-grid">
        <div className="services__content">
        <img src="/assets/img/food.svg" alt="Excellent Food" className="services__icon" />
          <h3 className="services__title">Excellent Food</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with the best and delicious food in the city.
          </p>
        </div>
        <div className="services__content">
        <img src="/assets/img/fast.svg" alt="Excellent Food" className="services__icon" />
          <h3 className="services__title">Fast Delivery</h3>
          <p className="services__description">
            Enjoy our prompt delivery service to your doorstep, ensuring your food arrives hot and fresh.
          </p>
        </div>
        <div className="services__content">
        <img src="/assets/img/catering.svg" alt="Excellent Food" className="services__icon" />
          <h3 className="services__title">Catering Services</h3>
          <p className="services__description">
            We provide catering services for events of any size, with a menu tailored to your needs. Hope you enjoy our food.
          </p>
        </div>
        <div className="services__content">
        <img src="/assets/img/menus.svg" alt="Excellent Food" className="services__icon" />
          <h3 className="services__title">Custom Menus</h3>
          <p className="services__description">
            Let us create a custom menu for your special event, ensuring a unique dining experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
