import React, { useEffect, useState } from 'react';
import CarouselProject from './CarouselProject.tsx';
import Description from './Description.tsx';
import Loader from '../../../../utility/Loaoder.tsx';

// Typage TypeScript
export type ProjectType = {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  image: string;
  techs: string[];
  codeUrl: string;
  siteUrl?: string;
};

/** Affiche les différents projets.
 * @description Récupère les projets depuis un fichier JSON situé dans le dossier public, puis les affiche dans un carrousel.
 * Le projet sélectionné est affiché dans une modal avec son image et sa description.
 * Un loader est affiché pendant le chargement des données.
 *
 * @component Loader - Affiche un indicateur de chargement pendant la récupération des données.
 * @component CarouselProject - Composant qui affiche les projets sous forme de carrousel interactif.
 * @component Description - Composant qui affiche la description détaillée du projet sélectionné.
 *
 * @returns {JSX.Element} La section contenant le carrousel et les détails du projet sélectionné.
 */
function MyProject(): React.JSX.Element {
  // Liste de tous les projets réalisés
  const [projects, setProject] = useState<ProjectType[]>([]);
  // Index du projet actuellement affiché dans la modal
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // Projet actuellement affiché
  const curentProject: ProjectType = projects[selectedIndex];

  // Récupération des projets depuis le fichier JSON local
  useEffect(() => {
    fetch('/datas/projects.json')
      .then((res: Response) => res.json())
      .then((data: ProjectType[]) => setProject(data))
      .catch((err: Error) => console.error('Erreur chargement project:', err));
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
