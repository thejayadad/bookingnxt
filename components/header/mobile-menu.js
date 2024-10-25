'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing both icons
import HeaderLinks from './header-links';
import MobileLinks from './mobile-links';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Create a reference for the menu

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Close the menu if the click is outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the menu
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="lg:hidden flex items-center z-50"
      >
        {isOpen ? (
          <FiX className='h-6 w-6 text-primary' /> // Increase size for better visibility
        ) : (
          <FiMenu className='h-6 w-6 text-primary' /> // Increase size for better visibility
        )}
      </button>
      <div
        ref={menuRef} // Attach the ref to the menu
        className={`fixed top-0 right-0 w-1/3 bg-gray-100 border-l h-full transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`} // Adjust z-index for visibility
      >
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className='text-xl font-bold text-primary'>Training Land</h1>
        </div>
        <nav className="flex flex-col items-center p-4">
        <MobileLinks />
        </nav>
        <footer className="absolute bottom-0 w-full p-4 border-t text-center">
          <div>© 2024 Training Land</div>
        </footer>
      </div>
    </>
  );
};

export default MobileMenu;
