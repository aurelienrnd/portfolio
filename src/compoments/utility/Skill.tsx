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
    <div className="flex items-center gap-2">
      <p className="w-30">{skill.technologie}</p>
      <FontAwesomeIcon icon={skill.logo} />

      <div className="flex items-center" style={{ width: skill.maitrise }}>
        <div
          className={`bg-color-three h-4 justify-center rounded-md flex items-center
            ${isVisible[index] ? 'fake-loader' : 'opacity-0'}`}
          ref={skill.ref}
        >
          <span className=" text-color-four">{skill.maitrise}</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
