// import React from 'react';

// const experiences = [
//   {
//     company: 'Hexaware Technologies',
//     role: 'Full Stack .NET Developer',
//     duration: 'Jan 2020 – Aug 2023',
//     endClient: 'Ernst & Young',
//     tools: ['ASP.NET', 'SQL Server', 'React', 'Azure'],
//     description:
//       'Developed enterprise-grade web applications using .NET MVC and Angular, including canteen and blood donation systems. Enhanced database efficiency by 50% through SQL optimization and built SSRS reports for financial compliance. Reduced downtime by 30% by refactoring legacy C# systems and improved sprint velocity via Agile collaboration.',
//   },
//   {
//     company: 'Sports Media, Inc.',
//     role: 'AI Voice Assistant Intern',
//     duration: 'Aug 2024 – Nov 2024',
//     tools: ['FastAPI', 'Twilio', 'Python', 'AWS'],
//     description:
//       'Built AI-driven voice assistants using FastAPI and Twilio to reduce call handling time by 30%. Integrated OpenAI and Deepgram for real-time transcriptions and event-driven voice flows. Automated 50% of manual workflows with Python scripts, improving data processing efficiency significantly.',
//   },
// ];

// function ExperienceCard({ job }) {
//   return (
//     <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl border border-zinc-700 bg-zinc-900">
//       {/* Windows-style header */}
//       <div className="flex justify-between items-center px-4 py-2 bg-[#1f1f1f] border-b border-zinc-700 rounded-t-xl">
//         <h3 className="text-white font-semibold text-base">
//           {job.company}
//           {job.endClient && (
//             <span className="text-white font-semibold text-[0.95rem] ml-2">
//               , End-Client: {job.endClient}
//             </span>
//           )}
//         </h3>
//         <div className="flex items-center space-x-2">
//           <button className="w-6 h-6 flex items-center justify-center text-xs text-white bg-transparent hover:bg-green-600 border border-green-500 rounded-sm">
//             &minus;
//           </button>
//           <button className="w-6 h-6 flex items-center justify-center text-xs text-white bg-transparent hover:bg-yellow-500 border border-yellow-400 rounded-sm">
//             &#9633;
//           </button>
//           <button className="w-6 h-6 flex items-center justify-center text-xs text-white bg-transparent hover:bg-red-600 border border-red-500 rounded-sm">
//             &#10005;
//           </button>
//         </div>
//       </div>

//       {/* Python-style code */}
//       <div className="px-6 py-4 text-sm font-mono text-gray-200 whitespace-pre-wrap">
//         <span className="text-cyan-400">job</span> = {'{\n'}
//         &nbsp;&nbsp;<span className="text-purple-400">"my_role"</span>: <span className="text-yellow-300">"{job.role}"</span>,{'\n'}
//         &nbsp;&nbsp;<span className="text-purple-400">"duration"</span>: <span className="text-yellow-300">"{job.duration}"</span>,{'\n'}
//         &nbsp;&nbsp;<span className="text-purple-400">"tools"</span>: [
//         {job.tools.map((tool, idx) => (
//           <span key={tool} className="text-green-400">
//             "{tool}"{idx !== job.tools.length - 1 && ', '}
//           </span>
//         ))}],
//         {'\n'}
//         &nbsp;&nbsp;<span className="text-purple-400">"description"</span>: <span className="text-blue-400">"{job.description}"</span>{'\n'}
//         {'}'}
//       </div>
//     </div>
//   );
// }

// export default function Experience() {
//   return (
//     <section id="experience" className="w-full px-4 py-20 bg-black flex flex-col items-center">
//       <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
//       <div className="relative w-full flex flex-col items-center">
//         {experiences.map((job, idx) => (
//           <div
//             key={idx}
//             className={`w-full max-w-3xl relative ${idx !== 0 ? '-mt-6' : ''} mb-6`}
//             style={{ zIndex: 100 - idx }}
//           >
//             <ExperienceCard job={job} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// } /// This is for horizontal rectangular stacks.


// import React from 'react';

