import useEmblaCarousel from 'embla-carousel-react';
import type { ProjectsType } from './MyProject.tsx';
interface Prop {
  projects: ProjectsType[];
}

function CarouselProject({ projects }: Prop): React.JSX.Element {
  const [emblaRef] = useEmblaCarousel();
  console.log(projects);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
}

export default CarouselProject;
