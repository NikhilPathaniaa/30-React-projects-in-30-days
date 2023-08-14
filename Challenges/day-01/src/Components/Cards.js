import React from 'react'
// import Styles from './Cards.module.css'

export default function Cards({image, name, age}) {
  return (
    <div className='container'>
        <div className='card'>
            <div className='image-container'>
                <img src='./images/jayant-dassz.jpg' alt='..'/>
            </div>
        </div>
    </div>
  );
}
