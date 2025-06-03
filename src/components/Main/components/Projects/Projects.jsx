import React from 'react';
import './projects.scss';
import { BodyMassIndex } from './components/BodyMassIndex.jsx';
import { EcoCabins } from './components/EcoCabins.jsx';
import { WeatherWise } from './components/WeatherWise.jsx';

export const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <h2 className='projects-title'>Projects</h2>
      <BodyMassIndex />
      <WeatherWise />
      <EcoCabins />
    </div>
  );
};
