import React from 'react';
import './hero.scss';
import AboutMe from '@components/pages/About/AboutMe.png';

export const Hero = () => {
  return (
    <div id='hero' className='hero-container'>
      <div className='hero-photo_outside'>
        <div className='hero-photo_inside'>
          <img className='hero-photo_img' src={AboutMe} alt='' />
        </div>
      </div>
      <section className='hero-description'>
        <h1 className='hero-description_title'>
          Hello, I'm Oleh Bortniak,
          <br /> <span className='profession-name'>Junior Frontend Developer</span>
        </h1>
        <p className='hero-description_text'>
          I am a Junior Frontend Developer passionate about creating intuitive and creative web
          applications and websites. I have experience working with HTML, CSS/SCSS, JavaScript,
          React, and other modern technologies. My goal is to apply my skills to solve real-world
          problems and develop products that bring value to users. I always strive to write clean
          and optimized code, work effectively in a team, and continuously learn to improve my
          skills.
        </p>
        <a
          className='hero-description_link'
          href='@assets/Junior-FrontEnd-React-Developer.pdf'
          download='Junior-FrontEnd-React-Developer.pdf'
        >
          Download CV
        </a>
      </section>
    </div>
  );
};
