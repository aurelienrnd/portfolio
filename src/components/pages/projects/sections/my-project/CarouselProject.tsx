import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  PrevButton,
  NextButton,
} from '../../../../utility/ArrowButtonCarousel.tsx';
import usePrevNextButtons from '../../../../utility/custom-hooks/usePrevNextCarouselButtons.tsx';
import type { ProjectType } from './MyProject.tsx';
import type { UsePrevNextButtonsType } from '../../../../utility/custom-hooks/usePrevNextCarouselButtons.tsx';

// Typage TypeScript
type Props = {
  projects: ProjectType[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

/**
 * Affiche un carrousel interactif de projets.
 * @description Utilise la librairie Embla Carousel pour afficher les projets sous forme de slides.
 * L'utilisateur peut naviguer entre les projets à l'aide des boutons "Précédent" et "Suivant".
 * Utilise map sur le tableau Projects pour affichier chaque projet
 *
 * @param {ProjectType[]} props.projects - Liste des projets à afficher dans le carrousel.
 * @param {number} props.selectedIndex - Index du projet actuellement sélectionné.
 * @param {function} props.setSelectedIndex - Fonction pour mettre à jour l’index sélectionné.
 *
 * @component PrevButton - Bouton de navigation vers le slide précédent.
 * @component NextButton - Bouton de navigation vers le slide suivant.
 *
 * @returns {JSX.Element} Le composant carrousel avec ses éléments visuels et ses contrôles.
 */
function CarouselProject({
  projects,
  selectedIndex,
  setSelectedIndex,
}: Props): React.JSX.Element {
  //Initialisation du carrousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  // Récuperation des fonctions suivante et précédante de chaque bouton
  const { onPrevButtonClick, onNextButtonClick }: UsePrevNextButtonsType =
    usePrevNextButtons(emblaApi);

  // Met à jour l'index du projet sélectionné lorsque l'utilisateur change de slide dans le carrousel.
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = (): void => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, setSelectedIndex]);

  return (
    <div className="w-full overflow-hidden flex flex-col gap-4" ref={emblaRef}>
      <div className="flex">
        {projects.map((project: ProjectType, index: number) => (
          <div
            key={`project-${project.id}`}
            className={`md:flex-[0_0_40%] flex-[0_0_80%] min-w-0 px-4 transition-opacity duration-300 ${
              index === selectedIndex ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4">
        <PrevButton onClick={onPrevButtonClick} />
        <NextButton onClick={onNextButtonClick} />
      </div>
    </div>
  );
}

export default CarouselProject;
