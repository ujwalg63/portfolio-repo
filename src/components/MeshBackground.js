// src/components/MeshBackground.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function MeshBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="mesh-background"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: 'transparent' },
        particles: {
          number: { value: 60, density: { enable: true, area: 1200 } },
          color: { value: '#ff6600' },
          shape: { type: 'circle' },
          opacity: { value: 0.6, random: false },
          size: { value: 2, random: true },
          links: {
            enable: true,
            distance: 150,
            color: '#ff6600',
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' }
          }
        },
        detectRetina: true
      }}
    />
  );
}
