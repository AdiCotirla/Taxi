import React from 'react';
import masina from "../../assets/town.png"
import "../../Styling/car.css"

export default function Car() {
  return <div className='car-content'>
    <div className='stripe'></div>
     <div className='car'><img src={masina} alt="car"></img></div>
    <div className='stripe'></div>
  </div>
}
