/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './club-page.scss';
import './Landing.scss';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import landingImg from './art.png';

export default () => (

  <div>
    <Container fluid>
      <Row>
        <div className="col-xl-6 align-self-end">
          <form>
            <div className="ml-5">
              <Row>
                <label htmlFor="email-box" className="form-label ml-5 mb-5">SLO Hacks 2021 brings a new event.</label>
              </Row>
              <Row>
                <input type="email" className="email-form ml-5 mr-4" id="email-box" placeholder="Enter your email to hear the latest news from SLO Hacks." />
                <FontAwesomeIcon icon={faArrowCircleRight} size="3x" color="#5D5EAA" />
              </Row>
            </div>
          </form>
        </div>
        <Col xl={6}>
          <img
            src={landingImg}
            className="landingImg ml-5"
            alt=""
          />
        </Col>
      </Row>
    </Container>

  </div>

);
