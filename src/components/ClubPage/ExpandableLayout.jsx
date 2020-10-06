import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import './FAQ.scss';

const FAQHeader = styled.button`
  font-family: proxima-nova,sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 25px;
  line-height: 25px;
  text-align: left;

  color: #FFFFFF;

  padding: 0px;
  background: transparent;
  border: none;
  :focus {
    outline: none;
  }
`;

export default function ExpandableLayout(props) {
  const {
    title, body, className, initiallyExpanded,
  } = props;

  const [expanded, setExpanded] = useState(initiallyExpanded);

  return (
    <Fade>
      <div className={className}>
        <FAQHeader className="mb-3" onClick={() => setExpanded(!expanded)}>
          {title}
          {' '}
          {expanded ? <FontAwesomeIcon size="xs" style={{ color: '#C4C4C4' }} icon={faCaretUp} /> : <FontAwesomeIcon size="xs" style={{ color: '#C4C4C4' }} icon={faCaretDown} />}
        </FAQHeader>
        <CSSTransition
          in={expanded}
          unmountOnExit
          timeout={750}
          classNames="expandable-layout-text"
        >
          <p>{body}</p>
        </CSSTransition>
      </div>
    </Fade>
  );
}

ExpandableLayout.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  initiallyExpanded: PropTypes.bool,
};

ExpandableLayout.defaultProps = {
  className: '',
  initiallyExpanded: false,
};
