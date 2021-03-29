import React from 'react';
import profile from '../assets/images/profile.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
//Animations
import { motion } from 'framer-motion';
import { titleAnim, fade } from '../utils/animations';

function Hero() {
  return (
    <section className='lg:flex justify-between items-center px-3 container mx-auto xl:px-20 pb-28'>
      <div className='w-full lg:w-3/5 xl:w-1/2 flex-shrink-0 space-y-7'>
        <div className='overflow-hidden'>
          <motion.p
            variants={titleAnim}
            className='-mb-3 font-medium inline-block'
          >
            I'm Cezary Bek,
          </motion.p>
        </div>
        <div className='overflow-hidden'>
          <motion.p
            variants={titleAnim}
            className='uppercase font-medium inline-block'
          >
            Junior full stack developer
          </motion.p>
        </div>
        <div className='overflow-hidden'>
          <motion.p
            variants={titleAnim}
            className='text-5xl sm:text-7xl text-gray-900 font-bold lg:leading-tight'
          >
            I design digital crafts for clients.
          </motion.p>
        </div>
        <motion.div
          variants={fade}
          className='pt-6 transform duration-300 hover:-translate-y-2 hover:shadow-3xl inline-block'
        >
          <Link
            className='bg-indigo-500 shadow-lg rounded-full py-4 px-6 md:py-5 md:px-7 text-white font-semibold flex items-center'
            to='/portfolio'
          >
            Explore works
            <BsArrowRight className='text-xl ml-2' />
          </Link>
        </motion.div>
      </div>
      <img
        className='mt-20 lg:mt-0 sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/2 h-auto'
        src={profile}
        alt='avatar'
      />
    </section>
  );
}

export default Hero;
