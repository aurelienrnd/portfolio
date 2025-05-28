import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/** Permet la navigation depuis une page vers une ancre située dans une autre page
 * @description - Ce composant utilise le hook useLocation de react-router pour détecter les changements d'URL et faire défiler jusqu'à l'élément correspondant à l'ancre dans le DOM.
 * Il utilise également useRef pour stocker l'ID de l’ancre et useEffect pour effectuer le défilement lorsque l'URL change.
 * @returns {null} - Composant ScrollToAnchor.
 */
function ScrollToAnchor(): null {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    // Si un hash existe dans l'URL, on le stocke dans "lastHash" sans le symbole '#'
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    // On vérifie si un élément avec l'ID "lastHash" exist
    if (lastHash.current && document.getElementById(lastHash.current)) {
      // On ajoute un délai pour s'assurer que le DOM est complètement chargé
      setTimeout(() => {
        // On fait défiler jusqu'à l'élément avec l'ID "lastHash"
        const target = document.getElementById(lastHash.current);
        if (target) {
          //On laisse un espace de 64px avant l'élément pour le sticky header
          const stickyHearder = -64;
          const y =
            target.getBoundingClientRect().top +
            window.pageYOffset +
            stickyHearder;

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
