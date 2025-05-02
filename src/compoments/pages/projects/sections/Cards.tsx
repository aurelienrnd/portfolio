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
      dificulty:
        'La gestion des erreurs et des routes dans une API REST m’a posé problème au début, mais j’ai mis en place une architecture claire en middleware et testé chaque endpoint avec Postman pour garantir la stabilité du back-end',
      image: '/images/mon-vieux-grimoire.webp',
      techs: ['MongoDB', 'Node.js', 'Express', 'JWT', 'Multer'],
      codeUrl: 'https://github.com/aurelienrnd/Le_Vieux_Grimoire_Backend.git',
    },
    {
      id: 2,
      title: 'Kasa',
      description:
        'Application de location avec React et composants dynamiques.',
      dificulty:
        'les problématiques que vous avez rencontrées et comment vous les avez surmontées',
      image: '/images/kasa.webp',
      techs: ['React', 'Sass'],
      codeUrl: 'https://github.com/aurelienrnd/kasa',
    },
    {
      id: 3,
      title: 'Booki',
      description:
        'Site vitrine responsive d’une agence de voyage, réalisé en HTML et CSS, avec respect des maquettes et accessibilité.',
      dificulty:
        'J’ai été confronté à la complexité des routes dynamiques avec React Router, que j’ai réussi à dompter en structurant soigneusement mes composants',
      image: '/images/booki.webp',
      techs: ['HTML', 'CSS'],
      codeUrl: 'https://github.com/aurelienrnd/booki',
    },
    {
      id: 4,
      title: 'Portfolio',
      description:
        'Site personnel de présentation, codé en React, TypeScript et TailwindCSS v4. Responsive, clair et optimisé SEO.',
      dificulty:
        'N’ayant jamais utilisé TypeScript ni TailwindCSS v4, j’ai dû surmonter une courbe d’apprentissage abrupte en suivant des tutoriels ciblés et en explorant activement la documentation pour comprendre la logique des types et des classes utilitaires.',
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
