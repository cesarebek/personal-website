import React from 'react';
import profile from '../assets/images/profile.png';
import { Link } from 'react-router-dom';
// import { BsArrowRight } from 'react-icons/bs';

function Hero() {
  return (
    <section className='lg:flex justify-between px-3'>
      <div className='w-full lg:w-3/5 xl:w-1/2 flex-shrink-0 space-y-7'>
        <p className='-mb-3 font-medium'>I'm Cezary Bek,</p>
        <p className='uppercase font-medium'>Junior full stack developer</p>
        <p className='text-5xl sm:text-7xl text-gray-900 font-bold lg:leading-tight'>
          I design digital crafts for clients.
        </p>
        <div className='pt-6 transform duration-300 hover:-translate-y-2 hover:shadow-3xl inline-block'>
          <Link
            className='bg-indigo-500 rounded-full py-4 px-6 md:py-5 md:px-7 text-white font-semibold '
            to='/portfolio'
          >
            Explore works
          </Link>
        </div>
      </div>
      <img
        className='mt-20 lg:mt-0 sm:w-3/4 md:w-2/3 lg:w-2/5'
        src={profile}
        alt='avatar'
      />
    </section>
  );
}

export default Hero;
