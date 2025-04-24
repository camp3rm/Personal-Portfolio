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
					<p className='project_description'> A web application that allows users to calculate their Body Mass Index (BMI) based on their weight and height.
					It helps assess the weight category according to the WHO classification.</p>
					<p className='technologies_used'>Technologies Used: <strong>React, react-hook-form, react-i18next, CSS, JavaScript, API OpenWeatherMap</strong></p>
				</div>
				<div className='more_info'>
					<p className='technologies_used'><span>Tech stack:</span> React, react-hook-form, react-i18next, CSS, JavaScript, API OpenWeatherMap</p>
    			<p className='features'><span>Features:</span></p>
    			<ul className='feature_list'>
      			<li className='feature_list-item'>Real-time BMI calculation</li>
      			<li className='feature_list-item'>Weight category feedback (underweight, normal, overweight, etc.)</li>
      			<li className='feature_list-item'>Form validation with react-hook-form</li>
      			<li className='feature_list-item'>Multilingual support using react-i18next</li>
      			<li className='feature_list-item'>Responsive and clean UI</li>
    			</ul>
				</div>
				<div className='check_preview_section'>
					<a href='/' className='check_link'>Check on Github</a>
					<a href='/' className='preview_link'>Preview</a>
				</div>
			</section>

			<section className='weather_app-section'>
				<div className='image_container'>
					<img src={imagesArray[1]} alt='' />
				</div>
				<div className='project_details'>
					<h3 className='project_title'>WeatherWise</h3>
					<p className='project_description'>A web application that displays current weather conditions and forecasts (daily and hourly).
					It automatically fetches weather based on user geolocation or allows searching by city name.</p>
			</div>
				<div className='more_info'>
					<p className='technologies_used'><span>Tech stack:</span> React, JavaScript (ES6+), SCSS Modules, Axios, OpenWeatherMap API, Browser Geolocation API, React Context API</p>
    			<p className='features'><span>Features:</span></p>
    			<ul className="feature_list">
      			<li className='feature_list-item'><span>Auto location weather:</span> Uses browser geolocation to show local weather on load</li>
      			<li className='feature_list-item'><span>City search:</span> Lets users search for weather by city name</li>
      			<li className='feature_list-item'><span>Detailed weather data:</span> "Feels like", UV index, wind speed/direction, sunrise/sunset, humidity, visibility, pressure</li>
      			<li className='feature_list-item'><span>Visual indicators:</span> Weather icons and readable labels for UV, wind, clouds, humidity, etc.</li>
      			<li className='feature_list-item'><span>Forecast toggling:</span> Switch between daily and hourly forecasts easily</li>
      			<li className='feature_list-item'><span>Horizontal scroll:</span> Sleek scrollable hourly forecast UI</li>
      			<li className='feature_list-item'><span>Centralized state:</span> WeatherProvider (React Context) for global state & logic handling</li>
      			<li className='feature_list-item'><span>Modular structure:</span> Well-structured, reusable components</li>
      			<li className='feature_list-item'><span>Helper utilities:</span> Encapsulated logic (WeatherUtils.jsx) for coordinates, city name, date/time formatting</li>
      			<li className='feature_list-item'><span>Path aliases:</span> Custom aliases (via config-overrides.js) like <code>@components</code>, <code>@utils</code> for cleaner imports</li>
    			</ul>
				</div>
				<div className='check_preview_section'>
					<a href='/' className='check_link'>Check on Github</a>
				</div>
			</section>

			<section className='eco_cabins-section'>
				<div className='image_container'>
					<img src={imagesArray[2]} alt='' />
				</div>
				<div className='project_details'>
					<h3 className='project_title'>EcoCabins</h3>
					<p className='project_description'>A static website built for the "EcoCabins" company, showcasing sustainable modular homes.  
					The project informs visitors about the advantages, materials, and key features of the cabins.</p>
				</div>
				<div className='more_info'>
					<p className='technologies_used'><span>Tech stack:</span> React, JavaScript (ES6+), SCSS Modules, Axios, OpenWeatherMap API, Browser Geolocation API, React Context API</p>
    			<p className='features'><span>Features:</span></p>
    			<ul className="features_list">
      			<li className='feature_list-item'><span>Auto location weather:</span> Uses browser geolocation to show local weather on load</li>
      			<li className='feature_list-item'><span>City search:</span> Lets users search for weather by city name</li>
      			<li className='feature_list-item'><span>Detailed weather data:</span> "Feels like", UV index, wind speed/direction, sunrise/sunset, humidity, visibility, pressure</li>
      			<li className='feature_list-item'><span>Visual indicators:</span> Weather icons and readable labels for UV, wind, clouds, humidity, etc.</li>
      			<li className='feature_list-item'><span>Forecast toggling:</span> Switch between daily and hourly forecasts easily</li>
      			<li className='feature_list-item'><span>Horizontal scroll:</span> Sleek scrollable hourly forecast UI</li>
      			<li className='feature_list-item'><span>Centralized state:</span> WeatherProvider (React Context) for global state & logic handling</li>
      			<li className='feature_list-item'><span>Modular structure:</span> Well-structured, reusable components</li>
      			<li className='feature_list-item'><span>Helper utilities:</span> Encapsulated logic (WeatherUtils.jsx) for coordinates, city name, date/time formatting</li>
      			<li className='feature_list-item'><span>Path aliases:</span> Custom aliases (via config-overrides.js) like <code>@components</code>, <code>@utils</code> for cleaner imports</li>
    			</ul>
				</div>
				<div className='check_preview_section'>
					<a href='/' className='check_link'>Check on Github</a>
				</div>
			</section>
		</div>
	)
}