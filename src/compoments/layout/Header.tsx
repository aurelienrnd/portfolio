import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHouse,
  faGear,
  faPaperPlane,
  faAddressCard,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

type NavList = {
  destination: string;
  label: string;
  icon: import('@fortawesome/fontawesome-svg-core').IconDefinition;
};
type NavProps = {
  navList: NavList[];
};

/** Gestion de l'entête du site
 * @description Utilise le hook useLocation pour changer le label et la destination du lien "Projet" dans le tableau navList,
 * et affiche le header de la page
 * @returns {JSX.Element} - Header du site
 * @component NavDesktop - Menu de navigation pour les écrans larges
 */
function Header(): React.JSX.Element {
  //Création d'un tableaux dinamique qui contient les info de navigation
  const [navDestination, setNavDestination] = useState('/project');
  const [navLabel, setNavLabel] = useState('Projets');
  const [navIcon, setNavIcon] = useState(faFolder);
  const navList: NavList[] = [
    { destination: navDestination, label: navLabel, icon: navIcon },
    { destination: '/#about', label: 'À propos', icon: faAddressCard },
    { destination: '/#skilles', label: 'Compétences', icon: faGear },
    { destination: '/#footer', label: 'Contact', icon: faPaperPlane },
  ];

  // Modifie le liens dinamique du tableaux en fonction de la page visitée
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/project') {
      setNavDestination('/');
      setNavLabel('Accueil');
      setNavIcon(faHouse);
    } else {
      setNavDestination('/project');
      setNavLabel('Projets');
      setNavIcon(faFolder);
    }
  }, [location.pathname]);

  return (
    <header className="h-16 w-full flex justify-between items-center px-8 sticky top-0 bg-color-one z-9999 ">
      <span className="font-syne text-sm font-extrabold tracking-wide">
        Aurélien Arnaud
      </span>
      <NavDesktop navList={navList} />
      <MenuMobile navList={navList} />
    </header>
  );
}

/** Menu de navigation pour les écrans larges
 * @description Utilise .map sur le tableau navList pour créer une de balise Link pour chaque élément
 * @param {NavProps} navList - Tableau d'objets contenant les destinations et les labels de navigation
 * @returns {JSX.Element} - Menu de navigation pour les écrans larges
 */
function NavDesktop({ navList }: NavProps): React.JSX.Element {
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
function MenuMobile({ navList }: NavProps): React.JSX.Element {
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

export default Header;
