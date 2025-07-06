import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { ProjectsType } from './MyProject.tsx';

interface Prop {
  projects: ProjectsType[];
}

function CarouselProject({ projects }: Prop): React.JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
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
    </div>
  );
}

export default CarouselProject;
