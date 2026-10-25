(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const E=[{id:"ai-resume-builder",title:"AI Resume Builder & Career Suite",category:"ai",categoryLabel:"AI & Full Stack",badge:"MERN + AI",thumbnail:"./assets/ai_resume_builder.jpg",summary:"Intelligent full-stack ATS-friendly resume creator with real-time preview, customizable templates, and instant PDF compilation.",description:"A production-grade MERN Stack web application designed to empower students and professionals to build polished, ATS-optimized resumes in minutes. Features a dynamic form wizard, real-time reactive layout rendering, custom section ordering, and seamless high-fidelity PDF export. Equipped with secure user authentication for persisting multiple career profiles.",features:["Multi-step reactive form wizard with dynamic section add/remove/reorder","Instant ATS-optimized typography and responsive layout preview","One-click client-side and server-side PDF generation with exact print fidelity","JWT-authenticated user dashboard to save and manage multiple resumes","Automated suggestions for action verbs, tech stacks, and bullet formulations"],tech:["React.js","Node.js","Express.js","MongoDB","JWT Auth","html2pdf","Tailwind CSS"],liveUrl:"https://github.com/PrajaKaran",githubUrl:"https://github.com/PrajaKaran"},{id:"ev-charging-finder",title:"EV Charging Station Finder & Slot Booking",category:"mern",categoryLabel:"Full Stack (MERN)",badge:"MERN Stack",thumbnail:"./assets/ev_charging_portfolio.png",summary:"Interactive geospatial platform to locate electric vehicle charging ports, check live connector availability, and book slots.",description:"An end-to-end electric mobility application that solves range anxiety by connecting EV owners with nearby compatible charging infrastructure. Built with MongoDB geospatial indexes to query stations within user radius, dynamic slot booking schedules, interactive maps, and transparent pricing estimators.",features:["Geospatial proximity search using MongoDB $near spherical queries","Interactive maps with connector filter (CCS2, Type 2, CHAdeMO)","Real-time charging bay reservation system with conflict prevention","User booking history, charging statistics, and wallet/invoice receipts","Admin station management portal for station owners to manage slots"],tech:["React.js","Node.js","Express.js","MongoDB","Geospatial API","Leaflet","CSS3"],liveUrl:"https://github.com/PrajaKaran",githubUrl:"https://github.com/PrajaKaran"},{id:"student-mgmt-system",title:"Comprehensive Student Management Dashboard",category:"mern",categoryLabel:"Full Stack (MERN)",badge:"MERN CRUD",thumbnail:"./assets/student_management.jpg",summary:"Enterprise academic records portal featuring student lifecycle tracking, attendance logs, grading analytics, and role-based access.",description:"A robust academic management system designed to streamline institutional administration. Provides multi-tier role authorization (Admin, Teacher, Student) for tracking enrollment, recording class attendance, publishing exam grade cards, and exporting student rosters into spreadsheet and PDF formats.",features:["Role-based access control (RBAC) with granular admin/faculty permissions","Comprehensive CRUD operations for student profiles, courses, and departments","Daily attendance tracking system with monthly percentage calculations","Automated grading calculation engine with grade-point average (GPA) summaries","Instant search, multi-column sorting, and batch record exporting"],tech:["React.js","Node.js","Express.js","MongoDB","REST APIs","Bootstrap 5"],liveUrl:"https://github.com/PrajaKaran",githubUrl:"https://github.com/PrajaKaran"},{id:"modern-ecommerce-store",title:"Modern E-Commerce Store & Checkout Portal",category:"mern",categoryLabel:"Full Stack (MERN)",badge:"MERN Stack",thumbnail:"./assets/ecommerce_portfolio.png",summary:"Full-featured online shopping platform featuring real-time product filters, shopping cart synchronization, and order management.",description:"A high-performance modern e-commerce web application with rich catalog exploration, dynamic category and price range filtering, persistent shopping cart state, simulated payment checkout gateway, and full administrative product management with image upload capabilities.",features:["Dynamic multi-criteria product filtering (by category, price range, ratings)","Persistent cart state using Redux Toolkit and local storage fallback","Secure customer checkout flow with address validation and order confirmation","Admin dashboard for real-time inventory management, price adjustments, and orders","Optimized image lazy loading and responsive mobile shopping interface"],tech:["React.js","Redux Toolkit","Node.js","Express.js","MongoDB","REST APIs","CSS3"],liveUrl:"https://github.com/PrajaKaran",githubUrl:"https://github.com/PrajaKaran"},{id:"realtime-chat-app",title:"Real-Time Team Chat & Collaboration Engine",category:"mern",categoryLabel:"Full Stack (MERN)",badge:"WebSockets",thumbnail:"./assets/chat_app_portfolio.png",summary:"Instantaneous messaging platform powered by WebSockets with presence tracking, typing indicators, and room channels.",description:"A high-concurrency real-time communication application built using Node.js, Express, and Socket.io. Supports 1-on-1 private messaging, topic-based chat rooms, real-time online/offline indicators, message delivery timestamps, and persistent chat history stored safely in MongoDB.",features:["Bidirectional instant messaging with sub-50ms latency using WebSockets (Socket.io)","Live typing status indicators and active user presence heartbeats","Persistent chat message storage with unread count badges","Private 1-on-1 direct channels as well as shared group discussions","Light/Dark mode chat themes and responsive mobile drawer layout"],tech:["React.js","Socket.io","Node.js","Express.js","MongoDB","JWT Auth"],liveUrl:"https://github.com/PrajaKaran",githubUrl:"https://github.com/PrajaKaran"},{id:"blogging-publishing-platform",title:"Full-Featured Developer Blogging & CMS Platform",category:"mern",categoryLabel:"Full Stack (MERN)",badge:"MERN Stack",thumbnail:"./assets/blogging_platform_portfolio.png",summary:"Content publishing web platform with markdown writing editor, tag discovery, comment threads, and reading analytics.",description:"A developer-focused blogging platform allowing engineers and writers to create, edit, draft, and publish rich technical tutorials. Includes markdown support with syntax highlighting, tag-based discovery feeds, interactive commenting, like counts, and author profile cards.",features:["Rich Markdown editor with live preview and code snippet formatting","Categorized tagging system for quick discovery and topic exploration","Hierarchical comments system with timestamping and moderation","User profile showcase with author bios and published post collections","SEO-friendly slug routing and optimized social sharing metadata"],tech:["React.js","Node.js","Express.js","MongoDB","Markdown Parser","REST APIs"],liveUrl:"https://github.com/PrajaKaran",githubUrl:"https://github.com/PrajaKaran"},{id:"flight-booking-flyapp",title:"FlyApp - Flight Ticket Booking Experience",category:"frontend",categoryLabel:"Frontend Engineering",badge:"React & UI",thumbnail:"./assets/fly_app_real.png",summary:"Fluid airline booking web app with interactive seat reservation grid, flight schedule comparisons, and booking summaries.",description:"A sleek, consumer-ready travel booking frontend showcasing advanced UI/UX principles. Features interactive origin/destination selection, dynamic date ranges, visual cabin seat picker (window, aisle, exit row), boarding pass ticket generation, and step-by-step confirmation receipts.",features:["Interactive visual aircraft cabin seat map with real-time selection state","Dynamic multi-city and round-trip flight search filtering","Instant fare calculation with baggage options and tax breakdowns","Digital boarding pass pass-card with printable confirmation voucher","Smooth micro-interactions and mobile-first responsive layout"],tech:["React.js","JavaScript (ES6+)","Modern CSS3","Flexbox & Grid","Vite"],liveUrl:"https://github.com/PrajaKaran",githubUrl:"https://github.com/PrajaKaran"},{id:"gourmet-restaurant-showcase",title:"Gourmet Dine - Restaurant Menu & Table Booking",category:"frontend",categoryLabel:"Frontend Engineering",badge:"Vanilla JS & UI",thumbnail:"./assets/restaurant_portfolio_mockup.png",summary:"High-end culinary showcase with animated food menus, dietary filter tags, table reservation validation, and order preview.",description:"An immersive digital showcase for fine dining restaurants. Highlights artisanal menu items with dietary badges (Vegan, Gluten-Free, Chef Special), dynamic dish modals, an intuitive table reservation booking engine with date/time pickers, and instant local cart calculations.",features:["Interactive dish catalog with category switching and allergen badges","Instant table reservation system with validation and calendar picking","Cart drawer with item quantity modifiers and bill computation","Parallax scrolling visual elements and glassmorphic card designs","Responsive design ensuring seamless browsing on phones and tablets"],tech:["JavaScript (ES6+)","HTML5 Semantic","Vanilla CSS3","Local Storage","Glassmorphism"],liveUrl:"https://github.com/PrajaKaran",githubUrl:"https://github.com/PrajaKaran"},{id:"weather-forecast-3d",title:"Interactive 3D Globe & Weather Forecast",category:"frontend",categoryLabel:"Frontend Engineering",badge:"React + 3D Globe",thumbnail:"./assets/weather_forecast_portfolio.png",summary:"A modern React weather forecasting application featuring interactive 3D Earth visualization, global city search, and geolocation detection.",description:"A modern React application that delivers real-time weather forecasts across the globe. It features instant city search, automatic geolocation detection, seamless light and dark theme modes, and a unique interactive 3D Earth globe that enables users to visually check real-time meteorological conditions anywhere on Earth.",features:["Interactive 3D Earth globe powered by Three.js/WebGL for visual weather exploration","Real-time atmospheric forecasts: temperature, humidity, wind velocity, UV index, and air quality","Instant global city search with local storage caching for recent search history","Automatic browser geolocation detection with graceful coordinate fallbacks","Adaptive Light and Dark theme modes with dynamic weather status iconography"],tech:["React.js","Vite","Three.js / WebGL","Lucide React","OpenWeather API","Axios","Tailwind CSS"],liveUrl:"https://PrajaKaran.github.io/weather-forecast",githubUrl:"https://github.com/PrajaKaran/weather-forecast"}],I={auth:`// authController.js - Secure JWT Authentication & Password Hashing
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
};`,routes:`// stationRoutes.js - Express Geospatial & Slot Reservation API
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

export default router;`,react:`// ProjectCard.jsx - Modular Reactive Component with Hooks
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
};`};class x{constructor(){this.audioCtx=null,this.isEnabled=localStorage.getItem("kp_audio_enabled")!=="false",this.initUI()}initContext(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioCtx=new e)}this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}initUI(){const e=document.getElementById("audioToggle");e&&(this.updateToggleIcons(),e.addEventListener("click",()=>{this.isEnabled=!this.isEnabled,localStorage.setItem("kp_audio_enabled",this.isEnabled),this.updateToggleIcons(),this.isEnabled?(this.initContext(),this.playSuccess(),b("Audio effects enabled","info")):b("Audio effects muted","info")}),document.addEventListener("click",a=>{a.target.closest("button, a, .skill-tag, .filter-btn, .code-tab")&&this.isEnabled&&this.playClick()}))}updateToggleIcons(){const e=document.querySelector(".audio-on-icon"),a=document.querySelector(".audio-off-icon");!e||!a||(this.isEnabled?(e.style.display="block",a.style.display="none"):(e.style.display="none",a.style.display="block"))}playClick(){if(this.isEnabled)try{if(this.initContext(),!this.audioCtx)return;const e=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.audioCtx.currentTime),e.frequency.exponentialRampToValueAtTime(260,this.audioCtx.currentTime+.04),a.gain.setValueAtTime(.04,this.audioCtx.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,this.audioCtx.currentTime+.04),e.connect(a),a.connect(this.audioCtx.destination),e.start(),e.stop(this.audioCtx.currentTime+.04)}catch{}}playSuccess(){if(this.isEnabled)try{if(this.initContext(),!this.audioCtx)return;const e=this.audioCtx.currentTime,a=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();a.type="triangle",a.frequency.setValueAtTime(523.25,e),a.frequency.setValueAtTime(659.25,e+.08),n.gain.setValueAtTime(.06,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.22),a.connect(n),n.connect(this.audioCtx.destination),a.start(e),a.stop(e+.22)}catch{}}}function b(i,e="success"){const a=document.getElementById("toastContainer");if(!a)return;const n=document.createElement("div");n.className=`toast toast-${e}`,n.setAttribute("role","alert");const s=e==="success"?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#06b6d4" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';n.innerHTML=`
    <span class="toast-icon">${s}</span>
    <span class="toast-msg">${i}</span>
  `,a.appendChild(n),requestAnimationFrame(()=>{n.classList.add("show")}),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300)},3500)}function L(){const i=document.getElementById("themeToggle"),e=document.querySelector(".sun-icon"),a=document.querySelector(".moon-icon"),n=document.documentElement,s=localStorage.getItem("kp_theme")||"dark";o(s),i&&i.addEventListener("click",()=>{const g=(n.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";o(g),localStorage.setItem("kp_theme",g),b(`Switched to ${g} theme`,"info")});function o(d){n.setAttribute("data-theme",d),!(!e||!a)&&(d==="light"?(e.style.display="none",a.style.display="block"):(e.style.display="block",a.style.display="none"))}}function B(){const i=document.getElementById("dynamicRole");if(!i)return;const e=["MERN Stack Applications","Responsive React Interfaces","Secure Node.js & Express APIs","MongoDB & MySQL Solutions","Practical, User-Centric Web Apps"];let a=0,n=0,s=!1,o=90;function d(){const g=e[a];s?(n--,i.textContent=g.substring(0,n),o=45):(n++,i.textContent=g.substring(0,n),o=90),!s&&n===g.length?(o=1900,s=!0):s&&n===0&&(s=!1,a=(a+1)%e.length,o=400),setTimeout(d,o)}d()}function A(){const i=document.getElementById("scrollProgressBar"),e=document.getElementById("navbar"),a=document.getElementById("backToTopBtn"),n=document.querySelectorAll(".nav-menu .nav-link"),s=document.querySelectorAll("section[id]");window.addEventListener("scroll",()=>{const u=window.scrollY||document.documentElement.scrollTop,r=document.documentElement.scrollHeight-document.documentElement.clientHeight,p=r>0?u/r*100:0;i&&(i.style.width=`${p}%`),e&&(u>30?e.classList.add("scrolled"):e.classList.remove("scrolled")),a&&(u>400?a.classList.add("visible"):a.classList.remove("visible"));let m="";s.forEach(t=>{const c=t.offsetTop-140,h=t.offsetHeight;u>=c&&u<c+h&&(m=t.getAttribute("id"))}),n.forEach(t=>{t.classList.remove("active"),m&&t.getAttribute("href")===`#${m}`&&t.classList.add("active")})},{passive:!0}),a&&a.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const o=document.getElementById("mobileToggle"),d=document.getElementById("mobileDrawer"),g=document.querySelectorAll(".mobile-link");if(o&&d){const u=()=>{d.classList.toggle("active"),o.classList.toggle("active"),document.body.classList.toggle("drawer-open")};o.addEventListener("click",u),g.forEach(r=>{r.addEventListener("click",()=>{d.classList.remove("active"),o.classList.remove("active"),document.body.classList.remove("drawer-open")})}),document.addEventListener("click",r=>{d.classList.contains("active")&&!d.contains(r.target)&&!o.contains(r.target)&&(d.classList.remove("active"),o.classList.remove("active"),document.body.classList.remove("drawer-open"))})}}function j(){const i=document.querySelectorAll(".stat-number");if(!i.length)return;let e=!1;const a=new IntersectionObserver(o=>{o.forEach(d=>{d.isIntersecting&&!e&&(e=!0,s())})},{threshold:.3}),n=document.querySelector(".stats-container");n&&a.observe(n);function s(){i.forEach(o=>{const d=parseInt(o.getAttribute("data-target"),10)||0,g=1800,u=performance.now();function r(p){const m=p-u,t=Math.min(m/g,1),c=1-(1-t)*(1-t),h=Math.floor(c*d);o.textContent=h,t<1?requestAnimationFrame(r):o.textContent=d}requestAnimationFrame(r)})}}function M(){const i=document.getElementById("projectsGrid"),e=document.querySelectorAll(".filter-btn"),a=document.getElementById("countAll"),n=document.getElementById("countMern"),s=document.getElementById("countAi"),o=document.getElementById("countFrontend");a&&(a.textContent=E.length),n&&(n.textContent=E.filter(r=>r.category==="mern").length),s&&(s.textContent=E.filter(r=>r.category==="ai").length),o&&(o.textContent=E.filter(r=>r.category==="frontend").length);let d="all";function g(r="all",p=null){if(!i)return;i.innerHTML="";const m=r==="all"?E:E.filter(t=>t.category===r);if(m.length===0){i.innerHTML=`
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted)">
          <p>No projects found in this category.</p>
        </div>
      `;return}m.forEach(t=>{const c=document.createElement("article");c.className="project-card",c.setAttribute("data-id",t.id),c.setAttribute("data-category",t.category),p&&t.tech.some(f=>f.toLowerCase().includes(p.toLowerCase()))&&c.classList.add("highlight");const h=t.tech.map(f=>`<span class="tech-pill">${f}</span>`).join("");c.innerHTML=`
        <div class="project-thumbnail-wrapper">
          <span class="project-category-badge">${t.badge}</span>
          <img
            src="${t.thumbnail}"
            alt="${t.title}"
            class="project-thumbnail"
            loading="lazy"
          />
        </div>

        <div class="project-content">
          <h3 class="project-title">${t.title}</h3>
          <p class="project-summary">${t.summary}</p>

          <div class="project-tech-tags">
            ${h}
          </div>

          <div class="project-card-footer">
            <button type="button" class="view-details-btn" data-project-id="${t.id}">
              <span>View Case Study</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <div class="project-ext-links">
              ${t.liveUrl&&t.liveUrl!=="https://github.com/PrajaKaran"&&t.liveUrl!==t.githubUrl?`
              <a href="${t.liveUrl}" target="_blank" rel="noopener noreferrer" class="ext-link-icon" title="View Live Demo">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>`:""}
              <a href="${t.githubUrl}" target="_blank" rel="noopener noreferrer" class="ext-link-icon" title="View Source on GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      `,c.querySelector(".view-details-btn").addEventListener("click",f=>{f.stopPropagation(),openProjectModal(t)}),c.addEventListener("click",()=>{openProjectModal(t)}),i.appendChild(c)})}e.forEach(r=>{r.addEventListener("click",()=>{e.forEach(p=>p.classList.remove("active")),r.classList.add("active"),d=r.getAttribute("data-filter")||"all",g(d)})}),g("all"),document.querySelectorAll(".skill-tag[data-tech]").forEach(r=>{r.addEventListener("click",()=>{const p=r.getAttribute("data-tech");if(!p)return;e.forEach(t=>{t.getAttribute("data-filter")==="all"?t.classList.add("active"):t.classList.remove("active")}),g("all",p);const m=document.getElementById("projects");m&&m.scrollIntoView({behavior:"smooth"}),b(`Showing projects matching "${p}"`,"info"),setTimeout(()=>{document.querySelectorAll(".project-card.highlight").forEach(t=>{t.classList.remove("highlight")})},4e3)})})}function P(){const i=document.getElementById("projectModal"),e=document.getElementById("modalBody"),a=document.getElementById("modalCloseBtn"),n=document.getElementById("resumeModal"),s=document.getElementById("resumeModalCloseBtn"),o=document.getElementById("openResumeModalBtn"),d=document.getElementById("heroResumeBtn"),g=document.getElementById("mobileResumeBtn"),u=document.getElementById("historyModal"),r=document.getElementById("historyCloseBtn"),p=document.getElementById("viewMessageHistoryBtn"),m=document.getElementById("clearHistoryBtn"),t=document.getElementById("historyList");function c(l){l&&(l.classList.add("open"),l.setAttribute("aria-hidden","false"),document.body.classList.add("modal-open"))}function h(l){l&&(l.classList.remove("open"),l.setAttribute("aria-hidden","true"),document.body.classList.remove("modal-open"))}window.openProjectModal=function(l){if(!i||!e)return;const y=l.features.map(S=>`<li>${S}</li>`).join(""),k=l.tech.map(S=>`<span class="tech-pill">${S}</span>`).join("");e.innerHTML=`
      <img src="${l.thumbnail}" alt="${l.title}" class="modal-project-img" />
      <span class="modal-project-category">${l.categoryLabel}</span>
      <h2 class="modal-project-title">${l.title}</h2>
      <p class="modal-project-desc">${l.description}</p>

      <h4 style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--text-main);">Key Features & Engineering Highlights</h4>
      <ul class="modal-features-list">
        ${y}
      </ul>

      <h4 style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--text-main);">Technologies Utilized</h4>
      <div class="modal-tech-stack-row">
        ${k}
      </div>

      <div class="modal-btn-row">
        ${l.liveUrl&&l.liveUrl!=="https://github.com/PrajaKaran"&&l.liveUrl!==l.githubUrl?`
        <a href="${l.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>Live Demo</span>
        </a>`:""}
        <a href="${l.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn ${l.liveUrl&&l.liveUrl!=="https://github.com/PrajaKaran"&&l.liveUrl!==l.githubUrl?"btn-secondary":"btn-primary"}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>Explore Repository</span>
        </a>
        <button type="button" class="btn btn-secondary modal-close-action">Close Case Study</button>
      </div>
    `;const T=e.querySelector(".modal-close-action");T&&T.addEventListener("click",()=>h(i)),c(i)},a&&a.addEventListener("click",()=>h(i)),s&&s.addEventListener("click",()=>h(n)),r&&r.addEventListener("click",()=>h(u)),[o,d,g].forEach(l=>{l&&l.addEventListener("click",()=>c(n))}),p&&p.addEventListener("click",()=>{f(),c(u)}),m&&m.addEventListener("click",()=>{localStorage.removeItem("kp_inquiries"),C(),f(),b("Sent history cleared","info")}),[i,n,u].forEach(l=>{l&&l.addEventListener("click",y=>{y.target===l&&h(l)})}),document.addEventListener("keydown",l=>{l.key==="Escape"&&(h(i),h(n),h(u))});function f(){if(!t)return;const l=JSON.parse(localStorage.getItem("kp_inquiries")||"[]");if(l.length===0){t.innerHTML=`
        <div style="text-align: center; padding: 2rem; color: var(--text-muted)">
          <p>No inquiries sent from this browser yet.</p>
        </div>
      `;return}t.innerHTML=l.map(y=>`
        <div class="history-card">
          <div class="history-card-header">
            <span><strong>${w(y.name)}</strong> (${w(y.email)})</span>
            <span>${w(y.date)}</span>
          </div>
          <div class="history-card-subject">${w(y.subject)}</div>
          <p class="history-card-msg">${w(y.message)}</p>
        </div>
      `).join("")}}function C(){const i=document.getElementById("inquiryCount");if(!i)return;const e=JSON.parse(localStorage.getItem("kp_inquiries")||"[]");i.textContent=e.length}function w(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function R(){const i=document.getElementById("tabExpBtn"),e=document.getElementById("tabEduBtn"),a=document.getElementById("experienceTimeline"),n=document.getElementById("educationTimeline");!i||!e||!a||!n||(i.addEventListener("click",()=>{i.classList.add("active"),e.classList.remove("active"),a.style.display="block",n.style.display="none"}),e.addEventListener("click",()=>{e.classList.add("active"),i.classList.remove("active"),a.style.display="none",n.style.display="block"}))}function D(){const i=document.querySelectorAll(".code-tab"),e=document.getElementById("codeDisplay");!i.length||!e||i.forEach(a=>{a.addEventListener("click",()=>{i.forEach(s=>s.classList.remove("active")),a.classList.add("active");const n=a.getAttribute("data-tab");n&&I[n]&&(e.innerHTML=`<code class="language-javascript">${w(I[n])}</code>`)})})}function N(){const i=document.getElementById("terminalInput"),e=document.getElementById("terminalHistory"),a=document.getElementById("terminalBody"),n=document.getElementById("terminalClearBtn");if(!i||!e||!a)return;const s=[];let o=-1;const d={help:`Available Commands:
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
-----------------------------------------------------------`,about:`KARAN PRAJAPATI
Role     : Full Stack Developer (MERN Stack)
Location : Surat, Gujarat, India
Education: BCA (Uka Tarsadia University), Pursuing MCA
Experience: 16-Week Internship @ SkillInfyTech IT Solutions
Passions : High-scale web systems, interactive UIs, REST APIs, clean database modeling.`,skills:`TECHNICAL ARSENAL:
- Languages : JavaScript (ES6+), Java, Python, C, C++
- Frontend  : React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap 5
- Backend   : Node.js, Express.js, RESTful APIs, JWT, Socket.io
- Databases : MongoDB (Mongoose ODM), MySQL (Relational)
- Tools     : Git, GitHub, Postman, VS Code, Vite, XAMPP`,projects:`FEATURED PROJECTS:
  1. ai-resume-builder   - MERN Stack AI Resume Builder with PDF Generation
  2. ev-charging-finder  - EV Charging Station Finder & Slot Booking (Geospatial)
  3. student-mgmt-system - Comprehensive Student Academic Management System
  4. modern-ecommerce-store - MERN E-Commerce Store & Checkout Portal
  5. realtime-chat-app   - Team Chat & Collaboration Engine (Socket.io)
  6. blogging-publishing-platform - Developer CMS & Blog Publishing Suite
  7. flight-booking-flyapp - FlyApp Flight Ticket Reservation Experience
  8. gourmet-restaurant-showcase - Gourmet Dine Table & Menu Showcase
  9. weather-forecast-3d - Interactive 3D Earth & Real-Time Weather Forecast (React)
