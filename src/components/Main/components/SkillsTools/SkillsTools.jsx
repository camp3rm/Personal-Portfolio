import React from 'react';
import './skills.scss';
import { HardSkills } from './components/HardSkills.jsx';
import { ToolsSkills } from './components/ToolsSkills.jsx';
import { SoftSkills } from './components/SoftSkills.jsx';

export const SkillsTools = () => {
  return (
    <div id='skillsTools' className='skills-container'>
      <section className='skills-box'>
        <h2 className='skills-title'>Skills and Tools</h2>
        <HardSkills />
        <ToolsSkills />
        <SoftSkills />
      </section>
    </div>
  );
};
