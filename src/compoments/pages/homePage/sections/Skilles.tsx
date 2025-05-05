// Hooks
import { useEffect, useState } from 'react';
// Compoment
import Skill from '../../../utility/Skill';
// Type
import { IconList } from '../../../utility/Skill.tsx';
interface HardSkillType {
  technologie: string;
  logo: keyof IconList;
  description: string;
}
interface SoftSkillType {
  name: string;
  type: string;
}

/** Section Skilles
 * @description Envoie des requête pour recuperer les données soft et hard skill
 * @returns {JSX.Element} - Section Skilles
 * @component Skill - Affiche une animation en % de chaque skill
 */
function Skilles(): React.JSX.Element {
  const [hardSkills, setHardSkills] = useState<HardSkillType[]>([]);
  const [softSkills, setSoftSkills] = useState<SoftSkillType[]>([]);

  useEffect(() => {
    fetch('/datas/hard-skills.json')
      .then(res => res.json())
      .then(data => setHardSkills(data))
      .catch(err => console.error('Erreur chargement hardskills:', err));

    fetch('/datas/soft-skills.json')
      .then(res => res.json())
      .then(data => setSoftSkills(data))
      .catch(err => console.error('Erreur chargement softSkills:', err));
  }, []);

  return (
    <section id="skilles">
      <h2>Mes compétence en developpement web</h2>

      <div className="flex flex-col gap-8 h-full md:justify-between">
        <div className=" md:flex md:flex-col md:justify-between md:h-full">
          {hardSkills.map((hardSkill, index) => (
            <Skill
              key={`${hardSkill.technologie}-${index}`}
              skill={hardSkill}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3>Compétences transverses & soft skills</h3>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {softSkills.map((skills, index) => (
              <span
                key={`${skills.name}-${index}`}
                className={` ${
                  skills.type === 'soft'
                    ? 'bg-color-four text-color-two'
                    : 'bg-color-three text-color-four'
                } 
                   border-1 border-color-three p-1 rounded-md `}
              >
                {skills.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skilles;
