// Hooks
import { useEffect, useRef, useState } from 'react';
import Skill from '../../../utility/Skill';
import {
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faCss,
} from '@fortawesome/free-brands-svg-icons';

/** Section Skilles
 * @description Affiche la section Skilles à l'interieur de HomePage
 * @returns {JSX.Element} - Section Skilles
 * @component Skill - Affiche une animation en % de chaque skill
 */
function Skilles(): React.JSX.Element {
  //Gestion de l'état d'affichage de chaque skill
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  // Liste des données de chaque skill
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

  //Liste des données de chaque soft skill
  const softSkilles = [
    { name: 'Autonomie', type: 'soft' },
    { name: 'Adaptabilité', type: 'soft' },
    { name: 'Rigueur', type: 'soft' },
    { name: 'Travail en équipe', type: 'soft' },
    { name: 'Responsive Design', type: 'transvers' },
    { name: 'SEO de base', type: 'transvers' },
    { name: 'Git & GitHub', type: 'transvers' },
    { name: 'Notion', type: 'transvers' },
  ];

  // Démarre l'animation quand l'element rentre dans le viewport
  useEffect(() => {
    // Pour chaque skill
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

      <div className="flex flex-col gap-8 md:h-full md:justify-between">
        <div className="flex flex-col justify-around gap-4 md:h-3/4">
          {skilles.map((skill, index) => (
            <Skill
              key={`${skill.technologie}-${index}`}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 md:h-1/4 md:justify-center">
          <h3 className="">Compétences transverses & soft skills</h3>

          <div className="flex flex-wrap gap-2">
            {softSkilles.map((skilles, index) => (
              <span
                key={`${skilles.name}-${index}`}
                className={` ${
                  skilles.type === 'soft'
                    ? 'bg-color-four text-color-two'
                    : 'bg-color-three text-color-four'
                } 
                   border-1 border-color-three p-1 rounded-md `}
              >
                {skilles.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skilles;
