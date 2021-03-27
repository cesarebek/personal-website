import React from 'react';

import { Link } from 'react-router-dom';

function DesktopNav({ navigation }) {
  return (
    <div className='hidden md:block'>
      <nav className='flex space-x-6'>
        {navigation.map((nav) => (
          <Link to={nav.path} key={nav.id}>
            {nav.route}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default DesktopNav;
