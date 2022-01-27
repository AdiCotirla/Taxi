import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import "../../Styling/sidebar.css"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import profil from "../../assets/profil.jpg"
function Sidebar(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return <>
  <div className='menu'>
    <Link to="#" className='menu-bars'>
      <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
  </div>
  <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
       <ul className='lista'>
           <li className='nav-text'> 
            <Link to="#" className='menu-bars'>
           <AiIcons.AiOutlineClose onClick={showSidebar}/>
            </Link>
           </li>
           <li className='nav-text'>
               <img src={profil} alt='detinator' className='profil-photo'></img>
               <h1>Marcel Taxi Hot</h1>
           </li>
           <li className='nav-text'>
               <h1>Contactează-mă:</h1>
               <h2><a href='tel:+0751634462'>0751634462</a></h2>
               <h2><a href='mailto:marceltaxi@yahoo.com'>marceltaxi@yahoo.com</a></h2>
           </li>
       </ul>
  </nav>
  </>
};

export default Sidebar;
