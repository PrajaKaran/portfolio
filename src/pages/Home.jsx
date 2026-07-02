import './Home.css';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container animate-fade-in">
      <section className="hero section">
        <div className="container hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Karan Prajapati</span>
          </h1>
          <h2 className="hero-subtitle">
            Frontend Developer & UI/UX Enthusiast
          </h2>
          <p className="hero-description">
            I build modern, high-performance web applications with a focus on stunning design and exceptional user experience. Let's create something amazing together.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
