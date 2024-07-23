import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Designers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Manish-Malhotra.webp'
              text='Manish Malhotra'
              label='#1'
              path='/services'
            />
            <CardItem
              src='images/Anita.webp'
              text='Anita Dongre'
              label='#2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Anamika.webp'
              text='Anamika Khanna'
              label='#3'
              path='/services'
            />
            <CardItem
              src='images/Ritu.webp'
              text='Ritu Kumar'
              label='#4'
              path='/services'
            />
            <CardItem
              src='images/Masaba.jpg'
              text='Masaba Gupta'
              label='#5'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;