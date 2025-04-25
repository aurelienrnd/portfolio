// Hooks React
import { useState } from 'react';
import { Link } from 'react-router';
// Library
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Types Tsx
import { NavList } from '../layout/Header.tsx';

type NavProps = {
  navList: NavList[];
};

/** Menu de navigation pour les écrans larges
 * @description Utilise .map sur le tableau navList pour créer une de balise Link pour chaque élément
 * @param {NavProps} navList - Tableau d'objets contenant les destinations et les labels de navigation
 * @returns {JSX.Element} - Menu de navigation pour les écrans larges
 */
export function NavDesktop({ navList }: NavProps): React.JSX.Element {
  return (
    <nav className="md:flex md:items-center h-full hidden">
      <ul className="flex items-center h-full gap-3">
        {navList.map(nav => (
          <li key={`nav-${nav.label}`} className="flex items-center h-full">
            <Link
              to={nav.destination}
              className="flex items-center h-full hover:items-start hover:border-b-1 hover:border-b-color-three py-2"
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Menu de navigation pour les petit écrans
 * @description Utilise ReactModal pour créer un menu de navigation qui s'ouvre et se ferme au clic sur le bouton hamburger
 * Utilise .map sur le tableau navList pour créer une de balise Link pour chaque élément
 * @param {NavProps} navList - Tableau d'objets contenant les destinations et les labels de navigation
 * @returns {JSX.Element} - Menu de navigation pour les petit écrans
 */
export function NavMobile({ navList }: NavProps): React.JSX.Element {
  // Gestion de l'ouverture ou de la fermeture de la modal
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={handleMenuToggle} aria-label="Menu">
        <FontAwesomeIcon icon={faBars} className="text-xl text-color-twoo" />
      </button>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleMenuToggle}
        className="fixed top-16 right-0 w-2/3 h-auto bg-color-four z-9999 flex justify-center items-center rounded-bl-md openModal"
      >
        <nav className="flex flex-col items-start gap-4 my-6 w-2/3">
          {navList.map(nav => (
            <button
              key={nav.label}
              onClick={handleMenuToggle}
              className="flex gap-4 items-center w-full h-12 px-4 rounded-md active:bg-color-three"
            >
              <FontAwesomeIcon
                icon={nav.icon}
                className="text-xl text-color-twoo"
              />
              <Link to={nav.destination}>{nav.label}</Link>
            </button>
          ))}
        </nav>
      </ReactModal>
    </div>
  );
}