// const experiences = [
//   {
//     company: 'Hexaware Technologies',
//     role: 'Full Stack .NET Developer',
//     duration: 'Jan 2020 – Aug 2023',
//     endClient: 'Ernst & Young',
//     tools: ['ASP.NET', 'SQL Server', 'React', 'Azure'],
//     description:
//       'Developed enterprise-grade web applications using .NET MVC and Angular, including canteen and blood donation systems. Enhanced database efficiency by 50% through SQL optimization and built SSRS reports for financial compliance. Reduced downtime by 30% by refactoring legacy C# systems and improved sprint velocity via Agile collaboration.',
//   },
//   {
//     company: 'Sports Media, Inc.',
//     role: 'AI Voice Assistant Intern',
//     duration: 'Aug 2024 – Nov 2024',
//     tools: ['FastAPI', 'Twilio', 'Python', 'AWS'],
//     description:
//       'Built AI-driven voice assistants using FastAPI and Twilio to reduce call handling time by 30%. Integrated OpenAI and Deepgram for real-time transcriptions and event-driven voice flows. Automated 50% of manual workflows with Python scripts, improving data processing efficiency significantly.',
//   },
// ];

// function ExperienceCard({ job }) {
//   return (
//     <div className="w-full max-w-md h-full rounded-xl overflow-hidden shadow-lg border border-zinc-700 bg-zinc-900 flex flex-col">
//       {/* Header */}
//       <div className="flex justify-between items-center px-4 py-2 bg-[#1f1f1f] border-b border-zinc-700 rounded-t-xl">
//         <h3 className="text-white font-semibold text-sm">
//           {job.company}
//           {job.endClient && (
//             <span className="text-white font-semibold text-xs ml-2">
//               , End-Client: {job.endClient}
//             </span>
//           )}
//         </h3>
//         <div className="flex items-center space-x-2">
//           <button className="w-5 h-5 flex items-center justify-center text-xs text-white bg-transparent hover:bg-green-600 border border-green-500 rounded-sm">
//             &minus;
//           </button>
//           <button className="w-5 h-5 flex items-center justify-center text-xs text-white bg-transparent hover:bg-yellow-500 border border-yellow-400 rounded-sm">
//             &#9633;
//           </button>
//           <button className="w-5 h-5 flex items-center justify-center text-xs text-white bg-transparent hover:bg-red-600 border border-red-500 rounded-sm">
//             &#10005;
//           </button>
//         </div>
//       </div>

//       {/* Python content */}
//       <div className="px-6 py-4 text-sm font-mono text-gray-200 whitespace-pre-wrap leading-relaxed flex-1 overflow-hidden">
//         <span className="text-cyan-400">job</span> = {'{\n'}
//         &nbsp;&nbsp;<span className="text-purple-400">"my_role"</span>: <span className="text-yellow-300">"{job.role}"</span>,{'\n'}
//         &nbsp;&nbsp;<span className="text-purple-400">"duration"</span>: <span className="text-yellow-300">"{job.duration}"</span>,{'\n'}
//         &nbsp;&nbsp;<span className="text-purple-400">"tools"</span>: [
//         {job.tools.map((tool, idx) => (
//           <span key={tool} className="text-green-400">
//             "{tool}"{idx !== job.tools.length - 1 && ', '}
//           </span>
//         ))}]
//         ,{'\n'}
//         &nbsp;&nbsp;<span className="text-purple-400">"description"</span>: <span className="text-blue-400">"{job.description}"</span>{'\n'}
//         {'}'}
//       </div>
//     </div>
//   );
// }

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="w-full px-4 pt-36 pb-48 bg-black flex flex-col items-center scroll-mt-36"
//     >
//       <h2 className="text-4xl font-bold text-white mb-16 text-center">Experience</h2>

