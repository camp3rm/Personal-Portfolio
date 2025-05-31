import React from 'react';
import './projects.scss';
import { imagesArray } from '@assets/images/projects-images/index.jsx';

export const Projects = () => {
  return (
    <div className='projects-container'>
      <h2 className='projects_title'>Projects</h2>
      <section className='body_mass_index-section'>
        <div className='image_container'>
          <img src={imagesArray[0]} alt='BMI Calculator' />
        </div>
        <div className='project_details'>
          <h3 className='project_title'>BMI Calculator</h3>
          <p className='project_description'>
            A web application that allows users to calculate their Body Mass Index (BMI) based on
            their weight and height. It helps assess the weight category according to the WHO
            classification.
          </p>
          <p className='technologies_used'>
            <span>Tech stack:</span> React, react-hook-form, react-i18next, CSS, JavaScript (ES6+),
            API OpenWeatherMap
          </p>
        </div>
        <div className='check_preview-section'>
          <a href='/' className='preview_link'>
            Preview
          </a>
          <a href='/' className='check_link'>
            Check on Github
          </a>
        </div>
      </section>

      <section className='weather_app-section'>
        <div className='image_container'>
          <img src={imagesArray[1]} alt='' />
        </div>
        <div className='project_details'>
          <h3 className='project_title'>WeatherWise</h3>
          <p className='project_description'>
            A web application that displays current weather conditions and forecasts (daily and
            hourly). It automatically fetches weather based on user geolocation or allows searching
            by city name.
          </p>
          <p className='technologies_used'>
            <span>Tech stack:</span> React, JavaScript (ES6+), SCSS Modules, Axios, OpenWeatherMap
            API, Browser Geolocation API, React Context API
          </p>
        </div>

        <div className='check_preview-section'>
          <a href='/' className='preview_link'>
            Preview
          </a>
          <a href='/' className='check_link'>
            Check on Github
          </a>
        </div>
      </section>

      <section className='eco_cabins-section'>
        <div className='image_container'>
          <img src={imagesArray[2]} alt='' />
        </div>
        <div className='project_details'>
          <h3 className='project_title'>EcoCabins</h3>
          <p className='project_description'>
            A static website built for the "EcoCabins" company, showcasing sustainable modular
            homes. The project informs visitors about the advantages, materials, and key features of
            the cabins.
          </p>
          <p className='technologies_used'>
            <span>Tech stack:</span> HTML, CSS, JavaScript (ES6+), Figma Design
          </p>
        </div>
        <div className='check_preview-section'>
          <a href='/' className='check_link'>
            Check on Github
          </a>
        </div>
      </section>
    </div>
  );
};
