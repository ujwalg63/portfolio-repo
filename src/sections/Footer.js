// src/sections/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const frosted = 'bg-white/10 backdrop-blur-lg border border-white/10';

  return (
    <footer className="text-white pt-8">
      <hr className="border-zinc-800 mb-6" />

      <div className="flex justify-center space-x-3 mb-4">
        <a
          href="https://github.com/ujwalg63"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 ${frosted} rounded-full flex items-center justify-center hover:bg-white/20 transition`}
        >
          <FaGithub className="text-orange-500 text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/ujwal-gottimukkula-2007671ab/"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 ${frosted} rounded-full flex items-center justify-center hover:bg-white/20 transition`}
        >
          <FaLinkedin className="text-orange-500 text-2xl" />
        </a>

        <a
          href="/resume.pdf"
          download
          className={`w-14 h-14 ${frosted} rounded-full flex items-center justify-center hover:bg-white/20 transition`}
        >
          <FaFileDownload className="text-orange-500 text-2xl" />
        </a>

        <button
          onClick={scrollToTop}
          className={`w-14 h-14 ${frosted} rounded-full flex items-center justify-center hover:bg-white/20 transition`}
        >
          <FaArrowUp className="text-orange-500 text-2xl" />
        </button>
      </div>

      <p className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Ujwal. All rights reserved.
      </p>
    </footer>
  );
}
