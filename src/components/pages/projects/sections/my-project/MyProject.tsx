import { useEffect, useState } from 'react';
import CarouselProject from './CarouselProject';

// Type
export interface ProjectsType {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  image: string;
  techs: string[];
  codeUrl: string;
}

function MyProject(): React.JSX.Element {
  // Liste des données de chaque projet
  const [projects, setProject] = useState<ProjectsType[]>([]);

  useEffect(() => {
    fetch('/datas/projects.json')
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error('Erreur chargement project:', err));
  }, []);

  return (
    <section id="my-project">
      <h2>Projets réalisés</h2>
      <CarouselProject projects={projects} />
    </section>
  );
}

export default MyProject;
