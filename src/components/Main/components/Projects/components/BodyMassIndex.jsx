import React from 'react';
import { imagesArray } from '@assets/images/projects-images/index.jsx';
export const BodyMassIndex = () => {
  return (
    <section className='body-mass_index_section'>
      <div className='image-container'>
        <img src={imagesArray[0]} alt='BMI Calculator' />
      </div>
      <div className='project-details'>
        <h3 className='project-title'>BMI Calculator</h3>
        <p className='project-description'>
          A web application that allows users to calculate their Body Mass Index (BMI) based on
          their weight and height. It helps assess the weight category according to the WHO
          classification.
        </p>
        <p className='technologies-used'>
          <span>Tech stack:</span> React, react-hook-form, react-i18next, CSS, JavaScript (ES6+),
          API OpenWeatherMap
        </p>
      </div>
      <div className='check-preview_section'>
        <a
          href='https://fastbmi-checker.netlify.app/'
          className='preview-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Preview
        </a>
        <a
          href='https://github.com/camp3rm/Body-Mass-Index-version-2.0'
          className='check-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Check on Github
        </a>
      </div>
    </section>
  );
};
