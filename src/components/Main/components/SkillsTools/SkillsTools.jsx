import React from 'react';
import './skills.scss';
import { ToolsImages } from '@assets/skills-section/index.jsx';

export const SkillsTools = () => {
  return (
    <div id='skillsTools' className='skills-container'>
      <section className='skills-box'>
        <h2 className='skills-title'>Skills and Tools</h2>
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
              <img
                className='hard-skills_card_item_image'
                src={ToolsImages.js48}
                alt='JavaScript'
              />
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
        <div className='tools-skills_container'>
          <h3 className='tools-skills_title'>Tools & Technologies</h3>
          <div className='tools-card_list'>
            <div className='card-item_github'>
              <img className='tools-card_item_image' src={ToolsImages.github45} alt='' />
              <span className='tools-card_item_subtitle'>GitHub</span>
            </div>
            <div className='card-item_git'>
              <img className='tools-card_item_image' src={ToolsImages.git48} alt='' />
              <span className='tools-card_item_subtitle'>Git</span>
            </div>
            <div className='card-item_vscode'>
              <img className='tools-card_item_image' src={ToolsImages.vscode48} alt='' />
              <span className='tools-card_item_subtitle'>VS Code</span>
            </div>
            <div className='card-item_jira'>
              <img className='tools-card_item_image' src={ToolsImages.jira48} alt='' />
              <span className='tools-card_item_subtitle'>Jira</span>
            </div>
            <div className='card-item_figma'>
              <img className='tools-card_item_image' src={ToolsImages.figma48} alt='' />
              <span className='tools-card_item_subtitle'>Figma</span>
            </div>
          </div>
        </div>
        <div className='soft-skills_container'>
          <h3 className='soft-skills_title'>Soft Skills</h3>
          <div className='soft-skills_card'>
            <ul className='soft-skills_list'>
              <li className='soft-skills_list_item'>Time Management</li>
              <li className='soft-skills_list_item'>Teamwork</li>
              <li className='soft-skills_list_item'>Communication</li>
              <li className='soft-skills_list_item'>Responsibility</li>
              <li className='soft-skills_list_item'>Quick Learning</li>
              <li className='soft-skills_list_item'>Observation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
