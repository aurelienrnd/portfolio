//Compoments
import Cmd from '../../../utility/Cmd.tsx';
//Hooks
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

/** Section Banner
 * @description Affiche la section Banner à l'interieur de HomePage
 * @returns {JSX.Element} - Section Banner
 * @component Cmd - Affiche un questionaire de navigation avec un style de terminal
 */
function Banner(): React.JSX.Element {
  const text =
    'Passionné par le code. Mon parcours atypique m’a appris à apprendre vite, partout dans le monde. Aujourd’hui, je crée des interfaces claires et responsives avec React';

  // Création d'un loader
  const FakeLoader = (): React.JSX.Element => (
    <div className="w-1/2 h-1/3 flex items-center">
      <div className="bg-color-three h-1 fake-loader rounded-md"></div>
    </div>
  );

  // Gestion de l'état du loader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1250); // Le meme temps que l'animation
  }, []);

  return (
    <section id="banner">
      <div className="h-2/3 text-center flex flex-col justify-between">
        <h1>Aurélien Arnaud</h1>

        <div className=" h-1/3 flex flex-col items-center justify-between">
          <h2>Développeur d'aplication web</h2>
          <Link to="project" className="btn">
            Voir mes projets
          </Link>
        </div>

        <p className="">{text}</p>
      </div>

      {isLoading ? <FakeLoader /> : <Cmd />}
    </section>
  );
}

//TODO - afficher dans le navigateur la page afficher a l'écrant

export default Banner;
