import React from 'react';
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
      className='h-28 text-gray-900 flex items-center justify-center cursor-default'
    >
      <p>Cezary Bek © 2021 All Rights Reserved</p>
    </motion.div>
  );
}

export default Footer;
