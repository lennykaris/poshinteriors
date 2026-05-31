import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Posh <span>&</span> Interiors</div>
          <p className="footer-tagline">Nairobi's premier interior design studio — bespoke curtains, fitted wardrobes, and complete transformations since 2018.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/posh_interior_design?igsh=MWQxYjU1NnJ6dG5ncQ==" target="_blank" rel="noopener noreferrer" className="social-link">Ig</a>
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
            <li><a href="tel:+254719286449">+254 719 286 449</a></li>
            <li><a href="mailto:hello@poshinteriors.co.ke">hello@poshinteriors.co.ke</a></li>
            <li><a href="#">Westlands, Nairobi</a></li>
            <li><a href="https://wa.me/254719286449" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
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
