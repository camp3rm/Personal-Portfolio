import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './main.scss';
import { Hero } from '@components/pages/About/Hero';
import { SkillsTools } from '@components/pages/SkillsTools/SkillsTools';
import { Projects } from '@components/pages/Projects/Projects';
import { Contacts } from '@components/pages/Contacts/Contacts';

export const Main = () => {
  return (
    <main className='main-container'>
      <BrowserRouter>
        <Hero />
        <SkillsTools />
        <Projects />
        <Contacts />
      </BrowserRouter>
    </main>
  );
};
