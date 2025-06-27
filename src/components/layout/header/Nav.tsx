// Hooks React
import { useState } from 'react';
import { Link } from 'react-router';
// Library
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Types Tsx
import { NavList } from './Header.tsx';

type NavProps = {
  navList: NavList[];
};

/** Menu de navigation pour les écrans larges
 * @description - Utilise `.map` sur le tableau navList pour créer une balise Link pour chaque élément.
 * @param {NavProps} navList - Tableau d'objets contenant les destinations et les labels de navigation.
 * @returns {JSX.Element} - Le menu de navigation pour les écrans larges.
 */
export function NavDesktop({ navList }: NavProps): React.JSX.Element {
  return (
    <nav className="hidden md:flex items-center h-full">
      <ul className="flex gap-8 items-center h-full">
        {navList.map(nav => (
          <li key={`nav-${nav.label}`} className="flex items-center h-full">
            <Link
              to={nav.destination}
              className="flex items-center h-full hover:items-start hover:border-b-1 hover:border-b-color-three"
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Menu de navigation pour les petits écrans
 * @description - Utilise ReactModal pour créer un menu de navigation qui s’ouvre et se ferme au clic sur le bouton hamburger.
 * Utilise `.map` sur le tableau navList pour générer une balise Link pour chaque élément.
 * @param {NavProps} navList - Tableau d'objets contenant les destinations et les labels de navigation.
 * @returns {JSX.Element} - Le menu de navigation pour les petits écrans.
 */
export function NavMobile({ navList }: NavProps): React.JSX.Element {
  // Gestion de l’ouverture ou de la fermeture de la modale
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={handleMenuToggle} aria-label="Ouvrir le menu">
        <FontAwesomeIcon icon={faBars} className="mr-4" />
      </button>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleMenuToggle}
        className="fixed top-16 right-0 w-2/3 bg-color-four z-9999 flex justify-center items-center rounded-bl-md openModal"
      >
        <nav className="flex flex-col items-start gap-4 my-6 w-2/3">
          {navList.map(nav => (
            <Link
              to={nav.destination}
              key={nav.label}
              onClick={handleMenuToggle}
              className="flex gap-4 items-center w-full h-12 px-4 rounded-md active:bg-color-three"
            >
              <FontAwesomeIcon
                icon={nav.icon}
                className="text-xl text-color-twoo"
              />
              <button>{nav.label}</button>
            </Link>
          ))}
        </nav>
      </ReactModal>
    </div>
  );
}
