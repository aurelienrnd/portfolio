// Components
import { NavDesktop, NavMobile } from '../utility/Nav.tsx';
//Hooks React
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
//Library
import {
  faHouse,
  faGear,
  faPaperPlane,
  faAddressCard,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

export type NavList = {
  destination: string;
  label: string;
  icon: import('@fortawesome/fontawesome-svg-core').IconDefinition;
};

/** Gestion de l'entête du site
 * @description Utilise le hook useLocation pour changer le label et la destination du lien "Projet" dans le tableau navList,
 * et affiche le header de la page
 * @returns {JSX.Element} - Header du site
 * @component NavDesktop - Menu de navigation pour les écrans larges
 */
function Header(): React.JSX.Element {
  // Création de UseStates pour modiffier les données du lien "Projet/Acceuil" de façons dynamique
  const [navDestination, setNavDestination] = useState('/project');
  const [navLabel, setNavLabel] = useState('Projets');
  const [navIcon, setNavIcon] = useState(faFolder);

  // Création du tableau contenanat les info de chaque lien de navigation
  const navList: NavList[] = [
    { destination: navDestination, label: navLabel, icon: navIcon },
    { destination: '/#about', label: 'À propos', icon: faAddressCard },
    { destination: '/#skilles', label: 'Compétences', icon: faGear },
    { destination: '/#contact', label: 'Contact', icon: faPaperPlane },
  ];

  // Modifie le liens "Projet" en "Acceuil" en fonction de la page visitée
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
    <header className="h-16 w-full flex justify-between items-center px-8 sticky top-0 bg-color-one z-9999">
      <span className="font-syne text-sm font-extrabold tracking-wide"></span>
      <NavDesktop navList={navList} />
      <NavMobile navList={navList} />
    </header>
  );
}

export default Header;
