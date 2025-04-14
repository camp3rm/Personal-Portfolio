import React from 'react';
import './projects.scss';
import { imagesData } from '@assets/images/projects-images/index.jsx';


export const Projects = () => {

	return (
		<div className='projects-container'>
			<h2>Projects</h2>
			<section className='body_mass_index'>
				<div className='image_container'>
					<img style={{ maxWidth: '350px', width: '100%', padding: '10px', borderRadius: '25px' }} src={imagesData[2]} alt='BMI Calculator' />
				</div>
				<div className='project_details'>
					<h3 className='project_title'>Body Mass Index | React</h3>
					<p className='project_description'></p>
				</div>
				<div className='check_preview_section'>
					<button className='check_button'>Chceck on Github</button>
					<button className='preview_button'>Preview</button>
				</div>
			</section>
			<section className='body_mass_index_react'>
				<div className='image_container'>
					<img src={imagesData.ecoCabins} alt='' />
				</div>
				<div className='project_details'>
					<h3 className='project_title'>EcoCabins</h3>
					<p className='project_description'></p>
				</div>
				<div className='check_preview_section'>
					<button className='check_button'>Chceck on Github</button>
				</div>
			</section>
			<section className='eco_cabins'>
				<div className='image_container'>
					<img src={imagesData.weatherApp} alt='' />
				</div>
				<div className='project_details'>
					<h3 className='project_title'>Weather Application</h3>
					<p className='project_description'></p>
				</div>
				<div className='check_preview_section'>
					<button className='check_button'>Chceck on Github</button>
				</div>
			</section>
		</div>
	)
}