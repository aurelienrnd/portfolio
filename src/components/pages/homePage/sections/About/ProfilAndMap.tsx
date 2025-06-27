// Hooks
import { useState, lazy, Suspense } from 'react';
// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMap,
  faUser,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
//Compoments
import Loader from '../../../../utility/Loaoder.tsx';
const Map = lazy(() => import('./Map.tsx'));

/** Lorsqu'on clique sur le bouton, il affiche soit une photo de profil, soit une carte du tour du monde.
 * @description - Permet, grâce à un bouton, d’afficher une photo de profil ou une carte interactive.
 * @component Map - Affiche la carte du tour du monde.
 * @component Loader - Affiche un loader pendant le chargement de la carte.
 * @returns {JSX.Element} - Un bouton, une image et une carte.
 */
function ProfilAndMap(): React.JSX.Element {
  // Gère l’état d’affichage entre la carte et la photo de profil
  const [visibleMap, setVisibleMap] = useState(false);
  const handleBouton = () => {
    setVisibleMap(!visibleMap);
  };

  // Gère l’état d’animation du bouton
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full md:w-1/3 md:h-full flex relative">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute z-2 flex h-full flex-col justify-between items-start cursor-pointer bg-color-two/30 py-4 px-4 transition-all duration-300 ease-in-out ${isHovered ? 'w-40' : 'w-12'}`}
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

        <div className="w-full flex gap-2 items-center">
          {isHovered && (
            <span className=" bg-color-two text-xs px-1 py-1 rounded-md font-semibold text-center text-color-four">
              {visibleMap ? 'Photo de profil' : 'Map tour du monde'}
            </span>
          )}
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`${isHovered ? 'rotate-180' : ''}`}
          />
        </div>

        <FontAwesomeIcon
          icon={faMap}
          className={visibleMap ? 'text-color-three' : ''}
        />
      </button>

      {visibleMap ? (
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center md:font-code h-60 md:h-full w-full object-cover">
              <div className="flex gap-4 items-center">
                <span>Chargement de la carte...</span>
              </div>

              <Loader />
            </div>
          }
        >
          <Map />
        </Suspense>
      ) : (
        <img
          src="/images/profil.webp"
          alt="photo Aurélien Arnaud"
          loading="lazy"
          className="h-60 md:h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default ProfilAndMap;
