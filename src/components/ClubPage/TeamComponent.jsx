import React from 'react';
import './TeamComponent.css';
import { Fade } from 'react-reveal';

export default () => (
  <Fade>
    <div className="main-flex m-3 mt-5 p-3">
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
    </div>
    <div className="main-flex m-3 p-3">
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
    </div>
    <div className="main-flex m-3 mb-5 p-3">
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
      <img className="avatar mx-4" src="https://www.w3schools.com/howto/img_avatar.png" alt="oops" />
    </div>

    <div className="main-flex social-media-container m-3 p-3">
      <a href="https://www.facebook.com/slohacks" target="_blank" rel="noopener noreferrer">
        <img className="social-media-icon m-2" src={`${process.env.PUBLIC_URL}/facebook-icon.png`} alt="" />
      </a>
      <a href="https://twitter.com/slohacks" target="_blank" rel="noopener noreferrer">
        <img className="social-media-icon m-2" src={`${process.env.PUBLIC_URL}/social-tw-icon.png`} alt="" />
      </a>
      <a href="https://www.instagram.com/slo_hacks/" target="_blank" rel="noopener noreferrer">
        <img className="social-media-icon m-2" src={`${process.env.PUBLIC_URL}/ig-icon.png`} alt="" />
      </a>
      <a href="https://www.linkedin.com/company/slohacks/" target="_blank" rel="noopener noreferrer">
        <img className="social-media-icon m-2" src={`${process.env.PUBLIC_URL}/linkedin-icon.png`} alt="" />
      </a>
    </div>
  </Fade>
);
