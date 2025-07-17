import Cmd from './Cmd.tsx';
import Loader from '../../../../utility/Loaoder.tsx';
import { Link } from 'react-router';
import React, { useEffect, useState } from 'react';

/** Section Banner
 * @description - Affiche la section Banner à l'intérieur de HomePage.
 * @returns {JSX.Element} - La section Banner.
 * @component Cmd - Affiche un questionnaire de navigation avec un style terminal.
 */
function Banner(): React.JSX.Element {
  const text: string =
    'Passionné par le code. Mon parcours atypique m’a appris à apprendre vite, partout dans le monde. Aujourd’hui, je crée des interfaces claires et responsives avec React';

  // Gestion de l’état du loader
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1250); // Le meme temps que l'animation
  }, []);

  return (
    <section id="banner">
      <div className="h-2/3 md:h-1/2 text-center md:text-start flex flex-col justify-between">
        <h1 className="slide-in-left">Aurélien Arnaud</h1>

        <div className=" h-1/3 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <h2 className="slide-in-left">Développeur d'application web</h2>
          <Link to="project" className="btn md:mr-16 slide-in-right">
            Voir mes projets
          </Link>
        </div>

        <p className="md:w-1/2 slide-in-left">{text}</p>
      </div>

      {isLoading ? <Loader /> : <Cmd />}
    </section>
  );
}

export default Banner;
