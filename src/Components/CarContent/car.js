import React from 'react';
import masina from "../../assets/masina.png"
import "../../Styling/car.css"

export default function Car() {
  return <div className='car-content'>
     <div className='car'><img src={masina} alt="car"></img></div>
     <div className='infos'></div>
  </div>
}
