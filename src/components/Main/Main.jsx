import React from 'react';
import './main.scss';
import { Hero } from './components/About/Hero';
import { SkillsTools } from './components/SkillsTools/SkillsTools';
import { Projects } from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';

export const Main = () => {
  return (
    <main className='main-container'>
      <Hero />
      <SkillsTools />
      <Projects />
      <Contacts />
    </main>
  );
};
