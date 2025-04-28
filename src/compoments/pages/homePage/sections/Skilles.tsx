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
      technologie: 'CSS:',
      maitrise: '75%',
      logo: faCss,
      ref: useRef<HTMLDivElement>(null!),
    },
    {
      technologie: 'React:',
      maitrise: '65%',
      logo: faReact,
      ref: useRef<HTMLDivElement>(null!),
    },
    {
      technologie: 'JavaScript:',
      maitrise: '75%',
      logo: faJs,
      ref: useRef<HTMLDivElement>(null!),
    },
    {
      technologie: 'Node.js:',
      maitrise: '50%',
      logo: faNodeJs,
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
    <section id="skilles" className="flex flex-col gap-8 md:gap-16">
      <h2>Mes compétence de developpeur</h2>
      <div className="flex flex-col h-1/2 justify-between">
        {skilles.map((skill, index) => (
          <Skill
            key={`${skill.technologie}-${index}`}
            skill={skill}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}

export default Skilles;
