// Compoments
import Card from '../../../utility/Card.tsx';

/** Section Skilles
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
    },
    {
      id: 2,
      title: 'Kasa',
      description:
        'Application de location avec React et composants dynamiques.',
      image: '/images/test.png',
      techs: ['React', 'Sass'],
      codeUrl: 'https://github.com/aurelienrnd/kasa',
    },
    {
      id: 3,
      title: 'Booki',
      description:
        'Site vitrine responsive d’une agence de voyage, réalisé en HTML et CSS, avec respect des maquettes et accessibilité.',
      image: '/images/test.png',
      techs: ['HTML', 'CSS'],
      codeUrl: 'https://github.com/aurelienrnd/booki',
    },
    {
      id: 4,
      title: 'Portfolio',
      description:
        'Site personnel de présentation, codé en React, TypeScript et TailwindCSS v4. Responsive, clair et optimisé SEO.',
      image: '/images/test.png',
      techs: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      codeUrl: 'https://github.com/aurelienrnd/portfolio',
      siteUrl: 'https://aurelienrnd-portfolio.netlify.app',
    },
  ];

  return (
    <section id="cards" className="">
      <h2 className="">Projets réalisés</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
        {projects.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Cards;
