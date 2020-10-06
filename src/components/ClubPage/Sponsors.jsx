import React from 'react';
import {
  Row, Col, Container, Button, Image,
} from 'react-bootstrap';
import './club-page.scss';
import { Fade } from 'react-reveal';

const sponsorsEmail = 'team@slohacks.com';

export default () => (
  <div>
    <Container className="pl-4 pr-4">
      <Fade>
        <Row style={{ alignItems: 'center' }}>
          <Col lg={7}>
            <h2 className="ml-0 mb-5">Interested in sponsoring us?</h2>
            <p className="ml-0 mb-5">
              Our vision is to engage students of all backgrounds who
              demonstrate passion for computer science and technology in an inclusive educational
              environment that builds community, fosters fun, and leaves a lasting impact on
              students.
            </p>
            <Button
              onClick={() => { window.location.href = `mailto:${sponsorsEmail}`; }}
              style={{ color: 'white', background: '#4B4C77' }}
              size="lg"
            >
              Become a sponsor
            </Button>
          </Col>
          <Col lg={5}>
            <Image src="ClubPage_Assets/sponsor 1.png" style={{ height: 'auto', width: 'auto' }} />
          </Col>
        </Row>

      </Fade>
    </Container>
  </div>
);
