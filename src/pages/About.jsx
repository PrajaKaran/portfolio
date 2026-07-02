import './About.css';

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "HTML5", "CSS3",
    "Tailwind CSS", "Git", "Figma", "REST APIs", "GraphQL", "Next.js"
  ];

  return (
    <div className="about-container animate-fade-in">
      <section className="section">
        <div className="container">
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          
          <div className="about-content">
            <div className="about-text glass-card">
              <h3>My Journey</h3>
              <p>
                I'm a passionate developer who loves transforming ideas into reality through clean, 
                efficient, and scalable code. With a keen eye for design, I specialize in building 
                applications that not only function flawlessly but also look stunning.
              </p>
              <p>
                My focus is on front-end development, specifically using the React ecosystem. 
                I enjoy tackling complex problems and constantly learning new technologies to 
                stay at the forefront of web development.
              </p>
            </div>

            <div className="about-skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
