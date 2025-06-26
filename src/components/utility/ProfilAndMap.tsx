import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMap,
  faUser,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Map from '../utility/Map.tsx';

function ProfilAndMap() {
  const [visibleMap, setVisibleMap] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleBouton = () => {
    setVisibleMap(!visibleMap);
  };

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
        <Map />
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
