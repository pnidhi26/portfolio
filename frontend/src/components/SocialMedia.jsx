import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrDocumentUser } from 'react-icons/gr';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a rel="noreferrer" href='' target="_blank">
        <GrDocumentUser />
      </a>
    </div>
    <div>
      <a rel="noreferrer" href='' target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a rel="noreferrer" href='https://github.com/pnidhi26' target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a rel="noreferrer" href='' target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
