import React from 'react';
import './club-page.scss';
import './EventComponent.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';

export default () => (
  <div className="App">
    <Container fluid>
      <Fade>
        <Row className="responsive-padding">
          <Col xs={12} s={12} md={7} lg={6} xl={6}>
            <h2 className="pb-4">Two events year round.</h2>
            <p className="pb-2 lg-mr-3">
              Our team typically hosts two events during the academic school year,
              one for fall quarter and another during winter quarter. In response
              to
              {' '}
              <b>COVID-19</b>
              , we have amended this year’s schedule by shifting to winter
              and spring quarter, respectively.
            </p>
            <div className="content-mobile">
              <img className="event-image" src={`${process.env.PUBLIC_URL}/events-pic.jpeg`} alt="past event" />
              <img className="drop-shadow cloud-1" src={`${process.env.PUBLIC_URL}/Cloud-Vector 3.png`} alt="cloud pic" />
              <img className="drop-shadow cloud-2" src={`${process.env.PUBLIC_URL}/Cloud-Vector 1.png`} alt="cloud pic" />
            </div>
            <p className="pb-2 lg-mr-3">
              In the
              {' '}
              <b>fall</b>
              , we host an introductory hackathon event catered towards students
              with little to no experience with computer science. We strive to reduce the
              barriers of entry for students from all backgrounds with the necessary mentorship
              and guidance to inspire students to learn about computer science.
            </p>
            <p className="pb-2 lg-mr-3">
              In the
              {' '}
              <b>winter</b>
              , we host our flagship hackathon that spans 72 hours and welcomes
              over 300 students from all across the nation. At this event, hackers will
              collaborate with others and build incredible projects while working with mentors
              and coaches to further develop their coding skills.
            </p>
          </Col>
          <Col className="content-large" xs={0} s={0} md={5} lg={6} xl={6}>
            <img className="event-image" src={`${process.env.PUBLIC_URL}/events-pic.jpeg`} alt="past event" />
            <img className="drop-shadow cloud-1" src={`${process.env.PUBLIC_URL}/Cloud-Vector 3.png`} alt="cloud pic" />
            <img className="drop-shadow cloud-2" src={`${process.env.PUBLIC_URL}/Cloud-Vector 1.png`} alt="cloud pic" />
          </Col>
        </Row>
      </Fade>
    </Container>
  </div>
);
