function Cards() {
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
    <section className="p-8 flex flex-col gap-8">
      <h2 className="text-2xl font-semibold">Projets réalisés</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
        {projects.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Cards;

type Props = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  codeUrl: string;
  siteUrl?: string;
};

function Card({ title, description, image, techs, codeUrl, siteUrl }: Props) {
  return (
    <div className="bg-color-two text-color-one p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={`aperçu du projet ${title}`}
        className="rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex gap-2 mb-4 flex-wrap">
        {techs.map(tech => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-color-four text-white rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            className="text-color-three hover:underline"
          >
            Voir le site
          </a>
        )}
        <a
          href={codeUrl}
          target="_blank"
          className="text-color-three hover:underline"
        >
          Code source
        </a>
      </div>
    </div>
  );
}
