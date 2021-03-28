import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/${project.id}`} className='overflow-hidden '>
      <div className='relative group'>
        <img src={project.thumbnail} alt={project.title} />
        <div className='absolute inset-x-4 bottom-4 m-4 p-5 rounded-xl bg-opacity-90 bg-gray-100 opacity-0 group-hover:opacity-100 duration-300'>
          <p className='text-gray-400 uppercase font-semibold'>
            {project.category}
          </p>
          <p className='text-2xl font-semibold cursor-pointer duration-300 inline-block hover:text-indigo-400'>
            {project.title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
