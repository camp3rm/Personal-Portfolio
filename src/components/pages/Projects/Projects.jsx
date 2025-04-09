import React from 'react';
import './projects.scss';

export const Projects = () => {

	return (
		<div className='projects-container'>
			<h2>Projects</h2>
			<section className='body_mass_index'>
				<div className='image_container'>
					<img src='#' alt='' />
				</div>
				<div className='project_details'>
					<h3 className='project_title'>Body Mass Index</h3>
					<p className='project_description'></p>
				</div>
				<div className='check_preview_section'>
					<button className='check_button'>Download</button>
					<button className='preview_button'>Preview</button>
				</div>
			</section>
			<section className='body_mass_index_react'>
				<div className='image_container'>
					<img src='#' alt='' />
				</div>
				<div className='project_details'>
					<h3 className='project_title'>Body Mass Index version 2.0</h3>
					<p className='project_description'></p>
				</div>
				<div className='check_preview_section'>
					<button className='check_button'>Download</button>
					<button className='preview_button'>Preview</button>
				</div>
			</section>
			<section className='eco_cabins'>
				<div className='image_container'>
					<img src='#' alt='' />
				</div>
				<div className='project_details'>
					<h3 className='project_title'>Weather Application</h3>
					<p className='project_description'></p>
				</div>
				<div className='check_preview_section'>
					<button className='check_button'>Download</button>
					<button className='preview_button'>Preview</button>
				</div>
			</section>
		</div>
	)
}