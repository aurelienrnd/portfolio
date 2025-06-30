// import module
import { createContext } from 'react';
//Type
interface ScrollContextType {
  isScrolling: boolean;
  setIsScrolling: (scrolling: boolean) => void;
}

// Crée un contexte pour partager les paramètres de la fonction fetch
const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export default ScrollContext;
