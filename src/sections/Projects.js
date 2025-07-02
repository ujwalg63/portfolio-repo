// sections/Projects.js
// import React, { useEffect, useRef } from 'react';
// import ProjectCard from '../components/ProjectCard';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     title: 'Training Course CMS',
//     description:
//       'Developed and maintained a web-based ASP.NET MVC platform for managing professional training content. Enabled admins to create, organize, and track course materials via a secure dashboard, and allowed learners to browse modules using category, popularity, and recency filters. Enhanced Razor-based UI responsiveness and optimized ADO.NET/Entity Framework interactions with SQL Server. Streamlined backend workflows and ensured seamless content moderation and system scalability.',
//     skills: ['ASP.NET MVC', 'Razor Pages', 'ADO.NET', 'Entity Framework', 'SQL Server', 'HTML/CSS', 'JavaScript'],
//     github: 'https://github.com/ujwalg63/OakCourseProjectMVC',
//   },
//   {
//     title: 'EY GlobalOne Individual & Administration Portals',
//     description:
//       'Enhanced and maintained EY’s integrated portals for managing global mobility cases. Improved frontend components using Razor and JavaScript, and optimized backend performance through efficient SQL logic and stored procedures. Contributed to modules like document exchange, comment moderation, and questionnaire workflows. Ensured secure access via ASP.NET Identity and supported CI/CD and release management using Azure DevOps.',
//     skills: ['ASP.NET MVC', 'Web Forms', 'Razor', 'JavaScript', 'SQL Server', 'Stored Procedures', 'Azure DevOps'],
//   },
//   {
//     title: 'Credit Scoring with Social Media',
//     description:
//       'Developed an AI-powered credit scoring system that analyzed users\' social media behavior to assess creditworthiness, especially for those lacking formal credit history. Built ML pipelines using scikit-learn and Pandas to process unstructured data, train Random Forest and clustering models, and evaluate performance. Designed ETL workflows for efficient data ingestion and applied sentiment analysis and image recognition techniques to verify personal claims. The solution followed a microservices architecture and was presented at an internal hackathon, earning finalist recognition.',
//     skills: ['Python', 'scikit-learn', 'Pandas', 'Random Forest', 'Clustering', 'ETL Pipelines', 'Sentiment Analysis'],
//   },
// ];

// export default function Projects() {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     // ensure cards start hidden/offscreen
//     gsap.set(cardsRef.current, { y: 80, opacity: 0 });

//     const ctx = gsap.context(() => {
//       ScrollTrigger.batch(cardsRef.current, {
//         start: 'top 90%',
//         onEnter: batch =>
//           gsap.to(batch, {
//             y: 0,
//             opacity: 1,
//             stagger: 0.1,
//             duration: 0.6,
//             ease: 'power2.out',
//           }),
//         onLeaveBack: batch =>
//           gsap.set(batch, { y: 80, opacity: 0 }),
//       });
//     });

//     return () => {
//       ctx.revert();
//       ScrollTrigger.getAll().forEach(st => st.kill());
//     };
//   }, []);

//   return (
//     <section id="projects" className="py-24 bg-black text-white">
//       <h2 className="text-4xl font-bold text-orange-500 mb-14 text-center">
//         Projects
//       </h2>
//       <div className="flex flex-col items-center space-y-12">
//         {projects.map((project, idx) => (
//           <div
//             key={idx}
//             ref={el => (cardsRef.current[idx] = el)}
//             className="w-full flex justify-center"
//           >
//             <ProjectCard
//               title={project.title}
//               description={project.description}
//               github={project.github}
//               skills={project.skills}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// src/sections/Projects.js
import React, { useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Training Course CMS',
    description:
      'Developed and maintained a web-based ASP.NET MVC platform for managing professional training content. Enabled admins to create, organize, and track course materials via a secure dashboard, and allowed learners to browse modules using category, popularity, and recency filters. Enhanced Razor-based UI responsiveness and optimized ADO.NET/Entity Framework interactions with SQL Server. Streamlined backend workflows and ensured seamless content moderation and system scalability.',
    skills: ['ASP.NET MVC', 'Razor Pages', 'ADO.NET', 'Entity Framework', 'SQL Server', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/ujwalg63/OakCourseProjectMVC',
  },
  {
    title: 'EY GlobalOne Individual & Administration Portals',
    description:
      'Enhanced and maintained EY’s integrated portals for managing global mobility cases. Improved frontend components using Razor and JavaScript, and optimized backend performance through efficient SQL logic and stored procedures. Contributed to modules like document exchange, comment moderation, and questionnaire workflows. Ensured secure access via ASP.NET Identity and supported CI/CD and release management using Azure DevOps.',
    skills: ['ASP.NET MVC', 'Web Forms', 'Razor', 'JavaScript', 'SQL Server', 'Stored Procedures', 'Azure DevOps'],
  },
  {
    title: 'Credit Scoring with Social Media',
    description:
      'Developed an AI-powered credit scoring system that analyzed users\' social media behavior to assess creditworthiness, especially for those lacking formal credit history. Built ML pipelines using scikit-learn and Pandas to process unstructured data, train Random Forest and clustering models, and evaluate performance. Designed ETL workflows for efficient data ingestion and applied sentiment analysis and image recognition techniques to verify personal claims. The solution followed a microservices architecture and was presented at an internal hackathon, earning finalist recognition.',
    skills: ['Python', 'scikit-learn', 'Pandas', 'Random Forest', 'Clustering', 'ETL Pipelines', 'Sentiment Analysis'],
  },
];

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          ease: 'power2.out',
          // immediateRender:false,
          scrollTrigger: {
            trigger: card,
            start: 'top 110%',
            // start:'top bottom-=80',
            end: 'bottom center',
            // toggleActions: 'play none none none'
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="pt-5 pb-12 text-white">
      <h2 className="text-4xl font-bold text-orange-500 mb-14 text-center">
        Projects
      </h2>
      <div className="flex flex-col items-center">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="w-full flex justify-center mb-6"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              github={project.github}
              skills={project.skills}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

