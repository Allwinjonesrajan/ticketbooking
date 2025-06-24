import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 30px',
        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
        color: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: '28px', fontWeight: 'bold', letterSpacing: '1px' }}>
        🎬 MovieBox
      </div>
      <div style={{ display: 'flex', gap: '25px' }}>
        <CustomLink to="/home">🏠Home</CustomLink>
        <CustomLink to="/categorys">📚Categories</CustomLink>
        <CustomLink to="/cart">⚰️View Cart</CustomLink>
      </div>
    </div>
  );
}

const CustomLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.3s',
    }}
    onMouseEnter={(e) => (e.target.style.color = '#ffd700')}
    onMouseLeave={(e) => (e.target.style.color = '#fff')}
  >
    {children}
  </Link>
);

export default Navbar;
