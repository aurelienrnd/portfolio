import { useEffect, useState } from 'react';
// Type
interface ProjectsType {
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

    console.log(projects);
  }, []);

  return (
    <section id="my-project">
      <h2>Projets réalisés</h2>
      {/* Création d'un carousell*/}
    </section>
  );
}

export default MyProject;
