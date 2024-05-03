import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/manikandan.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="profile_img" />
        <h1><span>I'm Manikandan,</span> Web Developer based in India.</h1>
        <p>Fresher | Web Developer | Designing Responsive Web Applications</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href={resume} className="hero-resume">My resume</a>
            
        </div>
    </div>
  )
}

export default Hero