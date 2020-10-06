import React from 'react';
import { Link } from 'react-scroll';
import logo from './Logo.png';
import './Navbar.css';

export default () => (
  <div className="wrap d-flex p-5">
    <img
      src={logo}
      alt=""
      width="177"
      height="72"
    />
    <div>
      <span>
        <Link
          className="nav-labels m-4 mt-5"
          activeClass="active"
          to="club-about-container"
          smooth
          duration={500}
        >
          About
        </Link>
      </span>
      <span>
        <Link
          className="nav-labels m-4"
          activeClass="active"
          to="club-events-container"
          smooth
          duration={500}
        >
          Events
        </Link>
      </span>
      <span>
        <Link
          className="nav-labels m-4"
          activeClass="active"
          to="club-sponsors-container"
          smooth
          duration={500}
        >
          Sponsors
        </Link>
      </span>
      <span>
        <Link
          className="nav-labels m-4"
          activeClass="active"
          to="club-faq-container"
          smooth
          duration={500}
        >
          FAQ
        </Link>
      </span>
      <span>
        <Link
          className="nav-labels m-4"
          activeClass="active"
          to="club-team-container"
          smooth
          duration={500}
        >
          Team
        </Link>
      </span>
    </div>
  </div>

);
