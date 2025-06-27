// Hooks
import { useState } from 'react';
// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMap,
  faUser,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

// Types
type Props = {
  visibleMap: boolean;
  setVisibleMap: React.Dispatch<React.SetStateAction<boolean>>;
};

/** Affiche le bouton permettant de basculer entre la carte et la photo de profil.
 * @description - Utilise useState pour gérer l’animation des différents éléments du bouton lors du survol.
 * Lorsqu'on clique dessus, le bouton met à jour l’état `visibleMap` transmis par le composant parent.
 * @param {boolean} visibleMap - État indiquant si la carte est actuellement affichée.
 * @param {Function} setVisibleMap - Fonction permettant de modifier l’état `visibleMap`.
 * @returns {JSX.Element} - Un bouton interactif animé.
 */
function MapButton({ visibleMap, setVisibleMap }: Props): React.JSX.Element {
  // Gère l’état d’affichage entre la carte et la photo de profil
  const handleBouton = () => {
    setVisibleMap(!visibleMap);
  };

  // Gère l’état d’animation du bouton
  const [isHovered, setIsHovered] = useState(false);

  return (
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
  );
}

export default MapButton;
