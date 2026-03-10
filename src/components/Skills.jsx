import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 70 },
      { name: 'GSAP', level: 75 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'GraphQL', level: 70 },
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Figma', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Jest', level: 85 },
    ]
  }
]

const technologies = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript',
  'Tailwind', 'MongoDB', 'PostgreSQL', 'GraphQL', 'AWS',
  'Docker', 'Git', 'Figma', 'Vite', 'Redux'
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <span className="skills__label">Skills</span>
          <h2 className="skills__title">
            My <span className="skills__title--highlight">Tech Stack</span>
          </h2>
          <p className="skills__description">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="skill-category__title">{category.title}</h3>
              <div className="skill-category__list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item__header">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">{skill.level}%</span>
                    </div>
                    <div className="skill-item__bar">
                      <div 
                        className="skill-item__progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__tech-cloud">
          <h3 className="skills__cloud-title">Technologies I Work With</h3>
          <div className="skills__cloud">
            {technologies.map((tech, index) => (
              <span 
                key={tech} 
                className="skills__cloud-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
