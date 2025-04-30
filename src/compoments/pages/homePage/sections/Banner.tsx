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
    <div className="w-1/2 flex justify-center">
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
      <div className=" h-2/3 flex flex-col justify-between text-center mt-8 md:items-start md:text-start">
        <h1>Aurélien Arnaud</h1>

        <div className="flex flex-col items-center gap-8 md:flex-row md:w-full md:justify-between md:pr-16">
          <h2>Développeur d'aplication web</h2>
          <Link to="project" className="btn">
            Voir mes projets
          </Link>
        </div>

        <p className="md:w-2/3">{text}</p>
      </div>
      <div className="font-code h-1/3 flex items-center justify-center">
        {isLoading ? <FakeLoader /> : <Cmd />}
      </div>
    </section>
  );
}

//TODO - afficher dans le navigateur la page afficher a l'écrant

export default Banner;
