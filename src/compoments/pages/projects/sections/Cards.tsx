// Compoments
import Card from '../../../utility/Card.tsx';

/** Section Cards
 * @description Affiche la section Cards à l'interieur de la page Projet
 * @returns {JSX.Element} - Section Cards
 * @component Card - Affiche une carte de chaque projet
 */
function Cards(): React.JSX.Element {
  // List des données de chaque projet
  const projects = [
    {
      id: 1,
      title: 'Mon Vieux Grimoire',
      description:
        'Application de notation de livres avec authentification, backend Node.js et base MongoDB. Projet fullstack complet.',
      image: '/images/test.png',
      techs: ['MongoDB', 'Node.js', 'Express', 'JWT', 'Multer'],
      codeUrl: 'https://github.com/aurelienrnd/vieux-grimoire',
      dificulty:
        'les problématiques que vous avez rencontrées et comment vous les avez surmontées',
    },
    {
      id: 2,
      title: 'Kasa',
      description:
        'Application de location avec React et composants dynamiques.',
      dificulty:
        'les problématiques que vous avez rencontrées et comment vous les avez surmontées',
      image: '/images/kasa.png',
      techs: ['React', 'Sass'],
      codeUrl: 'https://github.com/aurelienrnd/kasa',
    },
    {
      id: 3,
      title: 'Booki',
      description:
        'Site vitrine responsive d’une agence de voyage, réalisé en HTML et CSS, avec respect des maquettes et accessibilité.',
      dificulty:
        'les problématiques que vous avez rencontrées et comment vous les avez surmontées',
      image: '/images/booki.png',
      techs: ['HTML', 'CSS'],
      codeUrl: 'https://github.com/aurelienrnd/booki',
    },
    {
      id: 4,
      title: 'Portfolio',
      description:
        'Site personnel de présentation, codé en React, TypeScript et TailwindCSS v4. Responsive, clair et optimisé SEO.',
      dificulty:
        'les problématiques que vous avez rencontrées et comment vous les avez surmontées',
      image: '/images/test.png',
      techs: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      codeUrl: 'https://github.com/aurelienrnd/portfolio',
      siteUrl: 'https://aurelienrnd-portfolio.netlify.app',
    },
  ];

  return (
    <section id="cards" className="">
      <h2 className="">Projets réalisés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-center mx-auto">
        {projects.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Cards;
