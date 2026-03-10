import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <span className="about__label">About Me</span>
          <h2 className="about__title">
            Crafting digital experiences<br />
            <span className="about__title--highlight">with passion and precision</span>
          </h2>
          <div className="about__text">
            <p>
              I'm a full-stack developer based in San Francisco with over 5 years of experience 
              building web applications. I specialize in React, Node.js, and modern JavaScript 
              ecosystems.
            </p>
            <p>
              My journey started with a curiosity about how things work on the web, which led 
              me to pursue computer science and eventually become a developer who cares deeply 
              about user experience and clean code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new coffee shops, contributing to 
              open source, or writing technical articles to help others learn.
            </p>
          </div>
          
          <div className="about__cta">
            <a href="/resume.pdf" className="about__btn" download>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="about__visual">
          <div className="about__image-wrapper">
            <div className="about__image-bg"></div>
            <div className="about__image">
              <svg viewBox="0 0 200 200" className="about__avatar">
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#avatarGrad)" opacity="0.2"/>
                <circle cx="100" cy="80" r="35" fill="url(#avatarGrad)"/>
                <ellipse cx="100" cy="170" rx="55" ry="50" fill="url(#avatarGrad)"/>
              </svg>
            </div>
            
            <div className="about__badge about__badge--experience">
              <span className="about__badge-number">5+</span>
              <span className="about__badge-text">Years Exp.</span>
            </div>
            
            <div className="about__badge about__badge--projects">
              <span className="about__badge-number">50+</span>
              <span className="about__badge-text">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
