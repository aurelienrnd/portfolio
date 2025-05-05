// Hooks
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
  // Liste des données de chaque skill
  const skilles = [
    {
      technologie: 'HTML5',
      logo: faHtml5,
      description:
        'Structure propre et sémantique des pages web, avec attention à l’accessibilité.',
    },
    {
      technologie: 'CSS3',
      logo: faCss,
      description:
        'Mise en page responsive avec Flexbox et Grid, animations simples et design soigné.',
    },
    {
      technologie: 'JavaScript',
      logo: faJs,
      description:
        'Scripts dynamiques, interactions DOM, logique d’application claire et modulaire.',
    },
    {
      technologie: 'React',
      logo: faReact,
      description:
        'Composants fonctionnels, gestion d’état, hooks et routage via React Router.',
    },
    {
      technologie: 'Express.js',
      logo: faNodeJs,
      description:
        'Création d’API REST simples, gestion des routes et middleware côté serveur.',
    },
    {
      technologie: 'TailwindCSS',
      logo: faCss,
      description:
        'Stylisation rapide, design responsive moderne et respect d’une charte graphique cohérente.',
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

  return (
    <section id="skilles">
      <h2>Mes compétence en developpement web</h2>

      <div className="flex flex-col gap-8 md:h-full md:justify-between">
        <div className="flex flex-col justify-around gap-4 md:h-3/4">
          {skilles.map((skill, index) => (
            <Skill key={`${skill.technologie}-${index}`} skill={skill} />
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
