import React from 'react';

import { Link } from 'react-router-dom';

function DesktopNav({ navigation }) {
  return (
    <nav className='flex space-x-3 hidden md:block'>
      {navigation.map((nav) => (
        <Link to={nav.path} key={nav.id}>
          {nav.route}
        </Link>
      ))}
    </nav>
  );
}

export default DesktopNav;
