import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>UPCOMING EVENTS!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Textile.jpg'
              text='Textile Fairs India   New Delhi, India'
              label='Thu, 18 - Sat, 20 Jul 2024'
              path='/services'
            />
            <CardItem
              src='images/Asia.jpeg'
              text='Asia Jewels Show   Bengaluru, India'
              label='Fri, 09 - Sun, 11 Aug 2024'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Bengaluru.jpeg'
              text='Bangalore Fashion Week   Bengaluru, India'
              label='Thu, 22 - Sun, 25 Aug 2024'
              path='/services'
            />
            <CardItem
              src='images/Bridal.jpg'
              text='Bridal Asia    New Delhi, India'
              label='Sat, 14 - Sun, 15 Sept 2024'
              path='/services'
            />
            <CardItem
              src='images/Faceofworld.png'
              text='Face Of World Runway Fashion Week    New Delhi, India'
              label='Wed, 26 - Sun, 30 Jun 2024'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;