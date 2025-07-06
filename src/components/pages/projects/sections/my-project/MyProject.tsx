import { useEffect, useState } from 'react';
import CarouselProject from './CarouselProject.tsx';
import Description from './Description.tsx';

// Type
export interface ProjectsType {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  image: string;
  techs: string[];
  codeUrl: string;
  siteUrl?: string;
}

function MyProject(): React.JSX.Element {
  const [projects, setProject] = useState<ProjectsType[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch('/datas/projects.json')
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error('Erreur chargement project:', err));
  }, []);

  return (
    <section id="my-project">
      <h2>Projets réalisés</h2>
      <CarouselProject
        projects={projects}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Description projects={projects} selectedIndex={selectedIndex} />
    </section>
  );
}

export default MyProject;
