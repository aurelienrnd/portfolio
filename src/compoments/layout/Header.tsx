import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';

type NavList = {
  destination: string;
  label: string;
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
  const navList: NavList[] = [
    { destination: navDestination, label: navLabel },
    { destination: '/#about', label: 'À propos' },
    { destination: '/#skilles', label: 'Compétences' },
    { destination: '/#footer', label: 'Contact' },
  ];

  // Modifie le liens dinamique du tableaux en fonction de la page visitée
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/project') {
      setNavDestination('/');
      setNavLabel('Accueil');
    } else {
      setNavDestination('/project');
      setNavLabel('Projets');
    }
  }, [location.pathname]);

  return (
    <header className="h-16 w-full flex justify-between items-center px-8 sticky top-0 bg-color-one z-9999">
      <span className="font-syne text-xl font-extrabold tracking-wide">
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
      <button onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} className="text-xl text-color-twoo" />
      </button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleMenuToggle}
        className="fixed top-0 left-0 w-full h-auto py-10 bg-color-one z-9999 flex justify-center items-center openModal"
      >
        <nav className="flex flex-col items-center gap-8">
          {navList.map(nav => (
            <button key={nav.label} onClick={handleMenuToggle}>
              <Link
                to={nav.destination}
                className=" hover:border-b-1 hover:border-b-color-three py-2"
              >
                {nav.label}
              </Link>
            </button>
          ))}
        </nav>
      </ReactModal>
    </div>
  );
}

export default Header;
