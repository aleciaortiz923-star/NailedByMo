"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaBars, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';


const SlideOutMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuContainer, setMenuContainer] = useState<HTMLElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSocialIndex, setHoveredSocialIndex] = useState<number | null>(null);

  useEffect(() => {
    setMenuContainer(document.getElementById('menu-portal'));
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const menuStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '300px',
    backgroundColor: 'transparent',
    backgroundImage: 'url(/menu-background.svg)',
    backgroundSize: 'cover',
    zIndex: 100,
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    color: 'black',
    padding: '20px',
  };

  const getLinkStyle = (index: number): React.CSSProperties => ({
    color: 'black',
    fontSize: '1.2rem',
    display: 'inline-block',
    transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)',
    transition: 'transform 0.2s ease-in-out',
  });

  const getSocialIconStyle = (index: number): React.CSSProperties => ({
    display: 'inline-block',
    transform: hoveredSocialIndex === index ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.2s ease-in-out',
    color: 'black',
  });

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/gift-cards", label: "Gift Cards" },
    { href: "/contact", label: "Contact" },
    { href: "/book", label: "Book" },
  ];

  const menu = (
    <div style={menuStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Nailed By Mo</h2>
        <button onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', background: 'none', border: 'none', color: 'black', cursor: 'pointer' }}>X</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {menuItems.map((item, index) => (
          <li 
            key={item.href}
            style={{ marginBottom: '10px' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={item.href} style={getLinkStyle(index)}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <a 
          href="https://www.facebook.com/mb79283" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={getSocialIconStyle(0)} 
          onMouseEnter={() => setHoveredSocialIndex(0)} 
          onMouseLeave={() => setHoveredSocialIndex(null)}
        >
          <FaFacebook size={24} />
        </a>
        <a 
          href="https://www.instagram.com/naildbymo/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={getSocialIconStyle(1)} 
          onMouseEnter={() => setHoveredSocialIndex(1)} 
          onMouseLeave={() => setHoveredSocialIndex(null)}
        >
          <FaInstagram size={24} />
        </a>
        <a 
          href="https://www.tiktok.com/@charmaiinneeee?lang=en" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={getSocialIconStyle(2)} 
          onMouseEnter={() => setHoveredSocialIndex(2)} 
          onMouseLeave={() => setHoveredSocialIndex(null)}
        >
          <FaTiktok size={24} />
        </a>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={() => setIsMenuOpen(true)} style={{ background: 'transparent', border: 'none', padding: '8px' }}>
        <FaBars size={24} style={{ color: 'black' }} />
      </button>
      {menuContainer && createPortal(menu, menuContainer)}
    </>
  );
};

export default SlideOutMenu;
