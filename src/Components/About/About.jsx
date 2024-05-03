import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>As a Web Developer at ELGI EQUIPMENTS, I contributed to the design and development of the 
                    company's website, using Bootstrap, HTML, and SQL. I worked with a team
                     of developers and designers to create a user-friendly and responsive interface that showcased 
                     the company's products and services. I also implemented security features
                     and performed testing and debugging to ensure the website's functionality and performance.
                </p>
                <p>I am passionate about web development and eager to learn new technologies and frameworks that
                     can enhance my abilities and creativity. I am looking for opportunities to apply 
                     my web development
                     skills to challenging and innovative projects that can make a positive impact on society.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "55%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "65%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width: "60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>Fresher | Experience</p>
            </div>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects</p>
            </div>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About