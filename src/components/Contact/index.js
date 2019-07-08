import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialNetwork from '../SocialNetwork';
import './styles.scss';

const Contact = () => {
  return (
    <section className="contact__container section" id="contact">
      <svg
        id="curveUpColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="50"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
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
