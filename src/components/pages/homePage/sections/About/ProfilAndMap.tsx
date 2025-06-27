// Hooks
import { useState } from 'react';
//Compoments
import MapButton from './MapButton.tsx';
import LoadingMap from './LoadingMap.tsx';

/** Lorsqu'on clique sur le bouton, affiche soit une photo de profil, soit une carte du tour du monde.
 * @description - Utilise useState pour déterminer si la carte doit être affichée. Si oui, la carte est chargée dynamiquement.
 * Sinon, une photo de profil est affichée à la place.
 * @component MapButton - Affiche le bouton permettant de basculer entre la carte et la photo de profil.
 * @returns {JSX.Element} - Un bouton et une image ou une carte interactive selon l’état.
 */
function ProfilAndMap(): React.JSX.Element {
  // Gère l’état d’affichage entre la carte et la photo de profil
  const [visibleMap, setVisibleMap] = useState(false);

  return (
    <div className="w-full md:w-1/3 md:h-full flex relative">
      <MapButton visibleMap={visibleMap} setVisibleMap={setVisibleMap} />

      {visibleMap ? (
        <LoadingMap />
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
