// // //Just the dark mode
// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Navbar from './components/Navbar';
// import About from './sections/About';
// import Experience from './sections/Experience';
// import Projects from './sections/Projects';
// import './index.css';
// import Skills from './sections/Skills';
// import Contact from './sections/Contact';
// import Footer   from './sections/Footer';

// gsap.registerPlugin(ScrollTrigger);

// export default function App() {
//   const aboutRef = useRef(null);
//   const experienceRef = useRef(null);
//   const projectsRef = useRef(null);
//   const SkillsRef = useRef(null);
//   const ContactRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       [aboutRef, experienceRef, projectsRef, SkillsRef, ContactRef].forEach((ref) => {
//         if (ref.current) {
//           gsap.from(ref.current, {
//             opacity: 0,
//             y: 60,
//             duration: 1,
//             ease: 'power2.out',
//             scrollTrigger: {
//               trigger: ref.current,
//               start: 'top 80%',
//               toggleActions: 'play none none none',
//             },
//           });
//         }
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <Navbar />
//         <main className="relative z-10 pt-16 text-white">
//           <section ref={aboutRef}>
//             <About />
//           </section>
//           <section ref={experienceRef}>
//             <Experience />
//           </section>
//           <section ref={projectsRef}>
//             <Projects />
//           </section>
//           <section ref={SkillsRef}>
//             <Skills />
//           </section>
//           <section ref={ContactRef}>
//             <Contact />
//           </section>
//         </main>
//         <Footer/>
//     </>
//   );
// }





// // //Just the dark mode
// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Navbar from './components/Navbar';
// import About from './sections/About';
// import Experience from './sections/Experience';
// import Projects from './sections/Projects';
// import './index.css';
// import Skills from './sections/Skills';
// import Contact from './sections/Contact';
// import Footer   from './sections/Footer';
// import MeshBackground from './components/MeshBackground';

// gsap.registerPlugin(ScrollTrigger);

// export default function App() {
//   const aboutRef = useRef(null);
//   const experienceRef = useRef(null);
//   const projectsRef = useRef(null);
//   const SkillsRef = useRef(null);
//   const ContactRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       [aboutRef, experienceRef, projectsRef, SkillsRef, ContactRef].forEach((ref) => {
//         if (ref.current) {
//           gsap.from(ref.current, {
//             opacity: 0,
//             y: 60,
//             duration: 1,
//             ease: 'power2.out',
//             scrollTrigger: {
//               trigger: ref.current,
//               start: 'top 80%',
//               toggleActions: 'play none none none',
//             },
//           });
//         }
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <MeshBackground />
//       <Navbar />
//       <main className="relative z-10 pt-16 text-white">
//         <section ref={aboutRef}>
//           <About />
//         </section>
//         <section ref={experienceRef}>
//           <Experience />
//         </section>
//         <section ref={projectsRef}>
//           <Projects />
//         </section>
//         <section ref={SkillsRef}>
//           <Skills />
//         </section>
//         <section ref={ContactRef}>
//           <Contact />
//         </section>
//       </main>
//       <Footer/>
//     </>
//   );
// }


//======================================================================================================
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import MeshBackground from './components/MeshBackground';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Section refs for GSAP animation
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      [
        aboutRef,
        experienceRef,
        projectsRef,
        skillsRef,
        contactRef
      ].forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // The main wrapper is relative so the mesh can fill the whole app
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Mesh is positioned absolutely behind everything in the app, always visible but never blocking */}
      <MeshBackground />

      {/* Navbar stays on top */}
      <Navbar />

      {/* Main content: always z-10, so never covered by mesh */}
      <main className="relative z-10 pt-16 text-white">
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      {/* Footer below everything, but still z-10 by inheritance */}
      <Footer />
    </div>
  );
}



