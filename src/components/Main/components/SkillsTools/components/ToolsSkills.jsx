import React from 'react';
import { ToolsImages } from '@assets/skills-section/index.jsx';

export const ToolsSkills = () => {
  return (
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
  );
};
