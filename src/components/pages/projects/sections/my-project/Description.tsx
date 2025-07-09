import type { ProjectsType } from './MyProject.tsx';
import Loader from '../../../../utility/Loaoder.tsx';

interface Props {
  projects: ProjectsType[];
  selectedIndex: number;
}

function Description({ projects, selectedIndex }: Props): React.JSX.Element {
  const curentProject = projects[selectedIndex];

  if (!curentProject)
    return (
      <div className="flex flex-col gap-4 items-center justify-center">
        <span>Chargement des projets ...</span>
        <Loader />
      </div>
    );

  return (
    <article className="w-full flex flex-col gap-2 items-center md:items-start justify-center text-focus-in">
      <h3>{curentProject.title}</h3>
      <div className="flex flex-col gap-4">
        <p>{curentProject.description}</p>
        <div className=" flex flex-wrap items-center justify-center md:justify-start gap-2">
          {curentProject.techs.map(tech => (
            <span
              className="bg-color-three text-color-four p-1 rounded-md"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
        <p>{curentProject.difficulty}</p>
        <div className="flex justify-between md:justify-start md:gap-4 text-color-three">
          <a
            href={curentProject.codeUrl}
            className="hover:border-1 border-color-three p-1 rounded-md"
          >
            Voir repo Github
          </a>
          {curentProject.siteUrl && (
            <a
              href={curentProject?.siteUrl}
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
