//Type
type Props = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  codeUrl: string;
  siteUrl?: string;
};

/** Affiche un projet sous forme de carte
 * @description - Utilise les information transmise en prop pour créer une carte avec les info du projet
 * @returns {JSX.Element} - une carte projet
 */
function Card({
  title,
  description,
  image,
  techs,
  codeUrl,
  siteUrl,
}: Props): React.JSX.Element {
  return (
    <article className="card">
      <img src={image} alt={`aperçu du projet ${title}`} className="rounded" />

      <h3 className="">{title}</h3>
      <p className="">{description}</p>

      <div className="flex gap-2 flex-wrap justify-center md:justify-start">
        {techs.map(tech => (
          <span
            key={tech}
            className="px-2 py-2 text-xs bg-color-four text-white rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className=" flex gap-4 text-color-three">
        {siteUrl && (
          <a href={siteUrl} target="_blank" className="hover:underline">
            Voir le site
          </a>
        )}
        <a href={codeUrl} target="_blank" className="hover:underline">
          Code source
        </a>
      </div>
    </article>
  );
}

export default Card;
