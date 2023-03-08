import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a rel="noreferrer" href='https://www.linkedin.com/in/pnidhi26/' target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a rel="noreferrer" href='https://github.com/pnidhi26' target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a rel="noreferrer" href='https://www.instagram.com/prakashx26/' target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;