Type 'project <id>' to inspect details (e.g. 'project weather-forecast-3d')`,experience:`PROFESSIONAL INTERNSHIP:
Company : SkillInfyTech IT Solutions Private Limited
Role    : Full Stack Developer Intern
Duration: 16 Weeks (3 Months)
Key Highlights:
  - Engineered full-stack modules using React.js and Node.js/Express.
  - Developed and connected RESTful endpoints with MongoDB and MySQL.
  - Implemented JWT authentication, role authorization, and data validation.
  - Collaborated via Git pull requests and agile code reviews.`,education:`ACADEMIC BACKGROUND:
1. Master of Computer Applications (MCA)
   Status: Pursuing / Active
   Focus : Enterprise Architectures, Algorithms & Cloud Computing

2. Bachelor of Computer Applications (BCA)
   Institute: Uka Tarsadia University (UTU), Gujarat
   Status   : Completed
   Focus    : Data Structures, RDBMS, Web Technologies, Software Engineering

3. Higher Secondary Certificate (12th HSC)
   Board: Gujarat Secondary and Higher Secondary Education Board (GSEB)`,contact:`GET IN TOUCH:
Email    : karanprajapati0033@gmail.com
Phone    : +91 9328995085
WhatsApp : https://wa.me/919328995085
GitHub   : https://github.com/PrajaKaran
Location : Surat, Gujarat, India`,resume:()=>{const u=document.getElementById("resumeModal");return u&&(u.classList.add("open"),u.setAttribute("aria-hidden","false"),document.body.classList.add("modal-open")),`Opening Karan Prajapati's Resume Modal...
Download Link: ./assets/Karan_Prajapati_Resume.pdf`},"sudo hire karan":`
===========================================================
  [SUCCESS] OFFER ACCEPTED & CONTRACT DISPATCHED! 🎉
