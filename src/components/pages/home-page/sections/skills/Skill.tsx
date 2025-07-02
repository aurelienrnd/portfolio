// Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faCss,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import { SetMultyRefs } from '../../../../utility/SetMultyRefs.tsx';

export type IconList = {
  faHtml5: IconDefinition;
  faCss: IconDefinition;
  faJs: IconDefinition;
  faReact: IconDefinition;
  faNodeJs: IconDefinition;
  faDatabase: IconDefinition;
};
interface SkillProps {
  logo: keyof IconList;
  technologie: string;
  description: string;
}

/** Affiche une compétence avec les informations contenues dans les props
 * @description - Affiche une animation en pourcentage pour chaque compétence.
 * @returns {JSX.Element} - Le composant représentant une compétence.
 */
function Skill({ skill }: { skill: SkillProps }): React.JSX.Element {
  const { setRef, visibilities } = SetMultyRefs<HTMLParagraphElement>(1);
  const iconList: IconList = {
    faHtml5,
    faCss,
    faJs,
    faReact,
    faNodeJs,
    faDatabase,
  };
  return (
    <div
      ref={setRef(1)}
      className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-2 md:px-4 md:ml-4 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300 ${visibilities[1] ? 'slide-in-left' : 'opacity-0 '}`}
    >
      <FontAwesomeIcon
        icon={iconList[skill.logo]}
        className="text-xl text-color-three"
      />

      <span className="text-base font-medium">{skill.technologie}</span>
      <p>{skill.description}</p>
    </div>
  );
}

export default Skill;
