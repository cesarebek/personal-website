import React from 'react';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reactIcon from '../../assets/images/react.svg';
import api from '../../assets/images/api.svg';
import js from '../../assets/images/java.svg';
import css from '../../assets/images/css-3.svg';
import json from '../../assets/images/json-5.svg';
import sass from '../../assets/images/sass.svg';
import html from '../../assets/images/html.svg';
import vue from '../../assets/images/vue.svg';
import nuxt from '../../assets/images/nuxt.svg';
import next from '../../assets/images/next.svg';
import tailwindcss from '../../assets/images/tailwindcss.svg';

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  variableWidth: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};

function Slider() {
  return (
    <div className='my-20 container mx-auto overflow-hidden'>
      <Slick {...settings} className=''>
        <div>
          <img className='h-32 mx-5' src={reactIcon} alt='' />
        </div>
        <div>
          <img className='h-32 mx-5' src={tailwindcss} alt='' />
        </div>
        <div>
          <img className='h-32 mx-5' src={api} alt='' />
        </div>
        <div>
          <img className='h-32 mx-5' src={nuxt} alt='' />
        </div>
        <div>
          <img className='h-32 mx-5' src={js} alt='' />
        </div>
        <div>
          <img className='h-32 mx-5' src={css} alt='' />
        </div>
        <div>
          <img className='h-32 mx-10' src={vue} alt='' />
        </div>
        <div>
          <img className='h-32 mx-10' src={json} alt='' />
        </div>
        <div>
          <img className='h-32 mx-10' src={html} alt='' />
        </div>
        <div>
          <img className='h-32 mx-10' src={next} alt='' />
        </div>
        <div>
          <img className='h-32 mx-10' src={sass} alt='' />
        </div>
      </Slick>
    </div>
  );
}

export default Slider;
