import React from 'react'
import { imagesArray } from '@assets/images/projects-images/index.jsx'
export const EcoCabins = () => {
	return (
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
          <a
            href='https://github.com/camp3rm/ecoCabins'
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
