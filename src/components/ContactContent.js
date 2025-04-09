import React from 'react';

function ContactContent() {
  return (
    <div className="contact-container">
      <h1>CONTACT</h1>
      <div className="contact-card">
        <div className="contact-info">
          <p>Email: <a href="mailto:hello@ponyband.com">hello@ponyband.com</a></p>
          <p>Booking: <a href="mailto:booking@ponyband.com">booking@ponyband.com</a></p>
          <p>Follow us on social media:</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
