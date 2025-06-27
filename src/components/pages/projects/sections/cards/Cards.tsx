// Hooks
import { useEffect, useState } from 'react';
// Compoments
import Card from './Card.tsx';
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

/** Section Cards
 * @description - Effectue une requête pour récupérer la liste des différents projets.
 * @returns {JSX.Element} - La section des cartes projets.
 * @component Card - Affiche une carte pour chaque projet.
 */
function Cards(): React.JSX.Element {
  // Liste des données de chaque projet
  const [projects, setProject] = useState<ProjectsType[]>([]);

  useEffect(() => {
    fetch('/datas/projects.json')
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error('Erreur chargement project:', err));
  }, []);

  return (
    <section id="cards" className="">
      <h2 className="">Projets réalisés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-center mx-auto">
        {projects.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Cards;
