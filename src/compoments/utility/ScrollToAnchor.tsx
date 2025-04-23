import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/** Permet la navigation depuis une page vers une ancre situé dans une autre page
 * @description - Ce composant utilise le hook useLocation de react-router pour détecter les changements d'URL et scroll vers l'élément correspondant à l'ancre dans le DOM.
 * Il utilise également useRef pour stocker l'ID de l'ancre et useEffect pour effectuer le scroll lorsque l'URL change.
 * @returns {null} - ScrollToAnchor
 */
function ScrollToAnchor(): null {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    // Si le hash existe dans l'URL, on le stocke dans "lastHash" sans le symbole '#'
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    // On verifie si un élément avec l'ID "lastHash" existe
    if (lastHash.current && document.getElementById(lastHash.current)) {
      // On ajoute un timer pour attendre que le DOM soit complètement chargé
      setTimeout(() => {
        // On scroll vers l'élément avec l'ID "lastHash"
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
