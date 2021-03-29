import React from 'react';

function Screenshots({ screenshots }) {
  return (
    <div className='container mx-auto'>
      <div className='space-y-5'>
        {screenshots.map((screenshot, index) => (
          <img src={screenshot} alt='screenshot' key={index} />
        ))}
      </div>
    </div>
  );
}

export default Screenshots;
