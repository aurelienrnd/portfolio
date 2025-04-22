import { Link } from 'react-router';

function Banner() {
  const text =
    'Passionné par le code. Mon parcours atypique m’a appris à apprendre vite, partout dans le monde. Aujourd’hui, je crée des interfaces claires et responsives avec React';

  return (
    <section id="banner" className="flex">
      <div className="w-3/4">
        <div className="flex">
          <h1 className="title">Aurélien Arnaud</h1>
          <h2 className="title">Développeur web</h2>
        </div>
        <p className="w-3/4">{text}</p>
      </div>

      <div className="flex flex-col">
        <Link to="project" className="btn">
          Voir mes projets
        </Link>
        <span>Contacter moi ?</span>
      </div>
    </section>
  );
}
export default Banner;
