// Library
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

/** Affiche un skill avec les information contenue en prop
 * @description -  Affiche une animation en % de chaque skill
 * @returns {JSX.Element} -
 */
function Skill({ skill, index, isVisible }: SkillProps): React.JSX.Element {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex gap-2 items-center md:w-30 ">
        <p className="">{skill.technologie}</p>
        <FontAwesomeIcon icon={skill.logo} className="text-2xl" />
      </div>

      <div style={{ width: skill.maitrise }}>
        <div
          className={`border-1 border-color-three bg-color-four h-6 justify-end pr-4 rounded-md flex items-center
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
