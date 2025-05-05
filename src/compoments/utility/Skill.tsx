// Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SkillProps {
  skill: {
    technologie: string;
    logo: IconDefinition;
    description: string;
  };
}

/** Affiche un skill avec les information contenue en prop
 * @description -  Affiche une animation en % de chaque skill
 * @returns {JSX.Element} -
 */
function Skill({ skill }: SkillProps): React.JSX.Element {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-2 md:px-4 md:ml-4 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300">
      <FontAwesomeIcon icon={skill.logo} className="text-xl text-color-three" />
      <span className="text-base font-medium">{skill.technologie}</span>
      <p>{skill.description}</p>
    </div>
  );
}

export default Skill;
