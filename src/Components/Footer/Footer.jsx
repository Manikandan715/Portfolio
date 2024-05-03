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
                    <input className='mail'  type="email" placeholder='Enter your email' />
                </div>
                
            </div>
            <button type='submit'  className="footer-subscribe">Subscribe</button>
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
    <div class="social-links">
    <a href="https://github.com/Manikandan715" ><i class= "fab fa-github"></i></a>
    <a href="https://twitter.com/Manik10111654" ><i class= "fab fa-x-twitter"></i></a>
    <a href="https://www.instagram.com/manik_andan_._/" ><i class= "fab fa-instagram"></i></a>
    <a href="https://www.linkedin.com/in/manikandan-b-5b80aa233" ><i class= "fab fa-linkedin"></i></a>
   </div>
    </div>
  )
}

export default Footer