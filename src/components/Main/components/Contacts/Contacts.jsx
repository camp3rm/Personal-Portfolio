import React from 'react';
import './contacts.scss';
import { ContactsImages } from '@assets/contacts-section/index.jsx';

export const Contacts = () => {
  return (
    <div id='contacts' className='contacts_container'>
      <h2 className='contacts_title'>Contact me</h2>
      <p className='contacts_quote'>
        <span>Constantly</span> seeking challenges that help me grow <span>as</span> a developer.
      </p>
      <ul className='contacts_list'>
        <li className='contacts_item'>
          <a 
            className='contacts_link' 
            href='https://www.linkedin.com/in/camp3rm/' 
            target='_blank'
            rel='noopener noreferrer'
            >
            <img src={ContactsImages.linkedin} alt='LinkedIn' />
          </a>
        </li>
        <li className='contacts_item'>
          <a 
            className='contacts_link' 
            href='https://github.com/camp3rm' 
            target='_blank'
            rel='noopener noreferrer'
            >
            <img src={ContactsImages.github} alt='Github' />
          </a>
        </li>
        <li className='contacts_item'>
          <a 
            className='contacts_link' 
            href='mailto:o.bortniak@o2.pl' 
            target='_blank'
            rel='noopener noreferrer'
            >
            <img src={ContactsImages.email} alt='Email' />
          </a>
        </li>
      </ul>
    </div>
  );
};
