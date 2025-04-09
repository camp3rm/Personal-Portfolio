import React from 'react';
import './main.scss';
import { Hero } from '@components/pages/About/Hero';
import { SkillsTools } from '@components/pages/SkillsTools/SkillsTools';
import { Projects } from '@components/pages/Projects/Projects';

export const Main = () => {
	return (
		<main className='main-container'>
			<Hero />
			<SkillsTools />
			<Projects />
		</main>
	)
}