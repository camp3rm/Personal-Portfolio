import React from 'react';
import './contacts.scss';
import { contactsImagesArray } from '@assets/contacts-section/index.jsx';

export const Contacts = () => {
  return (
    <div className='contacts_container'>
      <h2 className='contacts_title'>Contacts me</h2>
      <p className='contacts_quote'>
        <span>Constantly</span> seeking challenges that help me grow <span>as</span> a developer.
      </p>
      <ul className='contacts_list'>
        <li className='contacts_item'>
          <a className='contacts_link' href='https://www.linkedin.com/in/camp3rm/'>
            <img src={contactsImagesArray[0]} alt='LinkedIn' />
          </a>
        </li>
        <li className='contacts_item'>
          <a className='contacts_link' href='https://github.com/camp3rm'>
            <img src={contactsImagesArray[1]} alt='GitHub' />
          </a>
        </li>
        <li className='contacts_item'>
          <a className='contacts_link' href='mailto:o.bortniak@o2.pl'>
            <img src={contactsImagesArray[2]} alt='Email' />
          </a>
        </li>
      </ul>
    </div>
  );
};
