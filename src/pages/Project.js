import React from 'react';
import { useParams } from 'react-router-dom';
import { allProjects } from '../utils/data';
import HomeWave from '../components/waves/HomeWave';

function Project() {
  const params = useParams();
  // eslint-disable-next-line
  const project = allProjects.find((project) => project.id == params.id);
  console.log(project);
  return (
    <div>
      <div className='relative h-56 sm:h-44'>
        <div className='container mx-auto pb-40'>
          <h1 className='text-4xl font-semibold mt-5 px-3 pb-20'>
            {project.title}
          </h1>
        </div>
        <HomeWave />
      </div>
      <div className='bg-indigo-400 min-h-screen'></div>
    </div>
  );
}

export default Project;
