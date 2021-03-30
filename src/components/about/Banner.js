import React from 'react';
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { titleLeft, titleRight } from '../../utils/animations';
export default function Banner() {
  return (
    <div className='relative flex items-center justify-center cursor-default'>
      <img
        className='w-screen object-cover h-screen/2 bg-top'
        src='https://images.unsplash.com/photo-1491485326079-8713ae1e00a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        alt='mountains'
      />
      <div className='absolute flex flex-col items-center text-center space-y-2'>
        <motion.p
          variants={titleLeft}
          className='uppercase text-white text-4xl md:text-7xl font-semibold'
        >
          Cezary Bek
        </motion.p>
        <motion.div
          variants={titleRight}
          className='flex flex-col items-center'
        >
          <p className='uppercase text-lg md:text-xl font-semibold text-white'>
            I am a passionate developer
          </p>
          <div className='flex space-x-5 text-white text-2xl cursor-pointer'>
            <a
              href='https://talent.start2impact.it/profile/cesare-bek'
              target='_black'
            >
              <BiRocket className='duration-200 hover:text-indigo-900' />
            </a>
            <a
              href='https://www.linkedin.com/in/cezary-bek-b28766173/'
              target='_black'
            >
              <AiOutlineLinkedin className='duration-200 hover:text-indigo-900' />
            </a>
            <a href='https://www.facebook.com/cesare.bich' target='_black'>
              <AiOutlineFacebook className='duration-200 hover:text-indigo-900' />
            </a>
            <a href='https://www.instagram.com/cesare_bek' target='_black'>
              <AiOutlineInstagram className='duration-200 hover:text-indigo-900' />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
