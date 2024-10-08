import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true,
    });

    sr.reveal(`.about__data, .about__img`, {
      interval: 200,
    });
  }, []);

  return (
    <section className="about section bd-container" id="about">
      <div className="about__container  bd-grid">
        <div className="about__data">
          <span className="section-subtitle about__initial">About us</span>
          <h2 className="section-title about__initial">We cook the best tasty food</h2>
          <p className="about__description">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
          <a href="#menu" className="button">Explore history</a>
        </div>
        <img src="/assets/img/about.jpg" alt="About Us" className="about__img" />
      </div>
    </section>
  );
};

export default About;
