import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrDocumentUser } from 'react-icons/gr';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a rel="noreferrer" href='https://drive.google.com/drive/u/2/folders/16mu_S8RHeuHBM9pr9MhgegGPIuDWsQnW' target="_blank">
        <GrDocumentUser />
      </a>
    </div>
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
      <a rel="noreferrer" href='https://www.instagram.com/prak.sx/' target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;