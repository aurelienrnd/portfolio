import React, { useEffect, useState } from 'react';
import Skill from './Skill.tsx';
import { IconList } from './Skill.tsx';

// Typage TypeScript
export type HardSkillType = {
  technologie: string;
  logo: keyof IconList;
  description: string;
};
type SoftSkillType = {
  name: string;
  type: string;
};

/** Section Skills
 * @description - Envoie des requêtes pour récupérer les données des soft et hard skills.
 * @returns {JSX.Element} - La section des compétences.
 * @component Skill - Affiche chaque compétence.
 */
function Skills(): React.JSX.Element {
  const [hardSkills, setHardSkills] = useState<HardSkillType[]>([]);
  const [softSkills, setSoftSkills] = useState<SoftSkillType[]>([]);

  useEffect(() => {
    fetch('/datas/hard-skills.json')
      .then((res: Response) => res.json())
      .then((data: HardSkillType[]) => setHardSkills(data))
      .catch((err: Error) =>
        console.error('Erreur chargement hardskills:', err)
      );

    fetch('/datas/soft-skills.json')
      .then((res: Response) => res.json())
      .then((data: SoftSkillType[]) => setSoftSkills(data))
      .catch((err: Error) =>
        console.error('Erreur chargement softSkills:', err)
      );
  }, []);

  return (
    <section id="skills">
      <h2> Mes compétences en développement web</h2>

      <div className="flex flex-col gap-8 h-full md:justify-between">
        <div className=" md:flex md:flex-col md:justify-between md:h-full">
          {hardSkills.map((hardSkill: HardSkillType, index: number) => (
            <Skill
              key={`${hardSkill.technologie}-${index}`}
              skill={hardSkill}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3>Compétences transverses & soft skills</h3>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {softSkills.map((skills: SoftSkillType, index: number) => (
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

export default Skills;
