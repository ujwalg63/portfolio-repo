// Vertical squares shape
// // components/ProjectCard.js
// import React, { forwardRef } from 'react';
// import { FaGithub } from 'react-icons/fa';

// const ProjectCard = forwardRef(({ title, description, skills, github }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-[90vw] max-w-[400px] px-6 py-6 rounded-2xl shadow-2xl 
//                  bg-white/10 backdrop-blur-xl border border-white/10 
//                  transform-gpu transition-all duration-500"
//     >
//       <div className="flex justify-between items-start mb-4">
//         <h3 className="text-lg font-semibold text-white leading-snug">{title}</h3>
//         {github && (
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-orange-500 text-lg transition-colors duration-300"
//           >
//             <FaGithub />
//           </a>
//         )}
//       </div>
//       <p className="text-gray-300 text-sm leading-relaxed mb-4">
//         {description}
//       </p>
//       {skills?.length > 0 && (
//         <p className="text-gray-400 text-sm leading-snug">
//           {skills.join(' • ')}
//         </p>
//       )}
//     </div>
//   );
// });

// export default ProjectCard;



// Rectangular shape stacks
// components/ProjectCard.js
// components/ProjectCard.js
import React, { forwardRef } from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = forwardRef(({ title, description, skills, github }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full max-w-3xl px-6 py-5 rounded-2xl shadow-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-2xl border border-white/20"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 text-xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
        )}
      </div>
      <p className="text-gray-200 text-sm leading-relaxed mb-3">{description}</p>
      {skills?.length > 0 && (
        <p className="text-gray-400 text-sm">{skills.join(' • ')}</p>
      )}
    </div>
  );
});

export default ProjectCard;
