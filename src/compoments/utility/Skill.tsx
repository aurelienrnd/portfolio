import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SkillProps {
  skill: {
    technologie: string;
    maitrise: string;
    logo: IconDefinition;
    ref: React.RefObject<HTMLDivElement>;
  };
  index: number;
  isVisible: boolean[];
}

function Skill({ skill, index, isVisible }: SkillProps) {
  return (
    <div className="md:flex md:gap-8">
      <div className="flex gap-2 md:justify-between items-center md:w-1/10 ">
        <p className="">{skill.technologie}</p>
        <FontAwesomeIcon icon={skill.logo} />
      </div>

      <div className="" style={{ width: skill.maitrise }}>
        <div
          className={`border-1 border-color-three bg-color-four h-6 justify-center rounded-md flex items-center
            ${isVisible[index] ? 'fake-loader' : 'opacity-0'}`}
          ref={skill.ref}
        >
          <span>{skill.maitrise}</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
