import React from 'react';
import './club-page.scss';
import Navbar from './Navbar';
import Landing from './Landing';
import AboutPage from './AboutPage';
import Sponsors from './Sponsors';
import FAQ from './FAQ';
import TeamComponent from './TeamComponent';
import EventComponent from './EventComponent';
import { ReactComponent as Mountain } from './Mountain.svg';
import { ReactComponent as FirstMountain } from './Mountain-1.svg';
import { ReactComponent as MountainTwo } from './Mountain-2.svg';
import { ReactComponent as MountainThree } from './Mountain-3.svg';
import { ReactComponent as MountainFour } from './Mountain-4.svg';
import { ReactComponent as Clouds } from './Group 3.svg';

export default () => (
  <div className="club-webpage">
    <section className="club-landing-container">
      <div>
        <Navbar />
        <Landing />
      </div>
    </section>

    <div className="gradient-sections">
      <Clouds style={{
        position: 'absolute', top: '75vh', left: '0', height: 'auto', width: '100vw',
      }}
      />
      <FirstMountain style={{
        position: 'absolute', top: '75vh', left: '40%', height: 'auto', width: '40%',
      }}
      />
      <Mountain style={{
        position: 'absolute', top: '2300px', width: '10%', height: 'auto', minWidth: '100px',
      }}
      />
      <MountainTwo style={{
        position: 'absolute', top: '3600px', left: '80%', width: '20%', height: 'auto', minWidth: '150px',
      }}
      />
      <MountainThree style={{
        position: 'absolute', top: '1500px', left: '80%', width: '20%', height: 'auto', minWidth: '150px',
      }}
      />
      <MountainFour style={{
        position: 'absolute', top: '1550px', left: '70%', width: '25%', height: 'auto', minWidth: '150px',
      }}
      />
      <section className="club-about-container">
        <AboutPage />
      </section>

      <section className="club-events-container">
        <EventComponent />
      </section>

      <section className="club-sponsors-container">
        <Sponsors />
      </section>

      <section className="club-faq-container">
        <FAQ />
      </section>

      <section className="club-team-container club-team-bubble">
        <h2 className=" pt-5 h2-inversed">
          Meet the team
          <TeamComponent />
        </h2>
      </section>
    </div>

  </div>
);
