import React from 'react';
import './about-page.scss';
import './club-page.scss';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Fade } from 'react-reveal';
import GirlPizza from './Girl-Pizza.png';
import SloHacks from './slo_hack_2020_recap_final_v1.mp4';
import Coders from './Coders-Focused.png';
import Cloud1 from './Cloud1.svg';
import Cloud2 from './Cloud2.svg';
import Cloud3 from './Cloud3.svg';
import Triangle1 from './Triangle1.svg';
import Triangle2 from './Triangle2.svg';
import Triangle3 from './Triangle3.svg';
import Triangle4 from './Triangle4.svg';
// import { Col } from 'aws-amplify-react/lib-esm/AmplifyTheme';

export default () => (
  <div>
    <Container className="body">
      <Fade>
        <Row>
          <Col className="leftcol content-large">
            <div className="header">
              <h2>Hosting hackathons</h2>
              <h2>with purpose.</h2>
            </div>
            <p>
              SLO Hacks organizes events year-round dedicated
              towards building an inclusive hacker community
              and environment that empowers students with the
              necessary tools to dream, code, and build projects
              that contribute to social good.
            </p>

          </Col>
          <Col className="rightcol">
            <ReactPlayer loop url={SloHacks} type="video/mp4" playing muted controls width="95%" />
            <div className="ml-2 content-mobile">
              <div className="header">
                <h2>Hosting hackathons</h2>
                <h2>with purpose.</h2>
              </div>
              <p>
                SLO Hacks organizes events year-round dedicated
                towards building an inclusive hacker community
                and environment that empowers students with the
                necessary tools to dream, code, and build projects
                that contribute to social good.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="leftcol content-large">
            <Col>
              <img src={Coders} className="circle-image coders" alt="coders" />
              <img src={Cloud3} className="cloud3" alt="cloud" />
              <img src={Triangle4} className="tri4" alt="triangle vector" />
            </Col>
            <Col>
              <img src={Cloud1} className="cloud1" alt="cloud" />
              <img src={GirlPizza} className="circle-image pizza-girl" alt="girl and pizza" />
              <img src={Triangle1} className="tri1" alt="triangle vector" />
              <img src={Triangle2} className="tri2" alt="triangle vector" />
              <img src={Cloud2} className="cloud2" alt="cloud" />
              <img src={Triangle3} className="tri3" alt="triangle vector" />
            </Col>
          </Col>

          <Col className="leftcol content-mobile">
            <Col>
              <img src={Coders} className="circle-image coders" alt="coders" />
              <img src={Cloud3} className="cloud3" alt="cloud" />
              <img src={Triangle4} className="tri4" alt="triangle vector" />
            </Col>
            <Col>
              <img src={Cloud1} className="cloud1" alt="cloud" />
              <img src={GirlPizza} className="circle-image pizza-girl" alt="girl and pizza" />
              <img src={Triangle1} className="tri1" alt="triangle vector" />
              <img src={Triangle2} className="tri2" alt="triangle vector" />
              <img src={Cloud2} className="cloud2" alt="cloud" />
              <img src={Triangle3} className="tri3" alt="triangle vector" />
            </Col>

            <div className="ml-4">
              <div className="header">
                <h2>Building the</h2>
                <h2>hacker community.</h2>
              </div>
              <p>
                Our vision is to engage students of all backgrounds
                who demonstrate passion for computer science and
                technology in an inclusive educational environment
                that builds community, fosters fun, and leaves a
                lasting impact on students.
              </p>
            </div>
          </Col>

          <Col className="rightcol content-large building-hacker-community">
            <div className="header">
              <h2>Building the</h2>
              <h2>hacker community.</h2>
            </div>
            <p>
              Our vision is to engage students of all backgrounds
              who demonstrate passion for computer science and
              technology in an inclusive educational environment
              that builds community, fosters fun, and leaves a
              lasting impact on students.
            </p>
          </Col>
        </Row>
      </Fade>
    </Container>
  </div>
);
