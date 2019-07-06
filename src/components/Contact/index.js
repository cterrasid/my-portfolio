import React from 'react';
import SocialNetwork from '../SocialNetwork';
import './styles.scss';

const Contact = () => {
  return (
    <section className="contact__container" id="contact">
      <ul className="contact__social-list">
        <li>
          <SocialNetwork
            url="https://www.linkedin.com/in/claretteterrasidiaz/"
            icon="fab fa-linkedin-in"
          />
        </li>
        <li>
          <SocialNetwork
            url="https://github.com/cterrasid"
            icon="fab fa-github-alt"
          />
        </li>
        <li>
          <SocialNetwork
            url="https://twitter.com/clarettetedi"
            icon="fab fa-twitter"
          />
        </li>
        <li>
          <SocialNetwork
            url="mailto:clarette.terrasi@gmail.com"
            icon="fas fa-envelope"
          />
        </li>
      </ul>
    </section>
  );
};

export default Contact;
