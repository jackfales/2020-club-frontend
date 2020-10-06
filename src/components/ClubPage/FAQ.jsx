import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import ExpandableLayout from './ExpandableLayout';

export default () => {
  const StyledContainer = styled(Container)`
    padding-left: 10%;
    padding-right 10%;
  `;

  return (
    <div>
      <Fade>
        <StyledContainer fluid>

          <h2 className="ml-0 mb-5">Frequently asked questions</h2>

          <Row>
            <Col xs={12} s={12} md={6} lg={6} xl={6}>

              <ExpandableLayout
                className="mb-5"
                title="What is a hackathon?"
                body="A hackathon is an event where students with common interests
              from  all over the nation come together and collaborate on a
              project over a 36-hour period."
              />

              <ExpandableLayout
                className="mb-5"
                title="What can I build?"
                body="If you can think it, you can build it. We encourage students
              to build technological projects, whether they be software or
              hardware."
              />

              <ExpandableLayout
                className="mb-5"
                title="How will I get there?"
                body="We will be providing buses for Californian hackers, and
              case-by-case flight reimbursements for out-of-state hackers. Check
              your email upon acceptance for more details!"
              />

              <ExpandableLayout
                className="mb-5"
                title="When do hacker applications open?"
                body="We will announce hacker applications in the upcoming months.
              Sign up for our mailing list or follow us on social media for
              future updates!"
              />

            </Col>

            <Col xs={12} s={12} md={6} lg={6} xl={6}>
              <ExpandableLayout
                className="mb-5"
                title="Who can come?"
                body="All college students (both graduate and undergraduate) are
              welcome! No prior experience is necessary."
              />

              <ExpandableLayout
                className="mb-5"
                title="How much does it cost?"
                body="Food and admission are absolutely FREE! Buses will be
              provided for students traveling from Cal Poly."
              />

              <ExpandableLayout
                className="mb-5"
                title="What opportunities will I get out of SLO Hacks?"
                body="There will be networking events, workshops, and mentorship
              from industry leaders. You can also build an awesome project and
              make long-lasting friendships!"
              />
            </Col>
          </Row>
        </StyledContainer>
      </Fade>
    </div>
  );
};
