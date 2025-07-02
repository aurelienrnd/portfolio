// import hooks
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/** Permet la navigation vers une ancre située dans une autre page.
 * @description Ce composant utilise le hook `useLocation` de React Router pour détecter les changements d’URL
 * et faire défiler automatiquement jusqu’à l’élément correspondant dans le DOM.
 * Il utilise `useRef` pour mémoriser l’ID de l’ancre, et `useEffect` pour déclencher le défilement lors des changements d’URL.
 * Il informe également le contexte `ScrollContext` de l’état de défilement via son `useState`.
 * @returns {null} Composant ScrollToAnchor.
 */
function ScrollToAnchor(): null {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    // Si un hash existe dans l'URL, on le stocke dans "lastHash" sans le symbole '#'
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    // On vérifie si un élément avec l'ID "lastHash" exist puis on ajoute un délai pour s'assurer que le DOM est chargé
    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        // On fait défiler jusqu'à l'élément avec l'ID "lastHash"
        const target = document.getElementById(lastHash.current);

        if (target) {
          //On laisse un espace de 64px avant l'élément pour le sticky header
          const stickyHeader = -64;
          const y =
            target.getBoundingClientRect().top +
            window.pageYOffset +
            stickyHeader;

          // On demarre le scrool
          window.scrollTo({ top: y, behavior: 'smooth' });
        }

        // On réinitialise "lastHash" pour éviter de faire défiler à nouveau
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