//       <div className="relative w-full max-w-md h-[140vh]">
//         {experiences.map((job, idx) => (
//           <div
//             key={idx}
//             className={`sticky top-28 z-[${10 + idx}] mb-8 h-[440px]`} // reduced from 520px
//           >
//             <ExperienceCard job={job} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// NO GSAP but stacks scrol on top of each other.
//======================================================================================================

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Hexaware Technologies',
    role: 'Intern',
    duration: 'Jul 2020 – Dec 2020',
    tools: ['ASP.NET', 'SQL Server', 'React', 'Azure', 'Java', 'Spring MVC', 'MySQL'],
    description:
      'As a Software Engineering Intern at Hexaware Technologies, I received comprehensive training in Java Full Stack and .NET Full Stack development. I gained hands-on experience with technologies like Java, Spring MVC, ASP.NET, C#, Razor Views, and Web Forms, along with MySQL and SQL Server for backend data management. The internship strengthened my understanding of full-stack application architecture, backend APIs, and dynamic front-end development across both ecosystems.',
  },
  {
    company: 'Hexaware Technologies',
    role: 'Full Stack .NET Developer',
    duration: 'Jan 2021 – Aug 2023',
    endClient: 'Ernst & Young',
    tools: ['ASP.NET', 'SQL Server', 'React', 'Azure'],
    description:
      'Developed enterprise-grade web applications using .NET MVC and Angular, including canteen and blood donation systems. Enhanced database efficiency by 50% through SQL optimization and built SSRS reports for financial compliance. Reduced downtime by 30% by refactoring legacy C# systems and improved sprint velocity via Agile collaboration.',
  },
  {
    company: 'State Street',
    role: 'Full Stack Developer',
    duration: 'Jul 2024 – Present',
    tools: ['.NET Core', 'React', 'Azure', 'Snowflake', 'Redux', 'Bootstrap'],
    description:
      'Developed RESTful APIs using .NET Core for investment data processing and trade workflows. Built responsive React interfaces for real-time stock visualization and portfolio analytics. Optimized Snowflake queries handling 10M+ records, improving data processing speed by 40%. Deployed secure, scalable applications on Azure using App Services and Kubernetes.',
  }
];

function ExperienceCard({ job }) {
  return (
    <div className="w-full max-w-md h-full rounded-xl overflow-hidden shadow-lg border border-zinc-700 bg-zinc-900 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#1f1f1f] border-b border-zinc-700 rounded-t-xl">
        <h3 className="text-white font-semibold text-sm">
          {job.company}
          {job.endClient && (
            <span className="text-white font-semibold text-s ml-2">
              , End-Client: {job.endClient}
            </span>
          )}
        </h3>
        <div className="flex items-center space-x-2">
          <button className="w-5 h-5 flex items-center justify-center text-xs text-white bg-transparent hover:bg-green-600 border border-green-500 rounded-sm">
            &minus;
          </button>
          <button className="w-5 h-5 flex items-center justify-center text-xs text-white bg-transparent hover:bg-yellow-500 border border-yellow-400 rounded-sm">
            &#9633;
          </button>
          <button className="w-5 h-5 flex items-center justify-center text-xs text-white bg-transparent hover:bg-red-600 border border-red-500 rounded-sm">
            &#10005;
          </button>
        </div>
      </div>

      {/* Python content */}
      <div className="px-6 py-4 text-sm font-mono text-gray-200 whitespace-pre-wrap leading-relaxed flex-1 overflow-hidden">
        <span className="text-cyan-400">job</span> = {'{\n'}
        &nbsp;&nbsp;<span className="text-purple-400">"my_role"</span>: <span className="text-yellow-300">"{job.role}"</span>,{'\n'}
        &nbsp;&nbsp;<span className="text-purple-400">"duration"</span>: <span className="text-yellow-300">"{job.duration}"</span>,{'\n'}
        &nbsp;&nbsp;<span className="text-purple-400">"tools"</span>: [
        {job.tools.map((tool, idx) => (
          <span key={tool} className="text-green-400">
            "{tool}"{idx !== job.tools.length - 1 && ', '}
          </span>
        ))}]
        ,{'\n'}
        &nbsp;&nbsp;<span className="text-purple-400">"description"</span>: <span className="text-blue-400">"{job.description}"</span>{'\n'}
        {'}'}
      </div>
    </div>
  );
}

export default function Experience() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          ease: 'power2.out',
          // immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            // start: 'top bottom-=80',
            end: 'bottom center',
            // toggleActions: 'play none none none'
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="w-full px-4 pt-20 pb-28 flex flex-col items-center scroll-mt-20">
      <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Experience</h2>
      <div className="relative w-full max-w-md">
        {experiences.map((job, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="mb-6"
          >
            <ExperienceCard job={job} />
          </div>
        ))}
      </div>
    </section>
  );
}
//================================================================================================================================================


