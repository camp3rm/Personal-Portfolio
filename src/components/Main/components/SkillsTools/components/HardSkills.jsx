import React from 'react';
import { ToolsImages } from '@assets/skills-section/index.jsx';

export const HardSkills = () => {
  return (
    <div className='hard-skills_container'>
      <h3 className='hard-skills_title'>Front-End Development Skills</h3>
      <div className='hard-skills_card_list'>
        <div className='card-item_html'>
          <img className='hard-skills_card_item_image' src={ToolsImages.html48} alt='HTML5' />
          <span className='hard-skills_card_item_subtitle'>HTML5</span>
        </div>
        <div className='card-item_css'>
          <img className='hard-skills_card_item_image' src={ToolsImages.css48} alt='CSS3' />
          <span className='hard-skills_card_item_subtitle'>CSS3</span>
        </div>
        <div className='card-item_js'>
          <img className='hard-skills_card_item_image' src={ToolsImages.js48} alt='JavaScript' />
          <span className='hard-skills_card_item_subtitle'>JavaScript</span>
        </div>
        <div className='card-item_react'>
          <img className='hard-skills_card_item_image' src={ToolsImages.react48} alt='React' />
          <span className='hard-skills_card_item_subtitle'>React</span>
        </div>
        <div className='card-item_scss'>
          <img className='hard-skills_card_item_image' src={ToolsImages.scss48} alt='SCSS' />
          <span className='hard-skills_card_item_subtitle'>SCSS</span>
        </div>
      </div>
    </div>
  );
};
