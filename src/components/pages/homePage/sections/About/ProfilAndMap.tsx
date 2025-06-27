// Hooks
import { useState, lazy, Suspense } from 'react';

//Compoments
import MapButton from './MapButton.tsx';
import Loader from '../../../../utility/Loaoder.tsx';
const Map = lazy(() => import('./Map.tsx'));

/** Lorsqu'on clique sur le bouton, il affiche soit une photo de profil, soit une carte du tour du monde.
 * @description - Utilise useState pour déterminer si la carte doit être affichée. Si oui, la carte est chargée dynamiquement avec lazy et Suspense, accompagnée d’un loader.
 * Sinon, une photo de profil est affichée à la place.
 * @component MapButton - Affiche le bouton permettant de basculer entre la carte et la photo de profil.
 * @component Map - Affiche la carte du tour du monde.
 * @component Loader - Affiche un loader pendant le chargement de la carte.
 * @returns {JSX.Element} - Un bouton, une image ou une carte interactive selon l’état.
 */
function ProfilAndMap(): React.JSX.Element {
  // Gère l’état d’affichage entre la carte et la photo de profil
  const [visibleMap, setVisibleMap] = useState(false);

  return (
    <div className="w-full md:w-1/3 md:h-full flex relative">
      <MapButton visibleMap={visibleMap} setVisibleMap={setVisibleMap} />

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