===========================================================
Congratulations! You just secured a dedicated, fast-learning,
and detail-oriented Full Stack Developer (MERN Stack).

Next Steps:
  1. Send direct email to: karanprajapati0033@gmail.com
  2. Call / WhatsApp directly: +91 9328995085
  3. Schedule the introductory call!
===========================================================`,date:()=>new Date().toLocaleString(),whoami:"guest@recruiter-workstation",pwd:"/home/karan/portfolio",ls:"assets/  index.html  main.js  package.json  style.css  Resume.pdf"};i.addEventListener("keydown",u=>{if(u.key==="Enter"){const r=i.value.trim();if(!r)return;s.push(r),o=s.length,g(r),i.value=""}else u.key==="ArrowUp"?s.length>0&&o>0&&(o--,i.value=s[o]):u.key==="ArrowDown"&&(o<s.length-1?(o++,i.value=s[o]):(o=s.length,i.value=""))}),n&&n.addEventListener("click",()=>{e.innerHTML=""});function g(u){const r=u.trim(),p=r.toLowerCase(),m=document.createElement("div");m.className="terminal-line",m.innerHTML=`<span class="cmd-prompt-line">karan@portfolio:~$ </span><span class="cmd-echo">${w(r)}</span>`,e.appendChild(m);let t="";if(p==="clear"){e.innerHTML="";return}else if(p==="theme"){const c=document.getElementById("themeToggle");c&&c.click(),t="Toggled color theme."}else if(p.startsWith("echo "))t=r.substring(5);else if(p.startsWith("project ")){const c=p.substring(8).trim(),h=E.find(v=>v.id===c||v.title.toLowerCase().includes(c));h?(window.openProjectModal(h),t=`Opening case study for: ${h.title} (${h.categoryLabel})`):t=`Project '${c}' not found. Type 'projects' to see list of valid project IDs.`}else if(d[p]){const c=d[p];t=typeof c=="function"?c():c}else t=`Command not recognized: '${w(r)}'. Type 'help' to see list of available commands.`;if(t){const c=document.createElement("div");c.className="terminal-line cmd-output-line",c.textContent=t,e.appendChild(c)}a.scrollTop=a.scrollHeight}}function U(){const i=document.getElementById("contactForm"),e=document.getElementById("formSubmitBtn"),a=document.getElementById("senderName"),n=document.getElementById("senderEmail"),s=document.getElementById("messageSubject"),o=document.getElementById("messageBody"),d=document.getElementById("nameError"),g=document.getElementById("emailError"),u=document.getElementById("subjectError"),r=document.getElementById("bodyError");if(!i)return;C(),i.addEventListener("submit",m=>{m.preventDefault(),d&&(d.textContent=""),g&&(g.textContent=""),u&&(u.textContent=""),r&&(r.textContent="");const t=a?a.value.trim():"",c=n?n.value.trim():"",h=s?s.value.trim():"",v=o?o.value.trim():"";let f=!1;if((!t||t.length<2)&&(d&&(d.textContent="Please provide your full name (minimum 2 characters)."),f=!0),(!c||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c))&&(g&&(g.textContent="Please enter a valid email address."),f=!0),(!h||h.length<3)&&(u&&(u.textContent="Please enter a subject (minimum 3 characters)."),f=!0),(!v||v.length<10)&&(r&&(r.textContent="Please provide a message of at least 10 characters."),f=!0),f){b("Please correct the highlighted form errors.","info");return}e&&(e.disabled=!0,e.classList.add("loading"),e.innerHTML=`
        <span class="btn-text">Processing Message...</span>
      `),setTimeout(()=>{const y=JSON.parse(localStorage.getItem("kp_inquiries")||"[]"),k={id:Date.now(),name:t,email:c,subject:h,message:v,date:new Date().toLocaleString()};y.unshift(k),localStorage.setItem("kp_inquiries",JSON.stringify(y)),C(),i.reset(),e&&(e.disabled=!1,e.classList.remove("loading"),e.innerHTML=`
          <span class="btn-text">Send Message</span>
          <svg class="send-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polyline points="22 2 15 22 11 13 2 9 22 2"></polyline></svg>
        `),b(`Thank you ${t}! Your message has been sent successfully.`,"success")},700)}),document.querySelectorAll(".copy-btn").forEach(m=>{m.addEventListener("click",()=>{const t=m.getAttribute("data-copy");t&&navigator.clipboard.writeText(t).then(()=>{b(`Copied to clipboard: ${t}`,"success");const c=m.innerHTML;m.innerHTML=`
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        `,setTimeout(()=>{m.innerHTML=c},2e3)}).catch(()=>{b(`Failed to copy: ${t}`,"info")})})})}document.addEventListener("DOMContentLoaded",()=>{window.soundManager=new x,L(),B(),A(),j(),M(),P(),R(),D(),N(),U(),console.log("%c⚡ Karan Prajapati - Portfolio Initialized Successfully!","color: #06b6d4; font-size: 14px; font-weight: bold;")});
