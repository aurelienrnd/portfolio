import { useEffect, useRef, useState } from 'react';

/** Section About
 * @description Affiche la section About
 * utilise un UseState et useEffect pour afficher le texte au fur et amesure que l'utilisateur schrool
 */
function About(): React.JSX.Element {
  //Gestion de l'etat de chaque phrase
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  //Contient les info de chaque phrase
  const sentenceList = [
    {
      text: 'Après 10 ans dans l’industrie en tant qu’opérateur et pilote de ligne industriel, j’ai décidé de donner un nouveau souffle à mon parcours.',
      classStyle: 'slide-left',
      ref: useRef<HTMLSpanElement>(null),
      kef: 'santance0',
    },
    {
      text: 'En quête de sens et de défis, j’ai entrepris un tour du monde. Cette aventure m’a permis de développer mon autonomie, mon adaptabilité et mon envie constante d’apprendre.',
      classStyle: 'self-end slide-right',
      ref: useRef<HTMLSpanElement>(null),
      key: 'santance1',
    },
    {
      text: 'C’est au retour que j’ai choisi de me reconvertir dans le développement web, un domaine qui allie logique technique et création.',
      classStyle: 'slide-left',
      ref: useRef<HTMLSpanElement>(null),
      key: 'santance2',
    },
    {
      text: 'J’ai alors suivi une formation à distance tout en vivant à l’étranger, ce qui m’a appris à travailler de manière disciplinée et autonome dans tous les contextes.',
      classStyle: 'self-end slide-right',
      ref: useRef<HTMLSpanElement>(null),
      key: 'santance3',
    },
    {
      text: 'Aujourd’hui, je conçois des sites et applications web modernes, performants et centrés utilisateur avec des technologies comme HTML, CSS, JavaScript, React et Node.js.',
      classStyle: 'slide-left',
      ref: useRef<HTMLSpanElement>(null),
      key: 'santance4',
    },
    {
      text: 'Curieux, adaptable et rigoureux, je suis à la recherche d’un poste ou demissions freelance pour continuer à évoluer et contribuer à des projets concrets.',
      classStyle: 'self-end slide-right',
      ref: useRef<HTMLSpanElement>(null),
      key: 'santance5',
    },
  ];

  useEffect(() => {
    // Pour chaque phrase
    sentenceList.map((sentence, index) => {
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
      const currentRef = sentence.ref.current;
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
    <section id="about" className="flex flex-col gap-8 md:gap-16 ">
      <h2 className="">Mon parcours de développeur</h2>

      <div className="h-full flex flex-col gap-4 md:gap-0 md:justify-between pb-4">
        {sentenceList.map((sentence, index) => (
          <span
            ref={sentence.ref}
            key={sentence.key}
            className={`                                  
              ${isVisible[index] ? `${sentence.classStyle}` : 'opacity-0'} 
              w-2/3 md:text-center`}
          >
            {sentence.text}
          </span>
        ))}
      </div>
    </section>
  );
}
export default About;
