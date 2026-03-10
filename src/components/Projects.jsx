import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration, user authentication, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop, and team features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking application with location search, forecasts, and beautiful data visualization.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking social media metrics, engagement, and growth across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Portfolio CMS',
    description: 'Headless CMS built for creatives to easily manage and showcase their work online.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Strapi', 'GraphQL', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'AI Chat Interface',
    description: 'Modern chat interface with AI integration, voice input, and markdown support.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'OpenAI', 'WebRTC'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <span className="projects__label">Portfolio</span>
          <h2 className="projects__title">
            Featured <span className="projects__title--highlight">Projects</span>
          </h2>
          <p className="projects__description">
            A selection of projects I've worked on, showcasing my skills in full-stack development,
            UI design, and problem solving.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />
                {project.featured && (
                  <span className="project-card__badge">Featured</span>
                )}
                <div className="project-card__overlay">
                  <a href={project.liveUrl} className="project-card__link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-card__link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
              
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="projects__more">
            View more on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
