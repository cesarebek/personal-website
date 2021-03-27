import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { menuSlide } from '../../utils/animations';

function MobileNav({ navigation }) {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div class='md:hidden'>
      <GiHamburgerMenu
        className='mr-5 cursor-pointer text-lg'
        onClick={toggleMenu}
      />

      <motion.div
        variants={menuSlide}
        initial='hidden'
        animate={toggle ? 'open' : 'close'}
        transition='transition'
        className='w-1/2 sm:w-1/3 h-screen bg-gray-300 absolute top-0 right-0'
      >
        <nav className=' flex flex-col h-full justify-center items-center space-y-6 relative'>
          {navigation.map((nav) => (
            <Link onClick={toggleMenu} to={nav.path} key={nav.id}>
              {nav.route}
            </Link>
          ))}
        </nav>
        <IoMdClose
          className='absolute inset-5 text-lg cursor-pointer'
          onClick={toggleMenu}
        />
      </motion.div>
    </div>
  );
}

export default MobileNav;
