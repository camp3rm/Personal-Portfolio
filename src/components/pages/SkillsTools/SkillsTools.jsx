import React from 'react';
import './skills.scss';
import { ToolsImages } from '@assets/skills-section/index.jsx';

export const SkillsTools = () => {
  return (
    <div className='skills-container'>
      <section className='skills_box'>
        <h2 className='skills_title'>Skills and Tools</h2>
        <div className='hard_skills_container'>
          <h3 className='hard_skills_title'>Front-End Development Skills</h3>
          <div className='hard_skills_card_list'>
            <div className='card_item-html'>
              <img className='hard_skills_card_item_image' src={ToolsImages.html48} alt='HTML5' />
              <h3 className='hard_skills_card_item_subtitle'>HTML5</h3>
            </div>
            <div className='card_item-css'>
              <img className='hard_skills_card_item_image' src={ToolsImages.css48} alt='CSS3' />
              <h3 className='hard_skills_card_item_subtitle'>CSS3</h3>
            </div>
            <div className='card_item-js'>
              <img
                className='hard_skills_card_item_image'
                src={ToolsImages.js48}
                alt='JavaScript'
              />
              <h3 className='hard_skills_card_item_subtitle'>JavaScript</h3>
            </div>
            <div className='card_item-react'>
              <img className='hard_skills_card_item_image' src={ToolsImages.react48} alt='React' />
              <h3 className='hard_skills_card_item_subtitle'>React</h3>
            </div>
            <div className='card_item-scss'>
              <img className='hard_skills_card_item_image' src={ToolsImages.scss48} alt='SCSS' />
              <h3 className='hard_skills_card_item_subtitle'>SCSS</h3>
            </div>
          </div>
        </div>
        <div className='tools_skills_container'>
          <h3 className='tools_skills_title'>Tools & Technologies</h3>
          <div className='tools_card_list'>
            <div className='card__item_github'>
              <img className='tools_card_item_image' src={ToolsImages.github45} alt='' />
              <h3 className='tools_card_item_subtitle'>GitHub</h3>
            </div>
            <div className='card_item_git'>
              <img className='tools_card_item_image' src={ToolsImages.git48} alt='' />
              <h3 className='tools_card_item_subtitle'>Git</h3>
            </div>
            <div className='card_item_vscode'>
              <img className='tools_card_item_image' src={ToolsImages.vscode48} alt='' />
              <h3 className='tools_card_item_subtitle'>VS Code</h3>
            </div>
            <div className='card_item_jira'>
              <img className='tools_card_item_image' src={ToolsImages.jira48} alt='' />
              <h3 className='tools_card_item_subtitle'>Jira</h3>
            </div>
            <div className='card_item_figma'>
              <img className='tools_card_item_image' src={ToolsImages.figma48} alt='' />
              <h3 className='tools_card_item_subtitle'>Figma</h3>
            </div>
          </div>
        </div>
        <div className='soft_skills_container'>
          <h3 className='soft_skills_title'>Soft Skills</h3>
          <div className='soft_skills_card'>
            <ul className='soft_skills_list'>
              <li className='soft_skills_list_item'>Time Management</li>
              <li className='soft_skills_list_item'>Teamwork</li>
              <li className='soft_skills_list_item'>Communication</li>
              <li className='soft_skills_list_item'>Responsibility</li>
              <li className='soft_skills_list_item'>Quick Learning</li>
              <li className='soft_skills_list_item'>Observation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
