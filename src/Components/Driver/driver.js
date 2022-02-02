import React from 'react';
import driverData from '../../Data/DriverData';
import "../../Styling/driver.css"

export default function Driver() {
    return <div className='container-drivers'>
        <div className='install'>
       <h1>Contacteaza soferii:</h1>
        </div>
    {driverData.map((driver, index) => {
        return(
        <div className='drivers' key={index}>
          <div className='driver-profil common'>
              <img src={driver.profilImage} alt='profil'></img>
              <h1>{driver.name}</h1>
          </div>
            <div className='driver-info common'>
                <div>
                    <p>{driver.infos}</p>
                </div>
                <div className='driver-info-contact'>
                    <h1>Contact:</h1>
                    <a href={driver.contact}>{driver.contact}</a>
                </div>
            </div>
        </div>
      )
      })}
      </div>
}
