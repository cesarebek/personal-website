import React from 'react';
import { FaReact } from 'react-icons/fa';
//Animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

function Footer() {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
      className='h-28 text-gray-900 flex flex-col items-center justify-center cursor-default'
    >
      <p>Cezary Bek © 2021 All Rights Reserved</p>
      <p className='flex items-center'>
        SPA Powered By React JS <FaReact />
      </p>
    </motion.div>
  );
}

export default Footer;
