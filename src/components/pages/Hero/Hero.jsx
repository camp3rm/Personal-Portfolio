import React from 'react';
import './hero.scss';

export const Hero = () => {
	return (
		<div className='hero-container'>
			<div className='hero-photo_outside'>
				<div className='hero-photo_inside'>
					<img className='hero-photo_img' src="/" alt='' />
				</div>
			</div>
			<section className='hero-description'>
				<h1 className='hero-description_title'>Hello, I'm Oleh Bortniak,<br /> <span className='proffesion-name'>Junior Frontend Developer</span></h1>
				<p className='hero-description_text'>
					I am a Junior Frontend Developer passionate about creating intuitive and creative web applications and websites.
					I have experience working with HTML, CSS/SCSS, JavaScript, React, and other modern technologies. My goal is to apply my skills to solve real-world problems and develop products that bring value to users. I always strive to write clean and optimized code, work effectively in a team, and continuously learn to improve my skills.
				</p>
				<a className='hero-description_link' href='@assets/CV_Oleh_Bortniak.pdf' download="CV_Oleh_Bortniak.pdf" >Download CV</a>
			</section>
			<section className='skills_tools'>
				<h2 className='skills_tools_title'>Skills and Tools</h2>
				<div className='front-end_skills_container'>
					<h3 className='front-end_skills_title'>Front-End Development Skills</h3>
					<div className='front-end_card_list'>
						<div className='front-end_card_item'>
							<image className='front-end_card_item_img' src="/" alt='' />
							<h3 className='front-end_card_item_title'>HTML5</h3>
						</div>
						<div className='front-end_card_item'>
							<image className='front-end_card_item_img' src="/" alt='' />
							<h3 className='front-end_card_item_title'>CSS3</h3>
						</div>
						<div className='front-end_card_item'>
							<image className='front-end_card_item_img' src="/" alt='' />
							<h3 className='front-end_card_item_title'>JavaScript</h3>
						</div>
						<div className='front-end_card_item'>
							<image className='front-end_card_item_img' src="/" alt='' />
							<h3 className='front-end_card_item_title'>React</h3>
						</div>
						<div className='front-end_card_item'>
							<image className='front-end_card_item_img' src="/" alt='' />
							<h3 className='front-end_card_item_title'>SCSS</h3>
						</div>
					</div>
				</div>
				<div className='tools_skills_container'>
					<h3 className='tools_skills_title'>Tools & Technologies</h3>
					<div className='tools_card_list'>
						<div className='tools_card_item'>
							<image className='tools_card_item_img' src="/" alt='' />
							<h3 className='tools_card_item_title'>GitHub</h3>
						</div>
						<div className='tools_card_item'>
							<image className='tools_card_item_img' src="/" alt='' />
							<h3 className='tools_card_item_title'>Git</h3>
						</div>
						<div className='tools_card_item'>
							<image className='tools_card_item_img' src="/" alt='' />
							<h3 className='tools_card_item_title'>VS Code</h3>
						</div>
						<div className='tools_card_item'>
							<image className='tools_card_item_img' src="/" alt='' />
							<h3 className='tools_card_item_title'>Jira</h3>
						</div>
						<div className='tools_card_item'>
							<image className='tools_card_item_img' src="/" alt='' />
							<h3 className='tools_card_item_title'>Figma</h3>
						</div>
					</div>
				</div>
				<div className='soft_skills_container'>
					<h3 className='soft_skills_title'>Soft Skills</h3>
					<div className='soft_skills_card'>
						<ul className='soft_skills_list'>
							<li className='soft_skills_list_item'>1</li>
							<li className='soft_skills_list_item'>2</li>
							<li className='soft_skills_list_item'>3</li>
							<li className='soft_skills_list_item'>4</li>
							<li className='soft_skills_list_item'>5</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	)
}