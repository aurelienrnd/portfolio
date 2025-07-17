import type { ProjectType } from './MyProject.tsx';

// Typage TypeScript
type Prop = {
  curentProject: ProjectType;
};

/** Affiche les détails du projet sélectionné.
 * @description Ce composant présente le titre, la description, les technologies utilisées,
 * la difficulté et les liens vers le code source et le site en ligne (si disponible).
 * @param {ProjectType} props.curentProject - Le projet actuellement sélectionné à afficher.
 * @returns {JSX.Element} Un article contenant les informations détaillées du projet.
 */
function Description({ curentProject }: Prop): React.JSX.Element {
  return (
    <article className="w-full flex flex-col gap-2 items-center md:items-start justify-center text-focus-in">
      <h3>{curentProject.title}</h3>
      <div className="flex flex-col gap-4">
        <p>{curentProject.description}</p>
        <div className=" flex flex-wrap items-center justify-center md:justify-start gap-2">
          {curentProject.techs.map((tech: string, index: number) => (
            <span
              className="bg-color-three text-color-four p-1 rounded-md"
              key={`${tech}-${index}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <p>{curentProject.difficulty}</p>
        <div className="flex justify-between md:justify-start md:gap-4 text-color-three">
          <a
            href={curentProject.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-1 border-color-three p-1 rounded-md"
          >
            Voir repo Github
          </a>
          {curentProject.siteUrl && (
            <a
              href={curentProject?.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-1 border-color-three p-1 rounded-md"
            >
              Voir le site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Description;
