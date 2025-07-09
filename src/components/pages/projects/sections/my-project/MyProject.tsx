import { useEffect, useState } from 'react';
import CarouselProject from './CarouselProject.tsx';
import Description from './Description.tsx';
import Loader from '../../../../utility/Loaoder.tsx';

// Type
export interface ProjectType {
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
  const [projects, setProject] = useState<ProjectType[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const curentProject: ProjectType = projects[selectedIndex];

  useEffect(() => {
    fetch('/datas/projects.json')
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error('Erreur chargement project:', err));
  }, []);

  if (!curentProject)
    return (
      <div className="flex flex-col gap-4 items-center justify-center p-12">
        <span>Chargement des projets ...</span>
        <Loader />
      </div>
    );

  return (
    <section id="my-project">
      <h2>Projets réalisés</h2>
      <CarouselProject
        projects={projects}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Description curentProject={curentProject} />
    </section>
  );
}

export default MyProject;
