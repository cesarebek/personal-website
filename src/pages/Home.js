import React from 'react';
import Hero from '../components/Hero';
import LastProjects from '../components/LastProjects';
import { allProjects } from '../utils/data';
import HomeWave from '../components/waves/HomeWave';

function Home() {
  const projects = allProjects.slice(0, 3);
  return (
    <>
      <div className='min-h-screen mt-10 md:mt-0 md:flex items-center relative mx-auto'>
        <div className='container mx-auto xl:px-20 pb-28'>
          <Hero />
          <HomeWave />
        </div>
      </div>
      <div className='bg-indigo-400 pt-5'>
        <LastProjects projects={projects} />
      </div>
    </>
  );
}

export default Home;
