import React from 'react';
import reghin from '../../assets/reghin.jpg'
import reghin2 from '../../assets/reghin2.jpg'
import "../../Styling/city.css"

export default function City() {
  return <div className='city'>
      <h1>Our beloved town</h1>
      <div className='image-container'>
        <img src={reghin} alt='city'/>
        <img src={reghin2} alt='city'/>
      </div>
  </div>;
}
