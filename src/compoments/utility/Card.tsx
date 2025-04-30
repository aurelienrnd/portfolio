type Props = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  codeUrl: string;
  siteUrl?: string;
};

function Card({ title, description, image, techs, codeUrl, siteUrl }: Props) {
  return (
    <div className="bg-color-two text-color-one p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={`aperçu du projet ${title}`}
        className="rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex gap-2 mb-4 flex-wrap">
        {techs.map(tech => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-color-four text-white rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            className="text-color-three hover:underline"
          >
            Voir le site
          </a>
        )}
        <a
          href={codeUrl}
          target="_blank"
          className="text-color-three hover:underline"
        >
          Code source
        </a>
      </div>
    </div>
  );
}

export default Card;
