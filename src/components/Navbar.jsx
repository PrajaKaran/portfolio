import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="text-gradient">Portfolio</span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
