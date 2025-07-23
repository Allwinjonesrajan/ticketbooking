import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../Context/SearchContext';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useSearch();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">🎬 <span>THIJO CINEMAS</span></div>

        {/* Search Box */}
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <CustomLink to="/home">🏠 Home</CustomLink>
          <CustomLink to="/categorys">📚 Categories</CustomLink>
          <CustomLink to="/cart">🛒 View Cart</CustomLink>
          <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
        </div>
      </nav>

      {/* CSS Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

        * {
          font-family: 'Rubik', sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 14px 28px;
          background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
          color: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo span {
          color: #ffd700;
          letter-spacing: 1px;
        }

        .search-input {
          padding: 6px 14px;
          border-radius: 8px;
          border: none;
          font-size: 14px;
          margin: 8px;
          width: 200px;
          outline: none;
        }

        .nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .logout-btn {
          padding: 8px 16px;
          background-color: #ff4d4f;
          border: none;
          color: white;
          font-weight: 500;
          font-size: 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .logout-btn:hover {
          background-color: #d9363e;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }

        .hamburger span {
          width: 26px;
          height: 3px;
          background: white;
          margin: 4px 0;
          border-radius: 3px;
        }

        a {
          text-decoration: none;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #ffd700;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .search-input {
            width: 100%;
            margin: 10px 0;
          }

          .nav-links {
            position: absolute;
            top: 110px;
            left: 0;
            right: 0;
            background-color: #203a43;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 24px;
            display: none;
            gap: 16px;
          }

          .nav-links.active {
            display: flex;
          }

          .nav-links a,
          .logout-btn {
            width: 100%;
            text-align: left;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}

const CustomLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
    }}
    onMouseEnter={(e) => (e.target.style.color = '#ffd700')}
    onMouseLeave={(e) => (e.target.style.color = '#fff')}
  >
    {children}
  </Link>
);

export default Navbar;
