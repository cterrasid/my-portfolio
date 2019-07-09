import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialNetwork from '../SocialNetwork';
import './styles.scss';

const Contact = () => {
  return (
    <section className="contact__container section" id="contact">
      <svg
        id="clouds"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M-5 100 Q 0 20 5 100 Z
         M0 100 Q 5 0 10 100
         M5 100 Q 10 30 15 100
         M10 100 Q 15 10 20 100
         M15 100 Q 20 30 25 100
         M20 100 Q 25 -10 30 100
         M25 100 Q 30 10 35 100
         M30 100 Q 35 30 40 100
         M35 100 Q 40 10 45 100
         M40 100 Q 45 50 50 100
         M45 100 Q 50 20 55 100
         M50 100 Q 55 40 60 100
         M55 100 Q 60 60 65 100
         M60 100 Q 65 50 70 100
         M65 100 Q 70 20 75 100
         M70 100 Q 75 45 80 100
         M75 100 Q 80 30 85 100
         M80 100 Q 85 20 90 100
         M85 100 Q 90 50 95 100
         M90 100 Q 95 25 100 100
         M95 100 Q 100 15 105 100 Z"
        />
      </svg>
      <h2 className="contact__title title">Contact me</h2>
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
      <Link smooth to="/#hero">
        Up
      </Link>
    </section>
  );
};

export default Contact;
