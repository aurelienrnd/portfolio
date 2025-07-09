import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { ProjectsType } from './MyProject.tsx';
import {
  PrevButton,
  NextButton,
} from '../../../../utility/ArrowButtonCarousel.tsx';
import usePrevNextButtons from '../../../../utility/custom-hooks/usePrevNextCarouselButtons.tsx';

interface Props {
  projects: ProjectsType[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

function CarouselProject({
  projects,
  selectedIndex,
  setSelectedIndex,
}: Props): React.JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, setSelectedIndex]);

  return (
    <div className="w-full overflow-hidden flex flex-col gap-4" ref={emblaRef}>
      <div className="flex">
        {projects.map((project, index) => (
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
