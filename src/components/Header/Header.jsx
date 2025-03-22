import React, { useState } from 'react';
import './header.scss';
import logoSmall from '@assets/images/logo/logo-35.png';

export const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	}
	return (
		<header className='header'>
			<div className='header-logo'><img src={logoSmall} alt='Portfolio Logo' /></div>
			<div className='navigation'>
				<nav className='nav-menu'>
					<ul className='nav-list'>
						<li className='nav-list_item'><a className='nav-list_link' href='/'>About me</a></li>
						<li className='nav-list_item'><a className='nav-list_link' href='/'>Skills $ Tools</a></li>
						<li className='nav-list_item'><a className='nav-list_link' href='/'>Projects</a></li>
						<li className='nav-list_item'><a className='nav-list_link' href='/'>Education</a></li>
					</ul>
				</nav>
			</div>
			<div onClick={toggleMenuHandler} className='toggle-menu'>
				<span className='toggle-menu_line'></span>
				<span className='toggle-menu_line'></span>
				<span className='toggle-menu_line'></span>
			</div>
			{toggleMenu && <div className='burger-menu-list'>
				<ul className='burger-menu_list'>
					<li className='burger-menu_list_item'><a className='item_link' href='/'>About me</a></li>
					<li className='burger-menu_list_item'><a className='item_link' href='/'>Skills $ Tools</a></li>
					<li className='burger-menu_list_item'><a className='item_link' href='/'>Projects</a></li>
					<li className='burger-menu_list_item'><a className='item_link' href='/'>Education</a></li>
				</ul>
			</div>}
		</header>
	);
};