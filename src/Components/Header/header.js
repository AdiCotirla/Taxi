import React from 'react';
import "../../Styling/header.css"
import logo from "../../assets/logo.png"
function Header(){
  return <>
  <div className='menu'>
    <span className='logo'><img src={logo} alt='our logo'></img></span>
    <h1 className='title'>Taxi<span>HOT</span></h1>
  </div>
  </>
};

export default Header;
