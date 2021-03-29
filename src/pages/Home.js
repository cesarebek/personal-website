import React from 'react';
import Hero from '../components/Hero';
import LastProjects from '../components/LastProjects';
import { allProjects } from '../utils/data';
import HomeWave from '../components/waves/HomeWave';
//Animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

function Home() {
  const projects = allProjects.slice(0, 3);
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <div className='min-h-screen mt-10 md:mt-0 md:flex items-center relative mx-auto'>
        <div className='container mx-auto xl:px-20 pb-28'>
          <Hero />
          <HomeWave />
        </div>
      </div>
      <div className='bg-indigo-400 pt-5'>
        <LastProjects projects={projects} />
      </div>
    </motion.div>
  );
}

export default Home;
