// // src/components/Navbar.js
// // src/components/Navbar.js
// // components/Navbar.js
// // src/components/Navbar.js
// import React from 'react';
// import { FaLaptop } from 'react-icons/fa';

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
//         {/* Logo */}
//         <a href="#about" className="flex items-center">
//           <FaLaptop className="text-orange-500 text-4xl mr-6" />
//         </a>

//         {/* Nav links */}
//         <ul className="flex space-x-8 ml-auto">
//           {['about', 'experience', 'projects', 'skills', 'contact'].map((link) => (
//             <li key={link}>
//               <a
//                 href={`#${link}`}
//                 className="text-orange-500 hover:text-white transition"
//               >
//                 {link.charAt(0).toUpperCase() + link.slice(1)}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }



import React, { useState } from 'react';
import { FaLaptop, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['about', 'experience', 'projects', 'skills', 'contact'];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-black/25 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <a href="#about" className="flex items-center" onClick={closeMenu}>
          <FaLaptop className="text-orange-500 text-4xl mr-6" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 ml-auto">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="text-orange-500 hover:text-white transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-orange-500 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 py-6 bg-black/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={closeMenu}
                className="text-orange-500 hover:text-white transition text-lg"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
