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
                <p>I’m a Technical Support Trainee at Softcell Technology, specializing in cybersecurity solutions with a focus on SentinelOne endpoint security, firewalls, and network security.
                  I hold a B.E. in Computer Science from Hindusthan College and have experience in web development using React JS, Node JS, Java, SQL, and networking
                  fundamentals.
                </p>
                <p>I’m passionate about cybersecurity and eager to expand my skills in endpoint protection and network defense, continuously 
                  learning and applying new technologies like SentinelOne to solve real-world challenges
                </p>
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
