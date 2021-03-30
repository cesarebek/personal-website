import React from 'react';
import desk from '../../assets/images/desk.jpg';

function HardSkills() {
  return (
    <div className='container mx-auto mt-10'>
      <div className='md:flex items-center flex-row-reverse'>
        <div className='w-full md:w-1/2 md:pl-10'>
          <h1 className='text-4xl md:text-5xl font-semibold mb-5'>
            Languages I speak.
          </h1>
          <p className='text-xl font-medium'>
            My consolidated knowledge on the front-end side is:
          </p>
          <ul>
            <li>React JS / Next JS</li>
            <li>Vue JS / Nuxt JS</li>
            <li>HTML</li>
            <li>CSS / SCSS</li>
          </ul>
          <p className='text-xl font-medium'>
            On the other hand for the back-end side I use:
          </p>
          <ul>
            <li>Laravel</li>
          </ul>
        </div>
        <div className='md:w-1/2 overflow-hidden rounded-2xl mt-10 sm:mt-0'>
          <img src={desk} alt='' />
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
