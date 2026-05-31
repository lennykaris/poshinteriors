import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [isMobOpen, setIsMobOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMob = () => setIsMobOpen(false);
  const openMob = () => setIsMobOpen(true);

  return (
    <>
      <nav id="nav" className={isSolid ? 'solid' : ''}>
        <a className="nav-logo" href="#">Posh <span>&</span> Interiors</a>
        <ul className="nav-links">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#curtains">Curtains</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#wardrobes">Wardrobes</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-btn">Book Free Visit</a>
        <button className="nav-burger" id="burger" onClick={openMob} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mob-menu ${isMobOpen ? 'open' : ''}`} id="mobMenu">
        <button className="mob-close" id="mobClose" onClick={closeMob} aria-label="Close menu">✕</button>
        <a href="#portfolio" onClick={closeMob}>Portfolio</a>
        <a href="#curtains"  onClick={closeMob}>Curtains</a>
        <a href="#services"  onClick={closeMob}>Services</a>
        <a href="#wardrobes" onClick={closeMob}>Wardrobes</a>
        <a href="#contact"   onClick={closeMob}>Contact</a>
      </div>
    </>
  );
};
