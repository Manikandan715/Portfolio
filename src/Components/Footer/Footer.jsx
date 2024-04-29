import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo7.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {


 

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I'm Manikandan,web developer|Fresher from India, currently seeking for new projects.  </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input  type="email" placeholder='Enter your email' />
                </div>
                <button type='submit'  className="footer-subscribe">Subscribe</button>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 Manikandan. All rights reserved. </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer