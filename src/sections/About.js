import React from 'react'
import profilePic from '../assets/profilePic.png'
import '../index.css'          // or './globals.css'
import { FaGithub } from 'react-icons/fa'

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 pt-8 pb-10 text-white scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            About me
          </h2>
          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            Hey! I’m{' '}
            <span
              className="glitch text-cyan-400 font-semibold text-xl"
              data-text="Ujwal"
            >
              Ujwal
            </span>
            , a passionate full-stack developer with experience building
            modern, responsive websites and applications. I specialize in
            technologies like .NET, React, JavaScript, and cloud platforms
            like Azure and AWS.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I enjoy crafting clean, performant code and transforming ideas
            into working products. I’m always eager to learn new
            technologies and collaborate on impactful projects. Feel free
            to explore my work or get in touch!
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-8">
            {/* See My Work */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition text-base"
            >
              Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ujwalg63"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition text-base"
            >
              <FaGithub className="text-xl" />
              See my work
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[300px] h-[300px] rounded-2xl overflow-hidden">
            <img
              src={profilePic}
              alt="Ujwal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

