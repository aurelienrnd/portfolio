import catSkillesList from '../../../../datas/skilles.json';

interface Cat {
  id: string;
  name: string;
  skilles: Skill[];
}

interface CatProp {
  cat: Cat;
}

interface Skill {
  id: string;
  name: string;
  commentaire?: string[];
}

interface SkillProp {
  skill: Skill;
}

interface comProp {
  com: string;
}

function Skilles() {
  return (
    <section
      id="skilles"
      className="flex flex-col gap-8 md:gap-16 border-1 border-indigo-500"
    >
      <h2>Mes compétence de developpeur</h2>
      <div className="flex flex-wrap gap-16">
        {catSkillesList.map((cat, index) => (
          <Category key={`${cat.id}-${index}`} cat={cat} />
        ))}
      </div>
    </section>
  );
}
export default Skilles;

function Category({ cat }: CatProp) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl">{cat.name}</h3>
      <div>
        {cat.skilles.map((skill, index) => (
          <Skill key={`${cat.id}-${skill.id}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }: SkillProp) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-2xl">{skill.name}</h4>
      <div>
        {skill.commentaire &&
          skill.commentaire.map((com, index) => (
            <Commentaire key={`${skill.id}-com-${index}`} com={com} />
          ))}
      </div>
    </div>
  );
}

function Commentaire({ com }: comProp) {
  return <p>{com}</p>;
}
