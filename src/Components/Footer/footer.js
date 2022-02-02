import React from 'react'
import "../../Styling/footer.css"
export default function Footer() {
    
    return (
        <div className='footer-container'>
            <div className='footer-three-divs'>
                         <div className='footer-contact'>
                                            <h1>
                                               Taxi HOT Reghin we offer you the best services in town.
                                            </h1>
                        </div>
           </div>
            <div className='footer-rights'>
                <h3>Copyright © 2021-<span>{(new Date().getFullYear())}</span> adicotirla.github.io/Taxi All rights reserved.
                Site designed and built by Front-End Developer: Adi Cotirla <a href="mailto:adioprea53@gmail.com">adioprea53@gmail.com</a>
                </h3> 
            </div>
        </div>
    )
}
