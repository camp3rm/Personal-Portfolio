import React from 'react'
import { imagesArray } from '@assets/images/projects-images/index.jsx'
export const WeatherWise =() => {
	return (
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
          <a
            href='https://meteorix.netlify.app/'
            className='preview-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Preview
          </a>
          <a
            href='https://github.com/camp3rm/WeatherWise'
            className='check-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Check on Github
          </a>
        </div>
      </section>
	)
}
