//Type
type Props = {
  title: string;
  description: string;
  difficulty: string;
  image: string;
  techs: string[];
  codeUrl: string;
  siteUrl?: string;
};

/** Affiche un projet sous forme de carte
 * @description - Utilise les informations transmises en props pour générer une carte avec les détails du projet.
 * @returns {JSX.Element} - Une carte projet.
 */
function Card({
  title,
  description,
  difficulty,
  image,
  techs,
  codeUrl,
  siteUrl,
}: Props): React.JSX.Element {
  return (
    <article className="card">
      <img
        src={image}
        alt={`aperçu du projet ${title}`}
        className="rounded h-55 object-cover"
      />

      <div className="flex flex-col gap-2 justify-around h-full">
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{difficulty}</p>
        </div>

        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
          {techs.map(tech => (
            <span
              key={tech}
              className="px-2 py-2 text-xs  bg-color-four text-white rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className=" flex gap-4 text-color-four">
          {siteUrl && (
            <a href={siteUrl} target="_blank" className="hover:underline">
              Voir le site
            </a>
          )}
          <a href={codeUrl} target="_blank" className="hover:underline">
            Code source
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card;
