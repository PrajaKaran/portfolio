import './Contact.css';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container animate-fade-in">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          
          <div className="contact-content">
            <div className="contact-info glass-card">
              <h3>Contact Information</h3>
              <p>Feel free to reach out for collaborations, freelance projects, or just to say hi!</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@example.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Location</h4>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
