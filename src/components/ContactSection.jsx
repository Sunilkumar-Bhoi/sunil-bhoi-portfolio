import React, { useState, forwardRef } from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

const ContactSection = forwardRef((props, ref) => {
  const [status, setStatus] = useState(""); // To handle "Sending...", "Success", or "Error"

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("Sending...");

    // Netlify simple AJAX submission
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setStatus("Success!");
        form.reset();
      })
      .catch((error) => setStatus("Error. Please try again."));
  };

  return (
    <section ref={ref} className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="glass">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <div className="contact-details">
              <div className="contact-item">📍 Mahemdavad, Gujarat, India</div>
              <div className="contact-item">
                📧 <a href="mailto:sunilbhoi.dev@gmail.com">sunilbhoi.dev@gmail.com</a>
              </div>
              <div className="contact-item">
                📱 <a href="tel:+919737773608">+91 9737773608</a>
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/Sunilkumar-Bhoi" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/Sunilkumar-Bhoi" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
            </div>
          </div>

          {/* Added Netlify Form attributes for automatic integration */}
          <form 
            className="contact-form" 
            onSubmit={handleSubmit} 
            data-netlify="true" 
            name="contact"
          >
            {/* Hidden input required for Netlify forms in React */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="email@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="How can I help you?" rows="4" />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
            
            {status === "Success!" && <p className="success-msg">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;