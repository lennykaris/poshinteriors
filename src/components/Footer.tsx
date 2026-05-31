import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Posh <span>&</span> Interiors</div>
          <p className="footer-tagline">Nairobi's premier interior design studio — bespoke curtains, fitted wardrobes, and complete transformations since 2018.</p>
          <div className="social-links">
            <a href="#" className="social-link">Ig</a>
            <a href="#" className="social-link">Fb</a>
            <a href="#" className="social-link">Yt</a>
            <a href="#" className="social-link">Tk</a>
          </div>
        </div>
        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-list">
            <li><a href="#">Curtains & Drapes</a></li>
            <li><a href="#">Blinds & Shutters</a></li>
            <li><a href="#">Full Interior Design</a></li>
            <li><a href="#">Fitted Wardrobes</a></li>
            <li><a href="#">Soft Furnishings</a></li>
            <li><a href="#">Office Interiors</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Navigate</p>
          <ul className="footer-list">
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#reviews">Client Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Get in Touch</p>
          <ul className="footer-list">
            <li><a href="tel:+254700000000">+254 700 000 000</a></li>
            <li><a href="mailto:hello@poshinteriors.co.ke">hello@poshinteriors.co.ke</a></li>
            <li><a href="#">Westlands, Nairobi</a></li>
            <li><a href="https://wa.me/254700000000">WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Posh Interiors & Design. All rights reserved.</p>
        <p className="footer-copy">Crafted with care in Nairobi, Kenya.</p>
      </div>
    </footer>
  );
};
