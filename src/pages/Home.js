import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import HomeWave from '../components/waves/HomeWave';

function Home() {
  return (
    <>
      <div className='min-h-screen mt-10 md:mt-0 md:flex items-center relative mx-auto'>
        <div className='container mx-auto xl:px-20 pb-28'>
          <Hero />
          <HomeWave />
        </div>
      </div>
      <div className='bg-indigo-400 h-screen pt-5'>
        <Skills />
      </div>
    </>
  );
}

export default Home;
