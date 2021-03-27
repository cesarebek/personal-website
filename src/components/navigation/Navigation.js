import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../../utils/data';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Navigation() {
  return (
    <div className='pl-3 md:pl-0 md:px-3 py-5'>
      <header className='container mx-auto flex justify-between'>
        <Link to='/'>Bek.</Link>
        <DesktopNav navigation={navigation} />
        <MobileNav navigation={navigation} />
      </header>
    </div>
  );
}

export default Navigation;
