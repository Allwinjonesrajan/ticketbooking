import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // If using auth, clear token or session here
    // localStorage.removeItem('token');
    navigate('/'); // Go to login page
  };

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

      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <CustomLink to="/home">🏠 Home</CustomLink>
        <CustomLink to="/categorys">📚 Categories</CustomLink>
        <CustomLink to="/cart">🛒 View Cart</CustomLink>

        <button
          onClick={handleLogout}
          style={{
            padding: '6px 14px',
            backgroundColor: '#ff4d4f',
            border: 'none',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#d9363e')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff4d4f')}
        >
          🚪 Logout
        </button>
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
