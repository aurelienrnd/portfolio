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
    <div className="">
      <img src={image} alt={`aperçu du projet ${title}`} className="" />

      <h3 className="">{title}</h3>
      <p className="">{description}</p>

      <div className="">
        {techs.map(tech => (
          <span key={tech} className="">
            {tech}
          </span>
        ))}
      </div>

      <div className="">
        {siteUrl && (
          <a href={siteUrl} target="_blank" className="">
            Voir le site
          </a>
        )}
        <a href={codeUrl} target="_blank" className="">
          Code source
        </a>
      </div>
    </div>
  );
}

export default Card;
