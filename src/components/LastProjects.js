import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function LastProjects({ projects }) {
  return (
    <div className='container mx-auto px-5'>
      <p className='text-4xl font-semibold text-white mb-10'>Recent Projects</p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 800: 2, 1024: 3 }}>
        <Masonry>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className='pt-6 transform duration-300 hover:-translate-y-2 hover:shadow-3xl inline-block'>
        <Link
          className='bg-white shadow-lg rounded-full py-4 px-6 md:py-5 md:px-7 text-indigo-500 font-semibold '
          to='/portfolio'
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default LastProjects;
