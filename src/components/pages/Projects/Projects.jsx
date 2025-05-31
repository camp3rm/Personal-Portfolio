import React from 'react';
import './projects.scss';
import { imagesArray } from '@assets/images/projects-images/index.jsx';

export const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <h2 className='projects-title'>Projects</h2>
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
          <a href='/' className='preview-link'>
            Preview
          </a>
          <a href='/' className='check-link'>
            Check on Github
          </a>
        </div>
      </section>

      <section className='weather-app_section'>
        <div className='image-container'>
          <img src={imagesArray[1]} alt='' />
        </div>
        <div className='project-details'>
          <h3 className='project-title'>WeatherWise</h3>
          <p className='project-description'>
            A web application that displays current weather conditions and forecasts (daily and
            hourly). It automatically fetches weather based on user geolocation or allows searching
            by city name.
          </p>
          <p className='technologies-used'>
            <span>Tech stack:</span> React, JavaScript (ES6+), SCSS Modules, Axios, OpenWeatherMap
            API, Browser Geolocation API, React Context API
          </p>
        </div>

        <div className='check-preview_section'>
          <a href='/' className='preview-link'>
            Preview
          </a>
          <a href='/' className='check-link'>
            Check on Github
          </a>
        </div>
      </section>

      <section className='eco-cabins_section'>
        <div className='image-container'>
          <img src={imagesArray[2]} alt='' />
        </div>
        <div className='project-details'>
          <h3 className='project-title'>EcoCabins</h3>
          <p className='project-description'>
            A static website built for the "EcoCabins" company, showcasing sustainable modular
            homes. The project informs visitors about the advantages, materials, and key features of
            the cabins.
          </p>
          <p className='technologies-used'>
            <span>Tech stack:</span> HTML, CSS, JavaScript (ES6+), Figma Design
          </p>
        </div>
        <div className='check-preview_section'>
          <a href='/' className='check-link'>
            Check on Github
          </a>
        </div>
      </section>
    </div>
  );
};
