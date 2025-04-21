import { Link } from 'react-router';

function Banner() {
  return (
    <section className="banner flex justify-between border-1 border-blue-500">
      <p className="w-3/4 border-1 border-blue-500">
        Développeur web en reconversion, passionné par le code. Mon parcours
        atypique m’a appris à apprendre vite, partout dans le monde.
        Aujourd’hui, je crée des interfaces claires et responsives avec React.
      </p>
      <Link to="project" className="btn">
        Voir mes projets
      </Link>
    </section>
  );
}
export default Banner;
