import React from 'react';
import ProjectCard from './ProjectCard';

function LastProjects({ projects }) {
  return (
    <div className='container mx-auto px-5'>
      <p className='text-4xl font-semibold text-white mb-10'>Last Projects</p>
      <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10'>
        {projects.map((project) => (
          <ProjectCard project={project} key={projects.id} />
        ))}
      </div>
    </div>
  );
}

export default LastProjects;
