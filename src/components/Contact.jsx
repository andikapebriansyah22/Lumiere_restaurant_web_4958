import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      reset: true,
    });

    sr.reveal(`.contact__container`, {
      interval: 200,
    });

    sr.reveal(`.contact__form`, {
      interval: 200,
      origin: 'left',
      distance: '50px',
    });

    sr.reveal(`.contact__image`, {
      interval: 200,
      origin: 'right',
      distance: '50px',
    });
  }, []);

  return (
    <section className="contact section bd-container" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact__container bd-grid">
        <p className="contact__description">We are always here to serve you. Feel free to reach out!</p>

        <div className="contact__form">
          <input type="text" placeholder="Your Name" className="contact__input" required />
          <input type="email" placeholder="Your Email" className="contact__input" required />
          <textarea placeholder="Your Message" className="contact__textarea" required></textarea>
          <a href="mailto:info@tasty.com" className="button contact__button">Send Email</a>
        </div>

        <img src="/assets/img/truck.svg" alt="Contact Us" className="contact__image" />
      </div>
    </section>
  );
};

export default Contact;
