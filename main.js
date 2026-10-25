/**
 * ==============================================================================
 * Karan Prajapati - Dynamic Portfolio Application Logic
 * Full Stack Developer (MERN Stack)
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. DATASETS: PROJECTS & CODE SNIPPETS
// ------------------------------------------------------------------------------

export const PROJECTS_DATA = [
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder & Career Suite',
    category: 'ai',
    categoryLabel: 'AI & Full Stack',
    badge: 'MERN + AI',
    thumbnail: './assets/ai_resume_builder.jpg',
    summary: 'Intelligent full-stack ATS-friendly resume creator with real-time preview, customizable templates, and instant PDF compilation.',
    description: `A production-grade MERN Stack web application designed to empower students and professionals to build polished, ATS-optimized resumes in minutes. Features a dynamic form wizard, real-time reactive layout rendering, custom section ordering, and seamless high-fidelity PDF export. Equipped with secure user authentication for persisting multiple career profiles.`,
    features: [
      'Multi-step reactive form wizard with dynamic section add/remove/reorder',
      'Instant ATS-optimized typography and responsive layout preview',
      'One-click client-side and server-side PDF generation with exact print fidelity',
      'JWT-authenticated user dashboard to save and manage multiple resumes',
      'Automated suggestions for action verbs, tech stacks, and bullet formulations'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'html2pdf', 'Tailwind CSS'],
    liveUrl: 'https://github.com/PrajaKaran',
    githubUrl: 'https://github.com/PrajaKaran'
  },
  {
    id: 'ev-charging-finder',
    title: 'EV Charging Station Finder & Slot Booking',
    category: 'mern',
    categoryLabel: 'Full Stack (MERN)',
    badge: 'MERN Stack',
    thumbnail: './assets/ev_charging_portfolio.png',
    summary: 'Interactive geospatial platform to locate electric vehicle charging ports, check live connector availability, and book slots.',
    description: `An end-to-end electric mobility application that solves range anxiety by connecting EV owners with nearby compatible charging infrastructure. Built with MongoDB geospatial indexes to query stations within user radius, dynamic slot booking schedules, interactive maps, and transparent pricing estimators.`,
    features: [
      'Geospatial proximity search using MongoDB $near spherical queries',
      'Interactive maps with connector filter (CCS2, Type 2, CHAdeMO)',
      'Real-time charging bay reservation system with conflict prevention',
      'User booking history, charging statistics, and wallet/invoice receipts',
      'Admin station management portal for station owners to manage slots'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Geospatial API', 'Leaflet', 'CSS3'],
    liveUrl: 'https://github.com/PrajaKaran',
    githubUrl: 'https://github.com/PrajaKaran'
  },
  {
    id: 'student-mgmt-system',
    title: 'Comprehensive Student Management Dashboard',
    category: 'mern',
    categoryLabel: 'Full Stack (MERN)',
    badge: 'MERN CRUD',
    thumbnail: './assets/student_management.jpg',
    summary: 'Enterprise academic records portal featuring student lifecycle tracking, attendance logs, grading analytics, and role-based access.',
    description: `A robust academic management system designed to streamline institutional administration. Provides multi-tier role authorization (Admin, Teacher, Student) for tracking enrollment, recording class attendance, publishing exam grade cards, and exporting student rosters into spreadsheet and PDF formats.`,
    features: [
      'Role-based access control (RBAC) with granular admin/faculty permissions',
      'Comprehensive CRUD operations for student profiles, courses, and departments',
      'Daily attendance tracking system with monthly percentage calculations',
      'Automated grading calculation engine with grade-point average (GPA) summaries',
      'Instant search, multi-column sorting, and batch record exporting'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Bootstrap 5'],
    liveUrl: 'https://github.com/PrajaKaran',
    githubUrl: 'https://github.com/PrajaKaran'
  },
  {
    id: 'modern-ecommerce-store',
    title: 'Modern E-Commerce Store & Checkout Portal',
    category: 'mern',
    categoryLabel: 'Full Stack (MERN)',
    badge: 'MERN Stack',
    thumbnail: './assets/ecommerce_portfolio.png',
    summary: 'Full-featured online shopping platform featuring real-time product filters, shopping cart synchronization, and order management.',
    description: `A high-performance modern e-commerce web application with rich catalog exploration, dynamic category and price range filtering, persistent shopping cart state, simulated payment checkout gateway, and full administrative product management with image upload capabilities.`,
    features: [
      'Dynamic multi-criteria product filtering (by category, price range, ratings)',
      'Persistent cart state using Redux Toolkit and local storage fallback',
      'Secure customer checkout flow with address validation and order confirmation',
      'Admin dashboard for real-time inventory management, price adjustments, and orders',
      'Optimized image lazy loading and responsive mobile shopping interface'
    ],
    tech: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3'],
    liveUrl: 'https://github.com/PrajaKaran',
    githubUrl: 'https://github.com/PrajaKaran'
  },
  {
    id: 'realtime-chat-app',
    title: 'Real-Time Team Chat & Collaboration Engine',
    category: 'mern',
    categoryLabel: 'Full Stack (MERN)',
    badge: 'WebSockets',
    thumbnail: './assets/chat_app_portfolio.png',
    summary: 'Instantaneous messaging platform powered by WebSockets with presence tracking, typing indicators, and room channels.',
    description: `A high-concurrency real-time communication application built using Node.js, Express, and Socket.io. Supports 1-on-1 private messaging, topic-based chat rooms, real-time online/offline indicators, message delivery timestamps, and persistent chat history stored safely in MongoDB.`,
    features: [
      'Bidirectional instant messaging with sub-50ms latency using WebSockets (Socket.io)',
      'Live typing status indicators and active user presence heartbeats',
      'Persistent chat message storage with unread count badges',
      'Private 1-on-1 direct channels as well as shared group discussions',
      'Light/Dark mode chat themes and responsive mobile drawer layout'
    ],
    tech: ['React.js', 'Socket.io', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
    liveUrl: 'https://github.com/PrajaKaran',
    githubUrl: 'https://github.com/PrajaKaran'
  },
  {
    id: 'blogging-publishing-platform',
    title: 'Full-Featured Developer Blogging & CMS Platform',
    category: 'mern',
    categoryLabel: 'Full Stack (MERN)',
    badge: 'MERN Stack',
    thumbnail: './assets/blogging_platform_portfolio.png',
    summary: 'Content publishing web platform with markdown writing editor, tag discovery, comment threads, and reading analytics.',
    description: `A developer-focused blogging platform allowing engineers and writers to create, edit, draft, and publish rich technical tutorials. Includes markdown support with syntax highlighting, tag-based discovery feeds, interactive commenting, like counts, and author profile cards.`,
    features: [
      'Rich Markdown editor with live preview and code snippet formatting',
      'Categorized tagging system for quick discovery and topic exploration',
      'Hierarchical comments system with timestamping and moderation',
      'User profile showcase with author bios and published post collections',
      'SEO-friendly slug routing and optimized social sharing metadata'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Markdown Parser', 'REST APIs'],
    liveUrl: 'https://github.com/PrajaKaran',
    githubUrl: 'https://github.com/PrajaKaran'
  },
  {
    id: 'flight-booking-flyapp',
    title: 'FlyApp - Flight Ticket Booking Experience',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    badge: 'React & UI',
    thumbnail: './assets/fly_app_real.png',
    summary: 'Fluid airline booking web app with interactive seat reservation grid, flight schedule comparisons, and booking summaries.',
    description: `A sleek, consumer-ready travel booking frontend showcasing advanced UI/UX principles. Features interactive origin/destination selection, dynamic date ranges, visual cabin seat picker (window, aisle, exit row), boarding pass ticket generation, and step-by-step confirmation receipts.`,
    features: [
      'Interactive visual aircraft cabin seat map with real-time selection state',
      'Dynamic multi-city and round-trip flight search filtering',
      'Instant fare calculation with baggage options and tax breakdowns',
      'Digital boarding pass pass-card with printable confirmation voucher',
      'Smooth micro-interactions and mobile-first responsive layout'
    ],
    tech: ['React.js', 'JavaScript (ES6+)', 'Modern CSS3', 'Flexbox & Grid', 'Vite'],
    liveUrl: 'https://github.com/PrajaKaran',
    githubUrl: 'https://github.com/PrajaKaran'
  },
  {
    id: 'gourmet-restaurant-showcase',
    title: 'Gourmet Dine - Restaurant Menu & Table Booking',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    badge: 'Vanilla JS & UI',
    thumbnail: './assets/restaurant_portfolio_mockup.png',
    summary: 'High-end culinary showcase with animated food menus, dietary filter tags, table reservation validation, and order preview.',
    description: `An immersive digital showcase for fine dining restaurants. Highlights artisanal menu items with dietary badges (Vegan, Gluten-Free, Chef Special), dynamic dish modals, an intuitive table reservation booking engine with date/time pickers, and instant local cart calculations.`,
    features: [
      'Interactive dish catalog with category switching and allergen badges',
      'Instant table reservation system with validation and calendar picking',
      'Cart drawer with item quantity modifiers and bill computation',
      'Parallax scrolling visual elements and glassmorphic card designs',
      'Responsive design ensuring seamless browsing on phones and tablets'
    ],
    tech: ['JavaScript (ES6+)', 'HTML5 Semantic', 'Vanilla CSS3', 'Local Storage', 'Glassmorphism'],
    liveUrl: 'https://github.com/PrajaKaran',
    githubUrl: 'https://github.com/PrajaKaran'
  },
  {
    id: 'weather-forecast-3d',
    title: 'Interactive 3D Globe & Weather Forecast',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    badge: 'React + 3D Globe',
    thumbnail: './assets/weather_forecast_portfolio.png',
    summary: 'A modern React weather forecasting application featuring interactive 3D Earth visualization, global city search, and geolocation detection.',
    description: `A modern React application that delivers real-time weather forecasts across the globe. It features instant city search, automatic geolocation detection, seamless light and dark theme modes, and a unique interactive 3D Earth globe that enables users to visually check real-time meteorological conditions anywhere on Earth.`,
    features: [
      'Interactive 3D Earth globe powered by Three.js/WebGL for visual weather exploration',
      'Real-time atmospheric forecasts: temperature, humidity, wind velocity, UV index, and air quality',
      'Instant global city search with local storage caching for recent search history',
      'Automatic browser geolocation detection with graceful coordinate fallbacks',
      'Adaptive Light and Dark theme modes with dynamic weather status iconography'
    ],
    tech: ['React.js', 'Vite', 'Three.js / WebGL', 'Lucide React', 'OpenWeather API', 'Axios', 'Tailwind CSS'],
    liveUrl: 'https://PrajaKaran.github.io/weather-forecast',
    githubUrl: 'https://github.com/PrajaKaran/weather-forecast'
  }
];

export const CODE_SNIPPETS = {
  auth: `// authController.js - Secure JWT Authentication & Password Hashing
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * Handle user login with bcrypt verification and JWT issuance
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Explicitly query password field which is protected with select: false
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    // Sign stateless JSON Web Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'fallback_secret_key',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};`,

  routes: `// stationRoutes.js - Express Geospatial & Slot Reservation API
import express from 'express';
import Station from '../models/Station.js';
import { verifyAuthToken } from '../middleware/auth.js';

const router = express.Router();

// GET /api/stations/nearby - Query stations within radius using MongoDB $near
router.get('/nearby', async (req, res) => {
  try {
    const { lng, lat, maxDistance = 15000 } = req.query;
    if (!lng || !lat) {
      return res.status(400).json({ error: 'Longitude and latitude are required.' });
    }

    const stations = await Station.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: parseInt(maxDistance, 10)
        }
      }
    }).limit(20);

    res.status(200).json({ success: true, count: stations.length, data: stations });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/stations/:id/book - Authenticated Slot Booking
router.post('/:id/book', verifyAuthToken, async (req, res) => {
  const { slotTime, vehicleType } = req.body;
  // Reserve charging port with atomic concurrency lock
  const booking = await Station.reserveSlot(req.params.id, req.user.id, slotTime);
  res.status(201).json({ success: true, booking });
});

export default router;`,

  react: `// ProjectCard.jsx - Modular Reactive Component with Hooks
import React, { useState } from 'react';

export const ProjectCard = ({ project, onSelectProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={\`project-card \${isHovered ? 'elevated' : ''}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      aria-label={project.title}
    >
      <div className="project-thumbnail-wrapper">
        <span className="project-category-badge">{project.badge}</span>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-thumbnail"
          loading="lazy"
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="project-tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <button
            type="button"
            className="view-details-btn"
            onClick={() => onSelectProject(project)}
          >
            <span>View Case Study</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </article>
  );
};`
};

// ------------------------------------------------------------------------------
// 2. AUDIO SYNTHESIZER FEEDBACK (Web Audio API)
// ------------------------------------------------------------------------------

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.isEnabled = localStorage.getItem('kp_audio_enabled') !== 'false'; // default true
    this.initUI();
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  initUI() {
    const toggleBtn = document.getElementById('audioToggle');
    if (!toggleBtn) return;

    this.updateToggleIcons();

    toggleBtn.addEventListener('click', () => {
      this.isEnabled = !this.isEnabled;
      localStorage.setItem('kp_audio_enabled', this.isEnabled);
      this.updateToggleIcons();
      if (this.isEnabled) {
        this.initContext();
        this.playSuccess();
        showToast('Audio effects enabled', 'info');
      } else {
        showToast('Audio effects muted', 'info');
      }
    });

    // Attach subtle click feedback to interactive buttons and links
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a, .skill-tag, .filter-btn, .code-tab');
      if (target && this.isEnabled) {
        this.playClick();
      }
    });
  }

  updateToggleIcons() {
    const onIcon = document.querySelector('.audio-on-icon');
    const offIcon = document.querySelector('.audio-off-icon');
    if (!onIcon || !offIcon) return;

    if (this.isEnabled) {
      onIcon.style.display = 'block';
      offIcon.style.display = 'none';
    } else {
      onIcon.style.display = 'none';
      offIcon.style.display = 'block';
    }
  }

  playClick() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(260, this.audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.04);
    } catch {
      // Ignore audio synthesis errors on strict mobile policies
    }
  }

  playSuccess() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // Ignore
    }
  }
}

// ------------------------------------------------------------------------------
// 3. TOAST NOTIFICATION SYSTEM
// ------------------------------------------------------------------------------

export function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  const iconSvg = type === 'success' 
    ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#06b6d4" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    <span class="toast-icon">${iconSvg}</span>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

// ------------------------------------------------------------------------------
// 4. THEME TOGGLE (Dark / Light Mode)
// ------------------------------------------------------------------------------

function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('kp_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('kp_theme', nextTheme);
      showToast(`Switched to ${nextTheme} theme`, 'info');
    });
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    if (!sunIcon || !moonIcon) return;

    if (theme === 'light') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }
}

// ------------------------------------------------------------------------------
// 5. DYNAMIC TYPING EFFECT IN HERO SECTION
// ------------------------------------------------------------------------------

function initDynamicRoleTyping() {
  const roleElement = document.getElementById('dynamicRole');
  if (!roleElement) return;

  const roles = [
    'MERN Stack Applications',
    'Responsive React Interfaces',
    'Secure Node.js & Express APIs',
    'MongoDB & MySQL Solutions',
    'Practical, User-Centric Web Apps'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeTick() {
    const currentWord = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      roleElement.textContent = currentWord.substring(0, charIndex);
      typingSpeed = 45;
    } else {
      charIndex++;
      roleElement.textContent = currentWord.substring(0, charIndex);
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of completed word
      typingSpeed = 1900;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeTick, typingSpeed);
  }

  typeTick();
}

// ------------------------------------------------------------------------------
// 6. SCROLL PROGRESS BAR, NAVBAR & SPY
// ------------------------------------------------------------------------------

function initScrollAndNavigation() {
  const progressBar = document.getElementById('scrollProgressBar');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const winScroll = window.scrollY || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    // 1. Progress Bar
    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }

    // 2. Navbar blur elevation
    if (navbar) {
      if (winScroll > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // 3. Back to Top Button visibility
    if (backToTopBtn) {
      if (winScroll > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // 4. Active Navigation Link Spy
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (winScroll >= sectionTop && winScroll < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileDrawer) {
    const toggleDrawer = () => {
      mobileDrawer.classList.toggle('active');
      mobileToggle.classList.toggle('active');
      document.body.classList.toggle('drawer-open');
    };

    mobileToggle.addEventListener('click', toggleDrawer);

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.classList.remove('drawer-open');
      });
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('active') && !mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDrawer.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.classList.remove('drawer-open');
      }
    });
  }
}

// ------------------------------------------------------------------------------
// 7. STATS TICKER COUNTER (IntersectionObserver)
// ------------------------------------------------------------------------------

function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsContainer = document.querySelector('.stats-container');
  if (statsContainer) {
    observer.observe(statsContainer);
  }

  function animateCounters() {
    statNumbers.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const duration = 1800; // ms
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quadratic function
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.floor(easeProgress * target);

        counter.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }
}

// ------------------------------------------------------------------------------
// 8. PROJECTS GRID RENDERING & FILTERING
// ------------------------------------------------------------------------------

function initProjectsModule() {
  const gridContainer = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const countAll = document.getElementById('countAll');
  const countMern = document.getElementById('countMern');
  const countAi = document.getElementById('countAi');
  const countFrontend = document.getElementById('countFrontend');

  // Update counts dynamically
  if (countAll) countAll.textContent = PROJECTS_DATA.length;
  if (countMern) countMern.textContent = PROJECTS_DATA.filter((p) => p.category === 'mern').length;
  if (countAi) countAi.textContent = PROJECTS_DATA.filter((p) => p.category === 'ai').length;
  if (countFrontend) countFrontend.textContent = PROJECTS_DATA.filter((p) => p.category === 'frontend').length;

  let currentCategory = 'all';

  function renderProjects(category = 'all', highlightKeyword = null) {
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    const filtered = category === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === category);

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted)">
          <p>No projects found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((project) => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);
      card.setAttribute('data-category', project.category);

      // Check for highlight match
      if (highlightKeyword && project.tech.some((t) => t.toLowerCase().includes(highlightKeyword.toLowerCase()))) {
        card.classList.add('highlight');
      }

      const techBadges = project.tech
        .map((t) => `<span class="tech-pill">${t}</span>`)
        .join('');

      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <span class="project-category-badge">${project.badge}</span>
          <img
            src="${project.thumbnail}"
            alt="${project.title}"
            class="project-thumbnail"
            loading="lazy"
          />
        </div>

        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>

          <div class="project-tech-tags">
            ${techBadges}
          </div>

          <div class="project-card-footer">
            <button type="button" class="view-details-btn" data-project-id="${project.id}">
              <span>View Case Study</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <div class="project-ext-links">
              ${project.liveUrl && project.liveUrl !== 'https://github.com/PrajaKaran' && project.liveUrl !== project.githubUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="ext-link-icon" title="View Live Demo">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>` : ''}
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="ext-link-icon" title="View Source on GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      `;

      // Click card or details button to open modal
      const detailsBtn = card.querySelector('.view-details-btn');
      detailsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectModal(project);
      });

      card.addEventListener('click', () => {
        openProjectModal(project);
      });

      gridContainer.appendChild(card);
    });
  }

  // Filter Buttons Click
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';

      // Remove any existing highlights
      renderProjects(currentCategory);
    });
  });

  // Initial render
  renderProjects('all');

  // Interactive Skill Badges in Skills Section
  const skillTags = document.querySelectorAll('.skill-tag[data-tech]');
  skillTags.forEach((tag) => {
    tag.addEventListener('click', () => {
      const techKeyword = tag.getAttribute('data-tech');
      if (!techKeyword) return;

      // Reset filter tabs to 'all' so we find all matching projects
      filterBtns.forEach((b) => {
        if (b.getAttribute('data-filter') === 'all') {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      renderProjects('all', techKeyword);

      // Scroll smoothly to projects section
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Showing projects matching "${techKeyword}"`, 'info');

      // Remove highlight after 4 seconds
      setTimeout(() => {
        document.querySelectorAll('.project-card.highlight').forEach((c) => {
          c.classList.remove('highlight');
        });
      }, 4000);
    });
  });
}

// ------------------------------------------------------------------------------
// 9. MODALS: PROJECT DETAILS, RESUME, & INQUIRY HISTORY
// ------------------------------------------------------------------------------

function initModals() {
  const projectModal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const resumeModal = document.getElementById('resumeModal');
  const resumeCloseBtn = document.getElementById('resumeModalCloseBtn');
  const openResumeModalBtn = document.getElementById('openResumeModalBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const mobileResumeBtn = document.getElementById('mobileResumeBtn');

  const historyModal = document.getElementById('historyModal');
  const historyCloseBtn = document.getElementById('historyCloseBtn');
  const viewHistoryBtn = document.getElementById('viewMessageHistoryBtn');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  const historyList = document.getElementById('historyList');

  // Generic modal open / close helpers
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  // Project Modal Open Function (exposed to projects grid)
  window.openProjectModal = function (project) {
    if (!projectModal || !modalBody) return;

    const featureBullets = project.features
      .map((f) => `<li>${f}</li>`)
      .join('');

    const techPills = project.tech
      .map((t) => `<span class="tech-pill">${t}</span>`)
      .join('');

    modalBody.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}" class="modal-project-img" />
      <span class="modal-project-category">${project.categoryLabel}</span>
      <h2 class="modal-project-title">${project.title}</h2>
      <p class="modal-project-desc">${project.description}</p>

      <h4 style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--text-main);">Key Features & Engineering Highlights</h4>
      <ul class="modal-features-list">
        ${featureBullets}
      </ul>

      <h4 style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--text-main);">Technologies Utilized</h4>
      <div class="modal-tech-stack-row">
        ${techPills}
      </div>

      <div class="modal-btn-row">
        ${project.liveUrl && project.liveUrl !== 'https://github.com/PrajaKaran' && project.liveUrl !== project.githubUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>Live Demo</span>
        </a>` : ''}
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn ${project.liveUrl && project.liveUrl !== 'https://github.com/PrajaKaran' && project.liveUrl !== project.githubUrl ? 'btn-secondary' : 'btn-primary'}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>Explore Repository</span>
        </a>
        <button type="button" class="btn btn-secondary modal-close-action">Close Case Study</button>
      </div>
    `;

    const closeAction = modalBody.querySelector('.modal-close-action');
    if (closeAction) {
      closeAction.addEventListener('click', () => closeModal(projectModal));
    }

    openModal(projectModal);
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => closeModal(projectModal));
  if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', () => closeModal(resumeModal));
  if (historyCloseBtn) historyCloseBtn.addEventListener('click', () => closeModal(historyModal));

  // Resume triggers
  const resumeTriggers = [openResumeModalBtn, heroResumeBtn, mobileResumeBtn];
  resumeTriggers.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', () => openModal(resumeModal));
    }
  });

  // History trigger
  if (viewHistoryBtn) {
    viewHistoryBtn.addEventListener('click', () => {
      renderInquiryHistory();
      openModal(historyModal);
    });
  }

  // Clear history
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      localStorage.removeItem('kp_inquiries');
      updateInquiryBadge();
      renderInquiryHistory();
      showToast('Sent history cleared', 'info');
    });
  }

  // Close modals on backdrop click
  [projectModal, resumeModal, historyModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(projectModal);
      closeModal(resumeModal);
      closeModal(historyModal);
    }
  });

  function renderInquiryHistory() {
    if (!historyList) return;
    const inquiries = JSON.parse(localStorage.getItem('kp_inquiries') || '[]');

    if (inquiries.length === 0) {
      historyList.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted)">
          <p>No inquiries sent from this browser yet.</p>
        </div>
      `;
      return;
    }

    historyList.innerHTML = inquiries
      .map(
        (inq) => `
        <div class="history-card">
          <div class="history-card-header">
            <span><strong>${escapeHTML(inq.name)}</strong> (${escapeHTML(inq.email)})</span>
            <span>${escapeHTML(inq.date)}</span>
          </div>
          <div class="history-card-subject">${escapeHTML(inq.subject)}</div>
          <p class="history-card-msg">${escapeHTML(inq.message)}</p>
        </div>
      `
      )
      .join('');
  }
}

function updateInquiryBadge() {
  const badge = document.getElementById('inquiryCount');
  if (!badge) return;
  const inquiries = JSON.parse(localStorage.getItem('kp_inquiries') || '[]');
  badge.textContent = inquiries.length;
}

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ------------------------------------------------------------------------------
// 10. TIMELINE TABS (Experience vs Education)
// ------------------------------------------------------------------------------

function initTimelineTabs() {
  const tabExpBtn = document.getElementById('tabExpBtn');
  const tabEduBtn = document.getElementById('tabEduBtn');
  const expTimeline = document.getElementById('experienceTimeline');
  const eduTimeline = document.getElementById('educationTimeline');

  if (!tabExpBtn || !tabEduBtn || !expTimeline || !eduTimeline) return;

  tabExpBtn.addEventListener('click', () => {
    tabExpBtn.classList.add('active');
    tabEduBtn.classList.remove('active');
    expTimeline.style.display = 'block';
    eduTimeline.style.display = 'none';
  });

  tabEduBtn.addEventListener('click', () => {
    tabEduBtn.classList.add('active');
    tabExpBtn.classList.remove('active');
    expTimeline.style.display = 'none';
    eduTimeline.style.display = 'block';
  });
}

// ------------------------------------------------------------------------------
// 11. CODE SNIPPET SHOWCASE TABS
// ------------------------------------------------------------------------------

function initCodeShowcase() {
  const codeTabs = document.querySelectorAll('.code-tab');
  const codeDisplay = document.getElementById('codeDisplay');
  if (!codeTabs.length || !codeDisplay) return;

  codeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      codeTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const tabKey = tab.getAttribute('data-tab');
      if (tabKey && CODE_SNIPPETS[tabKey]) {
        codeDisplay.innerHTML = `<code class="language-javascript">${escapeHTML(CODE_SNIPPETS[tabKey])}</code>`;
      }
    });
  });
}

// ------------------------------------------------------------------------------
// 12. INTERACTIVE DEVELOPER TERMINAL SIMULATOR
// ------------------------------------------------------------------------------

function initTerminalSimulator() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalHistory = document.getElementById('terminalHistory');
  const terminalBody = document.getElementById('terminalBody');
  const terminalClearBtn = document.getElementById('terminalClearBtn');

  if (!terminalInput || !terminalHistory || !terminalBody) return;

  const commandLog = [];
  let historyIndex = -1;

  const COMMANDS = {
    help: `Available Commands:
-----------------------------------------------------------
  about         : Learn more about Karan Prajapati
  skills        : Technical skills breakdown (MERN Stack)
  projects      : List all 8 featured projects
  project <id>  : Display case study for a specific project
  experience    : 16-Week Full Stack Internship details
  education     : MCA and BCA academic qualifications
  contact       : Direct phone, email, and location
  resume        : View & download Karan's updated CV
  sudo hire karan: The ultimate command for recruiters!
  theme         : Toggle light/dark portfolio theme
  clear         : Clear terminal console output
  date          : Print current date and time
  echo <text>   : Echo input string back to console
-----------------------------------------------------------`,

    about: `KARAN PRAJAPATI
Role     : Full Stack Developer (MERN Stack)
Location : Surat, Gujarat, India
Education: BCA (Uka Tarsadia University), Pursuing MCA
Experience: 16-Week Internship @ SkillInfyTech IT Solutions
Passions : High-scale web systems, interactive UIs, REST APIs, clean database modeling.`,

    skills: `TECHNICAL ARSENAL:
- Languages : JavaScript (ES6+), Java, Python, C, C++
- Frontend  : React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap 5
- Backend   : Node.js, Express.js, RESTful APIs, JWT, Socket.io
- Databases : MongoDB (Mongoose ODM), MySQL (Relational)
- Tools     : Git, GitHub, Postman, VS Code, Vite, XAMPP`,

    projects: `FEATURED PROJECTS:
  1. ai-resume-builder   - MERN Stack AI Resume Builder with PDF Generation
  2. ev-charging-finder  - EV Charging Station Finder & Slot Booking (Geospatial)
  3. student-mgmt-system - Comprehensive Student Academic Management System
  4. modern-ecommerce-store - MERN E-Commerce Store & Checkout Portal
  5. realtime-chat-app   - Team Chat & Collaboration Engine (Socket.io)
  6. blogging-publishing-platform - Developer CMS & Blog Publishing Suite
  7. flight-booking-flyapp - FlyApp Flight Ticket Reservation Experience
  8. gourmet-restaurant-showcase - Gourmet Dine Table & Menu Showcase
  9. weather-forecast-3d - Interactive 3D Earth & Real-Time Weather Forecast (React)
Type 'project <id>' to inspect details (e.g. 'project weather-forecast-3d')`,

    experience: `PROFESSIONAL INTERNSHIP:
Company : SkillInfyTech IT Solutions Private Limited
Role    : Full Stack Developer Intern
Duration: 16 Weeks (3 Months)
Key Highlights:
  - Engineered full-stack modules using React.js and Node.js/Express.
  - Developed and connected RESTful endpoints with MongoDB and MySQL.
  - Implemented JWT authentication, role authorization, and data validation.
  - Collaborated via Git pull requests and agile code reviews.`,

    education: `ACADEMIC BACKGROUND:
1. Master of Computer Applications (MCA)
   Status: Pursuing / Active
   Focus : Enterprise Architectures, Algorithms & Cloud Computing

2. Bachelor of Computer Applications (BCA)
   Institute: Uka Tarsadia University (UTU), Gujarat
   Status   : Completed
   Focus    : Data Structures, RDBMS, Web Technologies, Software Engineering

3. Higher Secondary Certificate (12th HSC)
   Board: Gujarat Secondary and Higher Secondary Education Board (GSEB)`,

    contact: `GET IN TOUCH:
Email    : karanprajapati0033@gmail.com
Phone    : +91 9328995085
WhatsApp : https://wa.me/919328995085
GitHub   : https://github.com/PrajaKaran
Location : Surat, Gujarat, India`,

    resume: () => {
      const resumeModal = document.getElementById('resumeModal');
      if (resumeModal) {
        resumeModal.classList.add('open');
        resumeModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
      }
      return `Opening Karan Prajapati's Resume Modal...
Download Link: ./assets/Karan_Prajapati_Resume.pdf`;
    },

    'sudo hire karan': `
===========================================================
  [SUCCESS] OFFER ACCEPTED & CONTRACT DISPATCHED! 🎉
===========================================================
Congratulations! You just secured a dedicated, fast-learning,
and detail-oriented Full Stack Developer (MERN Stack).

Next Steps:
  1. Send direct email to: karanprajapati0033@gmail.com
  2. Call / WhatsApp directly: +91 9328995085
  3. Schedule the introductory call!
===========================================================`,

    date: () => new Date().toLocaleString(),

    whoami: 'guest@recruiter-workstation',

    pwd: '/home/karan/portfolio',

    ls: 'assets/  index.html  main.js  package.json  style.css  Resume.pdf'
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawInput = terminalInput.value.trim();
      if (!rawInput) return;

      commandLog.push(rawInput);
      historyIndex = commandLog.length;

      executeCommand(rawInput);
      terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
      if (commandLog.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandLog[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandLog.length - 1) {
        historyIndex++;
        terminalInput.value = commandLog[historyIndex];
      } else {
        historyIndex = commandLog.length;
        terminalInput.value = '';
      }
    }
  });

  if (terminalClearBtn) {
    terminalClearBtn.addEventListener('click', () => {
      terminalHistory.innerHTML = '';
    });
  }

  function executeCommand(input) {
    const trimmed = input.trim();
    const lower = trimmed.toLowerCase();

    // Append Command Line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'terminal-line';
    cmdLine.innerHTML = `<span class="cmd-prompt-line">karan@portfolio:~$ </span><span class="cmd-echo">${escapeHTML(trimmed)}</span>`;
    terminalHistory.appendChild(cmdLine);

    let output = '';

    if (lower === 'clear') {
      terminalHistory.innerHTML = '';
      return;
    } else if (lower === 'theme') {
      const toggle = document.getElementById('themeToggle');
      if (toggle) toggle.click();
      output = `Toggled color theme.`;
    } else if (lower.startsWith('echo ')) {
      output = trimmed.substring(5);
    } else if (lower.startsWith('project ')) {
      const targetId = lower.substring(8).trim();
      const found = PROJECTS_DATA.find((p) => p.id === targetId || p.title.toLowerCase().includes(targetId));
      if (found) {
        window.openProjectModal(found);
        output = `Opening case study for: ${found.title} (${found.categoryLabel})`;
      } else {
        output = `Project '${targetId}' not found. Type 'projects' to see list of valid project IDs.`;
      }
    } else if (COMMANDS[lower]) {
      const handler = COMMANDS[lower];
      output = typeof handler === 'function' ? handler() : handler;
    } else {
      output = `Command not recognized: '${escapeHTML(trimmed)}'. Type 'help' to see list of available commands.`;
    }

    if (output) {
      const outLine = document.createElement('div');
      outLine.className = 'terminal-line cmd-output-line';
      outLine.textContent = output;
      terminalHistory.appendChild(outLine);
    }

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

// ------------------------------------------------------------------------------
// 13. WORKING CONTACT FORM & CLIPBOARD COPY
// ------------------------------------------------------------------------------

function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('formSubmitBtn');

  // Input elements
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const subjectInput = document.getElementById('messageSubject');
  const bodyInput = document.getElementById('messageBody');

  // Error spans
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const bodyError = document.getElementById('bodyError');

  if (!form) return;

  updateInquiryBadge();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (subjectError) subjectError.textContent = '';
    if (bodyError) bodyError.textContent = '';

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const subjectVal = subjectInput ? subjectInput.value.trim() : '';
    const bodyVal = bodyInput ? bodyInput.value.trim() : '';

    let hasError = false;

    if (!nameVal || nameVal.length < 2) {
      if (nameError) nameError.textContent = 'Please provide your full name (minimum 2 characters).';
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      if (emailError) emailError.textContent = 'Please enter a valid email address.';
      hasError = true;
    }

    if (!subjectVal || subjectVal.length < 3) {
      if (subjectError) subjectError.textContent = 'Please enter a subject (minimum 3 characters).';
      hasError = true;
    }

    if (!bodyVal || bodyVal.length < 10) {
      if (bodyError) bodyError.textContent = 'Please provide a message of at least 10 characters.';
      hasError = true;
    }

    if (hasError) {
      showToast('Please correct the highlighted form errors.', 'info');
      return;
    }

    // Button loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      submitBtn.innerHTML = `
        <span class="btn-text">Processing Message...</span>
      `;
    }

    setTimeout(() => {
      // Save to localStorage
      const inquiries = JSON.parse(localStorage.getItem('kp_inquiries') || '[]');
      const newInquiry = {
        id: Date.now(),
        name: nameVal,
        email: emailVal,
        subject: subjectVal,
        message: bodyVal,
        date: new Date().toLocaleString()
      };

      inquiries.unshift(newInquiry);
      localStorage.setItem('kp_inquiries', JSON.stringify(inquiries));
      updateInquiryBadge();

      // Reset form
      form.reset();

      // Restore submit button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = `
          <span class="btn-text">Send Message</span>
          <svg class="send-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polyline points="22 2 15 22 11 13 2 9 22 2"></polyline></svg>
        `;
      }

      showToast(`Thank you ${nameVal}! Your message has been sent successfully.`, 'success');
    }, 700);
  });

  // Copy buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`, 'success');

        const originalSvg = btn.innerHTML;
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        `;
        setTimeout(() => {
          btn.innerHTML = originalSvg;
        }, 2000);
      }).catch(() => {
        showToast(`Failed to copy: ${textToCopy}`, 'info');
      });
    });
  });
}

// ------------------------------------------------------------------------------
// 14. INITIALIZATION LIFECYCLE
// ------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Sound synthesizer manager
  window.soundManager = new SoundManager();

  // Core application modules
  initThemeToggle();
  initDynamicRoleTyping();
  initScrollAndNavigation();
  initStatsCounter();
  initProjectsModule();
  initModals();
  initTimelineTabs();
  initCodeShowcase();
  initTerminalSimulator();
  initContactForm();

  console.log('%c⚡ Karan Prajapati - Portfolio Initialized Successfully!', 'color: #06b6d4; font-size: 14px; font-weight: bold;');
});
