import React from 'react';
import { useParams } from 'react-router-dom';
import { allProjects } from '../utils/data';
import HomeWave from '../components/waves/HomeWave';
import Banner from '../components/projectSection/Banner';
import Screenshots from '../components/projectSection/Screenshots';
//Animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

function Project() {
  const params = useParams();
  // eslint-disable-next-line
  const project = allProjects.find((project) => project.id == params.id);
  console.log(project);
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <div className='relative h-56 sm:h-44'>
        <div className='container mx-auto pb-40'>
          <h1 className='text-4xl font-semibold mt-5 px-3 pb-20'>
            {project.title}
          </h1>
        </div>
        <HomeWave />
      </div>
      <div className='bg-indigo-400 min-h-screen'>
        <Banner project={project} />
        {project.screenshots && (
          <Screenshots screenshots={project.screenshots} />
        )}
      </div>
    </motion.div>
  );
}

export default Project;
