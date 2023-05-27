import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>Driven by my passion for technology and innovation, I am a computer software engineering student from the University of Buea's esteemed Faculty of Engineering and Technology (FET). With a deep-rooted curiosity for the world of code and its endless possibilities, I thrive on unraveling complex problems and transforming them into elegant solutions. As an avid learner, I embrace challenges head-on, constantly pushing the boundaries of my knowledge and skill set. Through my academic journey, I have honed my abilities in software development, algorithm design, and system architecture. Armed with a strong foundation in programming languages such as Java, Python, and C++, I am adept at crafting efficient and scalable applications. Additionally, my experience collaborating on team projects has fostered my communication and leadership skills, enabling me to seamlessly work alongside multidisciplinary teams. With an unwavering commitment to excellence and a relentless pursuit of innovation, I am determined to make a significant impact in the world of software engineering and contribute to the ever-evolving tech landscape.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro