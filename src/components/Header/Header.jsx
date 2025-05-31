import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-scroll';
import logoSmall from '@assets/images/logo/logo-35.png';
import logoMedium from '@assets/images/logo/logo-48.png';
import logoLarge from '@assets/images/logo/logo-96.png';

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className='header'>
      <div className='header-logo'>
        <picture>
          <source srcSet={logoLarge} media='(min-width: 992px)' />
          <source srcSet={logoMedium} media='(min-width: 768px)' />
          <img src={logoSmall} alt='logo' />
        </picture>
      </div>
      <div className='navigation'>
        <nav className='nav-menu'>
          <ul className='nav-list'>
            <li className='nav-list_item'>
              <Link to='hero' smooth={true} duration={500} className='nav-list_link'>
                About me
              </Link>
            </li>
            <li className='nav-list_item'>
              <Link to='skillsTools' smooth={true} duration={500} className='nav-list_link'>
                Skills $ Tools
              </Link>
            </li>
            <li className='nav-list_item'>
              <Link to='projects' smooth={true} duration={500} className='nav-list_link'>
                Projects
              </Link>
            </li>
            <li className='nav-list_item'>
              <Link to='contacts' smooth={true} duration={500} className='nav-list_link'>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div onClick={toggleMenuHandler} className='toggle-menu'>
        <span className='toggle-menu_line'></span>
        <span className='toggle-menu_line'></span>
        <span className='toggle-menu_line'></span>
      </div>
      {toggleMenu && (
        <div className='burger-menu_container'>
          <nav className='nav-menu'>
            <ul className='burger-menu_list'>
              <li className='burger-menu_list_item'>
                <Link
                  onClick={toggleMenuHandler}
                  to='hero'
                  smooth={true}
                  duration={1000}
                  className='item-link'
                >
                  About me
                </Link>
              </li>
              <li className='burger-menu_list_item'>
                <Link
                  onClick={toggleMenuHandler}
                  to='skillsTools'
                  smooth={true}
                  duration={1000}
                  className='item-link'
                >
                  Skills $ Tools
                </Link>
              </li>
              <li className='burger-menu_list_item'>
                <Link
                  onClick={toggleMenuHandler}
                  to='projects'
                  smooth={true}
                  duration={1000}
                  className='item-link'
                >
                  Projects
                </Link>
              </li>
              <li className='burger-menu_list_item'>
                <Link
                  onClick={toggleMenuHandler}
                  to='contacts'
                  smooth={true}
                  duration={1000}
                  className='item-link'
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
