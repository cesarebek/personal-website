import React from 'react';
import me from '../../assets/images/me.jpeg';

function Me() {
  return (
    <div className='container mx-auto mt-5 space-y-5 md:flex items-center'>
      <div className='w-full md:w-1/2'>
        <h1 className='text-4xl md:text-5xl font-semibold'>About me.</h1>
        <p className='mt-5 md:text-xl font-semibold'>
          Hi! I'm Cezary, Junior Full Stack Developer certified by Start2Impact.
        </p>
        <p className='mt-2 text-lg'>
          I love to code Web Applications that are eye-catching, clean and
          functional.
        </p>
        <p className='mt-2 text-lg'>
          Information technology is what allows me to put my creativity into
          action. I love learning, having new experiences and meeting new
          people: these are factors that allow me to open my mind and live a
          successful life. Personal growth and improvement are my priority.
        </p>
      </div>
      <div className='md:w-1/2 overflow-hidden rounded-2xl'>
        <img src={me} alt='profile' />
      </div>
    </div>
  );
}

export default Me;
