import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>At FeastXpress, we believe great food should be just a tap away. Whether you're craving a quick bite or a full feast, we bring the best flavors straight to your doorstep – fast, fresh, and hassle-free! </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>            
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9876543210</li>
                    <li>contact@FeastXpress.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">© 2025 FeastXpress. All Rights Reserved. Crafted with ❤️ for food lovers! </p>
    </div>
  )
}

export default Footer
