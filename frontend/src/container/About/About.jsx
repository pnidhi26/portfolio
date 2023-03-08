import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   {title: 'Problem Solving', description: 'I am a developer', imgUrl: images.about03},
//   {title: 'Frontend Development', description: 'I am a developer', imgUrl: images.about02},
//   {title: 'Backend Development', description: 'I am a developer', imgUrl: images.about04},
//   {title: 'Machine Learning/ AI', description: 'I am a developer', imgUrl: images.about01},
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>user friendly Applications</span> <br />means  <span> (n) X growth in Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
// export default About;
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);