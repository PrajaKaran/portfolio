import './Footer.css';
import { Code2, User, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="footer-text">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Code2 size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <User size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
