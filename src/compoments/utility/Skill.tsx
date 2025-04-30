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
    <div className="">
      <div className="">
        <p className="">{skill.technologie}</p>
        <FontAwesomeIcon icon={skill.logo} className="" />
      </div>

      <div style={{ width: skill.maitrise }}>
        <div
          className={`${isVisible[index] ? 'fake-loader' : 'opacity-0'}`}
          ref={skill.ref}
        >
          <span>{skill.maitrise}</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
