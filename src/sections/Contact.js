// // src/sections/Contact.js
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function Contact() {
//   const tileRef = useRef(null);            // ← ref for the whole card

//   useEffect(() => {
//     const el = tileRef.current;
//     if (!el) return;

//     gsap.fromTo(
//       el,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.6,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: el,
//           start: 'top 90%',     // fire when the card approaches the viewport
//           end:   'bottom center',
//           scrub: 1,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section id="contact" className="py-20 bg-black text-white">
//       <h2 className="text-4xl font-bold text-orange-500 mb-14 text-center">
//         Get in Touch
//       </h2>

//       {/* animated tile */}
//       <div
//         ref={tileRef}
//         className="
//           w-full max-w-4xl mx-auto
//           px-8 py-10
//           bg-gradient-to-br from-white/20 to-white/10
//           backdrop-blur-lg
//           border border-white/10
//           rounded-2xl
//           flex flex-col md:flex-row gap-10
//         "
//       >
//         {/* Left column: intro text */}
//         <div className="md:w-1/2 text-gray-200 italic leading-relaxed">
//           I’m always excited to connect with driven and curious individuals.
//           Whether you’re a recruiter, a hiring manager, or someone who simply
//           came across this site, I truly appreciate your interest. Every
//           connection opens the door to new conversations and possibilities.
//           <br />
//           <br />
//           If you have something in mind—whether it's a potential opportunity, a
//           collaboration, or even just a thoughtful discussion—feel free to reach
//           out. I value meaningful interactions and enjoy hearing fresh ideas,
//           exchanging perspectives, or simply connecting with people from
//           different walks of life. Let’s start a conversation and see where it
//           takes us.
//         </div>

//         {/* Right column: form */}
//         <form className="md:w-1/2 flex flex-col space-y-6">
//           {['Name', 'Email'].map((field) => (
//             <div key={field} className="flex flex-col italic">
//               <label className="mb-1 font-medium">{field}</label>
//               <input
//                 type={field === 'Email' ? 'email' : 'text'}
//                 placeholder={`Enter your ${field.toLowerCase()}...`}
//                 className="
//                   w-full
//                   bg-gradient-to-br from-white/20 to-white/10
//                   backdrop-blur-lg
//                   border border-white/10
//                   rounded-lg
//                   px-4 py-2
//                   placeholder-gray-400 text-black
//                   focus:outline-none focus:ring-2 focus:ring-orange-500
//                   transition
//                   placeholder:italic
//                 "
//               />
//             </div>
//           ))}

//           <div className="flex flex-col italic">
//             <label className="mb-1 font-medium">Message</label>
//             <textarea
//               rows={5}
//               placeholder="Write your message here..."
//               className="
//                 w-full
//                 bg-gradient-to-br from-white/10 to-white/5
//                 backdrop-blur-lg
//                 border border-white/10
//                 rounded-lg
//                 px-4 py-3
//                 placeholder-gray-400 text-black
//                 focus:outline-none focus:ring-2 focus:ring-orange-500
//                 transition
//                 placeholder:italic
//               "
//             />
//           </div>

//           <button
//             type="submit"
//             className="
//               mx-auto
//               inline-flex items-center justify-center
//               w-40             /* ≈ 160 px wide — adjust as you like */
//               py-3
//               p
//               bg-orange-500 text-white
//               rounded-full
//               text-base font-semibold
//               hover:bg-orange-600
//               transition
//             "
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const tileRef = useRef(null);
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const el = tileRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        // immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          // start: 'top bottom-=80',
          end: 'bottom center',
          // toggleActions: 'play none none none',
          scrub: 1,
        },
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c8fajex',
        'template_wusbgr6',
        formRef.current,
        'gx_91ktdk5SeJGh1d'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setFormStatus('Something went wrong. Try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 text-white">
      <h2 className="text-4xl font-bold text-orange-500 mb-14 text-center">
        Get in Touch
      </h2>

      <div
        ref={tileRef}
        className="
          w-full max-w-4xl mx-auto
          px-8 py-10
          bg-gradient-to-br from-white/20 to-white/10
          backdrop-blur-lg
          border border-white/10
          rounded-2xl
          flex flex-col md:flex-row gap-10
        "
      >
        {/* Left column: intro text */}
        <div className="md:w-1/2 text-gray-200 italic leading-relaxed">
          I’m always excited to connect with driven and curious individuals.
          Whether you’re a recruiter, a hiring manager, or someone who simply
          came across this site, I truly appreciate your interest. Every
          connection opens the door to new conversations and possibilities.
          <br />
          <br />
          If you have something in mind—whether it's a potential opportunity, a
          collaboration, or even just a thoughtful discussion—feel free to reach
          out. I value meaningful interactions and enjoy hearing fresh ideas,
          exchanging perspectives, or simply connecting with people from
         different walks of life. Let’s start a conversation and see where it
        takes us.
      </div>

        {/* Right column: form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="md:w-1/2 flex flex-col space-y-6"
        >
          {['Name', 'Email'].map((field) => (
            <div key={field} className="flex flex-col italic">
              <label className="mb-1 font-medium">{field}</label>
              <input
                type={field === 'Email' ? 'email' : 'text'}
                name={field.toLowerCase()}
                required
                placeholder={`Enter your ${field.toLowerCase()}...`}
                className="
                  w-full
                  bg-gradient-to-br from-white/20 to-white/10
                  backdrop-blur-lg
                  border border-white/10
                  rounded-lg
                  px-4 py-2
                  placeholder-gray-400 text-black
                  focus:outline-none focus:ring-2 focus:ring-orange-500
                  transition
                  placeholder:italic
                "
              />
            </div>
          ))}

          <div className="flex flex-col italic">
            <label className="mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className="
                w-full
                bg-gradient-to-br from-white/10 to-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-lg
                px-4 py-3
                placeholder-gray-400 text-black
                focus:outline-none focus:ring-2 focus:ring-orange-500
                transition
                placeholder:italic
              "
            />
          </div>

          <button
            type="submit"
            className="
              mx-auto
              inline-flex items-center justify-center
              w-40
              py-3
              bg-orange-500 text-white
              rounded-full
              text-base font-semibold
              hover:bg-orange-600
              transition
            "
          >
            Send Message
          </button>

          {formStatus && (
            <p className="text-center text-sm text-green-400 pt-2">{formStatus}</p>
          )}
        </form>
      </div>
    </section>
  );
}
