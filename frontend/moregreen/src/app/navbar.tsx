'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navbarLinkStyles: React.CSSProperties = {
    position: 'relative',
    color: 'white',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const navbarLinkHoverStyles: React.CSSProperties = {
    width: '100%',
  };

  return (
    <nav className={`navbar ${menuOpen ? 'bg-blue-500' :  'bg-blue-500'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-lg font-semibold mr-6">Sports Prediction</div>
          {/* Responsive menu icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`mobile-menu-button ${menuOpen ? 'open' : ''}`}
            >
              {menuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>

        <div className={`lg:flex items-center ${menuOpen ? 'mobile-menu open' : ''}`}>
          <ul className="lg:flex space-x-6">
            <li>
              <Link href="/">
                <span style={navbarLinkStyles} className="hover:text-gray-200">
                  Home
                  <span style={navbarLinkHoverStyles}></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/predictions">
                <span style={navbarLinkStyles} className="hover:text-gray-200">
                  Predictions
                  <span style={navbarLinkHoverStyles}></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/rankings">
                <span style={navbarLinkStyles} className="hover:text-gray-200">
                  Rankings
                  <span style={navbarLinkHoverStyles}></span>
                </span>
              </Link>
            </li>
          </ul>

          {/* User avatar and name */}
          <div className="lg:ml-6 mt-4 lg:mt-0">
            <div className="flex items-center space-x-2">
              <div className="text-white font-semibold">John Doe</div>
              <img
                src="/avatar.jpg" // Replace with actual image source
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
