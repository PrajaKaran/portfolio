import './Projects.css';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced filtering, cart management, and secure checkout integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A beautiful and intuitive productivity app featuring drag-and-drop boards, real-time updates, and team collaboration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with interactive charts, market data, and portfolio tracking.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&auto=format&fit=crop&q=80",
      tags: ["React", "Chart.js", "REST APIs"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <div className="projects-container animate-fade-in">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card glass-card">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Code2 size={20} /> <span>Code</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={20} /> <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
