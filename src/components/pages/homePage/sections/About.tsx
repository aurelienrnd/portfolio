import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMap,
  faUser,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

/** Section About
 * @description - Affiche la section About.
 * @returns {JSX.Element} - La section À propos du site.
 */
function About(): React.JSX.Element {
  const [visibleMap, setVisibleMap] = useState(false);

  const handleBouton = () => {
    setVisibleMap(!visibleMap);
  };

  return (
    <section id="about">
      <h2>Mon parcours de développeur</h2>
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:justify-between md:h-full">
        <div className="flex flex-col gap-4 md:justify-between md:w-2/3 md:h-full md:max-h-150">
          <p>
            Après 10 ans dans l’industrie en tant qu’opérateur et pilote de
            ligne, j’ai décidé de donner un nouveau souffle à mon parcours.
          </p>
          <p>
            En quête de sens et de défis, j’ai entrepris un tour du monde à
            travers l’Asie, l’Amérique latine et l’Asie centrale. Cette aventure
            m’a permis de développer mon autonomie, mon adaptabilité et mon
            envie constante d’apprendre. C’est au retour que j’ai choisi de me
            reconvertir dans le développement web, un domaine qui allie logique
            technique et création. J’ai suivi une formation à distance tout en
            vivant à l’étranger (Thaïlande, Vietnam, Taïwan), ce qui m’a appris
            à travailler de manière disciplinée et autonome dans tous les
            contextes.
          </p>
          <p>
            Aujourd’hui, je conçois des sites et applications web modernes,
            performants et centrés utilisateur avec des technologies comme HTML,
            CSS, JavaScript, React et Node.js. Curieux, adaptable et rigoureux,
            je suis à la recherche d’un poste ou de missions freelance pour
            continuer à évoluer et contribuer à des projets concrets.
          </p>
        </div>

        <div className="w-full md:w-1/3 md:h-full flex relative">
          <button
            className="absolute z-2 flex h-full flex-col justify-between w-12 cursor-pointer bg-color-two/30 border py-4"
            onClick={handleBouton}
            aria-label={
              visibleMap
                ? 'Afficher la photo de profil'
                : 'Afficher la map: tour du monde'
            }
          >
            <FontAwesomeIcon
              icon={faUser}
              className={visibleMap ? '' : 'text-color-three'}
            />
            <div className="width-full border">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <FontAwesomeIcon
              icon={faMap}
              className={visibleMap ? 'text-color-three' : ''}
            />
          </button>

          {visibleMap ? (
            <div className="h-60 md:h-full w-full object-cover flex justify-center border ">
              MAP
            </div>
          ) : (
            <img
              src="/images/profil.webp"
              alt="photo Aurélien Arnaud"
              loading="lazy"
              className="h-60 md:h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
export default About;
