import React, { useState } from 'react';
import validator from 'validator';
import { BsArrowRight } from 'react-icons/bs';
//Animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value.trim());
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(name) ||
      !validator.isEmail(email) ||
      validator.isEmpty(subject) ||
      validator.isEmpty(message)
    ) {
      return console.log('Check the form.');
    } else {
      return console.log('Submitted');
    }
  };
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
      className='bg-gray-900 min-h-screen'
    >
      <div className='container mx-auto md:px-20 lg:px-32 px-5'>
        <div className='text-white w-full lg:flex pt-12'>
          <div className='lg:w-1/2'>
            <p className='text-5xl font-bold'>Contact now.</p>
            <p className='text-2xl mt-10'>
              Interested about my projects or want to know more about me?
            </p>
            <form
              onSubmit={submitHandler}
              className='mt-12 w-full flex flex-col space-y-10'
            >
              <input
                onChange={nameHandler}
                value={name}
                type='text'
                className='pb-4 mt-0 block w-full px-0.5 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-indigo-500 bg-transparent'
                name='name'
                id='name'
                placeholder='Your name'
              />
              <input
                onChange={emailHandler}
                value={email}
                type='text'
                className='pb-4 mt-0 block w-full px-0.5 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-indigo-500 bg-transparent'
                name='email'
                id='email'
                placeholder='Email address'
              />
              <input
                onChange={subjectHandler}
                value={subject}
                type='text'
                className='pb-4 mt-0 block w-full px-0.5 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-indigo-500 bg-transparent'
                name='subject'
                id='subject'
                placeholder='Subject'
              />
              <textarea
                onChange={messageHandler}
                value={message}
                name='message'
                className='pb-4 mt-0 block w-full px-0.5 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-indigo-500 bg-transparent'
                id='message'
                rows='4'
                placeholder='Write your message'
              ></textarea>
              <div>
                <button
                  type='submit'
                  className='uppercase text-lg font-semibold py-6 px-10 bg-indigo-500 rounded-full focus:ring-0 flex items-center transform duration-300 hover:-translate-y-2'
                >
                  send <BsArrowRight className='text-2xl ml-2' />
                </button>
              </div>
            </form>
          </div>
          <div className='flex items-center justify-center w-full lg:w-1/2'>
            MAPPA
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
