import React from 'react';
import Banner from '../components/about/Banner';
import HardSkills from '../components/about/HardSkills';
import Me from '../components/about/Me';
import Slider from '../components/about/Slider';
//Animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

function About() {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Banner />
      <div className='px-3'>
        <Me />
        <HardSkills />
        <Slider />
      </div>
    </motion.div>
  );
}

export default About;
