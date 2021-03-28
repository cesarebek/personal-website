import React from 'react';
import Banner from '../components/about/Banner';
import HardSkills from '../components/about/HardSkills';
import Me from '../components/about/Me';
import Slider from '../components/about/Slider';

function About() {
  return (
    <div>
      <Banner />
      <div className='px-3'>
        <Me />
        <HardSkills />
        <Slider />
      </div>
    </div>
  );
}

export default About;
