import type { ProjectsType } from './MyProject.tsx';

interface Props {
  projects: ProjectsType[];
  selectedIndex: number;
}

function Description({ projects, selectedIndex }: Props): React.JSX.Element {
  const curentProject = projects[selectedIndex];

  if (!curentProject) return <p>Chargement...</p>;

  return (
    <article className="w-full flex flex-col items-center justify-center">
      <h3>{curentProject.title}</h3>
      <div>
        <p>{curentProject.description}</p>
        <div className="flex items-center justify-center gap-2">
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
        <a href={curentProject.codeUrl}>Lien du repo git</a>
        <a href={curentProject?.siteUrl}>Lien du site</a>
      </div>
    </article>
  );
}

export default Description;
