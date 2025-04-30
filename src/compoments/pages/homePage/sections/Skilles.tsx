import { useEffect, useRef, useState } from 'react';
import Skill from '../../../utility/Skill';
import {
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faCss,
} from '@fortawesome/free-brands-svg-icons';

function Skilles() {
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const skilles = [
    {
      technologie: 'HTML5:',
      maitrise: '80%',
      logo: faHtml5,
      ref: useRef<HTMLDivElement>(null!),
    },
    {
      technologie: 'CSS3:',
      maitrise: '75%',
      logo: faCss,
      ref: useRef<HTMLDivElement>(null!),
    },
    {
      technologie: 'JavaScript:',
      maitrise: '75%',
      logo: faJs,
      ref: useRef<HTMLDivElement>(null!),
    },
    {
      technologie: 'React:',
      maitrise: '65%',
      logo: faReact,
      ref: useRef<HTMLDivElement>(null!),
    },
    {
      technologie: 'Express.js:',
      maitrise: '50%',
      logo: faNodeJs, // Pas d’icône FA pour Express, tu peux réutiliser celle de Node.js
      ref: useRef<HTMLDivElement>(null!),
    },
    {
      technologie: 'Tailwind:',
      maitrise: '70%',
      logo: faCss, // Remplaçable par une image custom ou un composant SVG
      ref: useRef<HTMLDivElement>(null!),
    },
  ];

  useEffect(() => {
    // Pour chaque phrase
    skilles.map((skill, index) => {
      // Je créer un observateur
      const observer = new IntersectionObserver(
        elements => {
          elements.forEach(element => {
            // Si l'element rentre dans le viewpoint
            if (element.isIntersecting) {
              // Je l'affiche
              setIsVisible(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      // J'associe la phrase a l'observateur
      const currentRef = skill.ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      // Je stop l'observation
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    });
  });

  return (
    <section id="skilles">
      <h2>Mes compétence en developpement web</h2>

      <div className=" md:my-4 md:flex-row md:h-full">
        <div className="flex flex-col gap-4 md:justify-between h-full">
          {skilles.map((skill, index) => (
            <Skill
              key={`${skill.technologie}-${index}`}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">
            Compétences transverses & soft skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {/* Soft skills */}
            <span className="bg-color-four text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Autonomie
            </span>
            <span className="bg-color-four text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Adaptabilité
            </span>
            <span className="bg-color-four text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Rigueur
            </span>
            <span className="bg-color-four text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Travail en équipe
            </span>

            {/* Compétences annexes */}
            <span className="bg-color-three text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Responsive Design
            </span>
            <span className="bg-color-three text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform">
              SEO de base
            </span>
            <span className="bg-color-three text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Git & GitHub
            </span>
            <span className="bg-color-three text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Trello / Kanban
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skilles;
