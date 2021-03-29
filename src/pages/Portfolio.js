import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../utils/data';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { BsFilterRight } from 'react-icons/bs';
import PortfolioWave from '../components/waves/PortfolioWave';
import '../assets/styles/waves/wave-portfolio.css';
//Animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

function Portfolio() {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
      className='py-10 bg-indigo-400 px-3 relative'
    >
      <div className='container mx-auto pb-32'>
        <div className='pb-10 flex justify-between items-end'>
          <div>
            <p className='text-5xl text-white font-semibold'>All My projects</p>
            <p className='text-2xl text-white mt-2'>developed with Love.</p>
          </div>
          <div className='p-2 text-white flex items-center space-x-1 cursor-pointer'>
            <BsFilterRight className='text-lg' />
            <span>Filter</span>
          </div>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {allProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <PortfolioWave className='mt-20' />
    </motion.div>
  );
}

export default Portfolio;
