//import hooks
import { JSX, ReactNode, useState } from 'react';
//import context
import ScrollContext from '../context/ScrollContext.tsx';

/** Détermine si la page est en cours de défilement.
 * @description Utilise useState pour gérer l'état de défilement. Le composant ScrollToAnchor met à jour cet état via le contexte,
 * qui est ensuite partagé avec les autres composants de l'application via le Provider.
 * @returns {JSX.Element} - Le provider du contexte d'animation avec les enfants en tant que contenu.
 */
function ScrollProvider({ children }: { children: ReactNode }): JSX.Element {
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <ScrollContext.Provider value={{ isScrolling, setIsScrolling }}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollProvider;
