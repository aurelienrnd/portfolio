import React, { lazy, Suspense } from 'react';
import Loader from '../../../../utility/Loaoder.tsx';
const Map = lazy(() => import('./Map.tsx'));

/** Charge la carte du tour du monde de manière dynamique.
 * @description - Utilise lazy et Suspense pour afficher un loader pendant le chargement, puis rend la carte une fois celle-ci chargée.
 * @component Map - Affiche la carte du tour du monde.
 * @component Loader - Affiche un loader durant le chargement de la carte.
 * @returns {JSX.Element} - Un loader suivi de la carte du monde.
 */
function LoadingMap(): React.JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center md:font-code h-60 md:h-full w-full object-cover">
          <span className="flex gap-4 items-center">
            Chargement de la carte...
          </span>

          <Loader />
        </div>
      }
    >
      <Map />
    </Suspense>
  );
}

export default LoadingMap;
