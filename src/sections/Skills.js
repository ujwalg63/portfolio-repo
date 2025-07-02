import React, { useRef, useEffect } from 'react'
import {
  DiJava,
  DiPython,
  DiDotnet,
  DiMsqlServer,
  DiMysql,
  DiJavascript1,
  DiReact,
  DiVisualstudio,
  DiGit,
} from 'react-icons/di'
import { SiHtml5, SiCss3 } from 'react-icons/si'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { Icon: DiJava,        label: 'Java',           color: '#007396' },
  { Icon: DiPython,      label: 'Python',         color: '#3776AB' },
  { Icon: DiDotnet,      label: '.NET',           color: '#512BD4' },
  { Icon: DiMsqlServer,  label: 'MS SQL Server',  color: '#CC2927' },
  { Icon: DiMysql,       label: 'MySQL',          color: '#4479A1' },
  { Icon: DiDotnet,      label: 'C#',             color: '#178600' },
  { Icon: DiJavascript1, label: 'JavaScript',     color: '#F7DF1E' },
  { Icon: SiHtml5,       label: 'HTML',           color: '#E34F26' },
  { Icon: SiCss3,        label: 'CSS',            color: '#1572B6' },
  { Icon: DiReact,       label: 'React',          color: '#61DAFB' },
  { Icon: DiVisualstudio,label: 'Visual Studio',  color: '#5C2D91' },
  { Icon: DiVisualstudio,label: 'VS Code',        color: '#007ACC' },
  { Icon: DiGit,         label: 'Git',            color: '#F05032' },
]

export default function Skills() {
  const iconsRef = useRef([])

  useEffect(() => {
    iconsRef.current.forEach((iconEl, i) => {
      gsap.fromTo(
        iconEl,
        { rotation: -5 },
        {
          rotation: 5,
          duration: 0.1,
          ease: 'power1.inOut',
          immediateRender: false,
          yoyo: true,
          repeat: 5,
          delay: i * 0.05,
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
          onComplete: () => gsap.to(iconEl, { rotation: 0, duration: 0.2 })
        }
      )
    })
  }, [])

  return (
    <section
      id="skills"
      className="py-20 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-orange-500 mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ Icon, label, color }, i) => (
          <div
            key={i}
            ref={el => (iconsRef.current[i] = el)}
            className="flex flex-col items-center space-y-2"
          >
            <div
              className="w-16 h-16 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center transition-shadow duration-300 cursor-pointer"
              style={{
                boxShadow: `0 0 0 rgba(0,0,0,0)`, // default shadow
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 16px 4px ${color}`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`}
            >
              <Icon className="text-3xl" style={{ color }} />
            </div>
            <span className="text-white text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
