import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

function banner({ project }) {
  return (
    <div className='container mx-auto px-3'>
      <div className='md:flex '>
        <div className='w-full md:w-1/2 overflow-hidden rounded-xl flex-shrink-0'>
          <img
            className='object-cover'
            src={project.thumbnail}
            alt={project.title}
          />
        </div>
        <div className='py-5 md:p-10 text-white lg:text-xl'>
          <p>{project.description}</p>
          <div className='uppercase text-gray-300 flex font-semibold pt-5'>
            <p className='pr-3'>Technology used: </p>
            <p className='text-gray-900'>{project.tech}</p>
          </div>
          {project.demo && (
            <button className='my-5 mr-3 py-3 px-5 bg-gray-900 rounded-2xl transform duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl'>
              <a href={project.demo} target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </button>
          )}
          <button className='my-5 py-3 px-5 bg-gray-900 rounded-2xl transform duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl '>
            <a
              href={project.gitLink}
              target='_blank'
              rel='noreferrer'
              className='flex items-center'
            >
              Git Repo <AiFillGithub className='ml-2' />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default banner;
