import { useEffect, useRef, useState } from 'react';

function About(): React.JSX.Element {
  //gestion de l'etat de chaque phrase
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  //contien les info de chaque phrase
  const santanceList = [
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
    // pour chaque phrase
    santanceList.map((santance, index) => {
      // je creer un observateur
      const observer = new IntersectionObserver(
        elements => {
          elements.forEach(element => {
            // si l'element rentre dans le viewpoint
            if (element.isIntersecting) {
              // je l'affiche
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

      // j'associe la phrase a l'observateur
      const currentRef = santance.ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      // je stop l'observation
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    });
  });

  return (
    <section id="about" className="flex flex-col gap-8 md:gap-16 ">
      <h2 className="">Trouver un Titrre</h2>

      <div className="h-full flex flex-col gap-4 md:gap-0 md:justify-between pb-4">
        {santanceList.map((santance, index) => (
          <span
            ref={santance.ref}
            key={santance.key}
            className={`                                  
              ${isVisible[index] ? `${santance.classStyle}` : 'opacity-0'} 
              w-2/3 md:text-center`}
          >
            {santance.text}
          </span>
        ))}
      </div>
    </section>
  );
}
export default About;
