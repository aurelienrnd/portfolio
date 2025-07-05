import type { ProjectsType } from './MyProject.tsx';
interface Prop {
  projects: ProjectsType[];
}

function CarouselProject({ projects }: Prop): React.JSX.Element {
  console.log(projects);
  return <div></div>;
}

export default CarouselProject;
