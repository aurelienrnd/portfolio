// Components
import { NavDesktop, NavMobile } from './Nav.tsx';
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

/** Gestion de l'en-tête du site
 * @description - Utilise le hook useLocation pour changer dynamiquement le label et la destination du lien "Projet/Accueil"
 * dans le tableau navList, et affiche le header de la page.
 * @returns {JSX.Element} - Composant Header du site.
 * @component NavDesktop - Menu de navigation pour les écrans larges.
 * @component NavMobile - Menu de navigation pour les petits écrans.
 */
function Header(): React.JSX.Element {
  // Création de useState pour modifier dynamiquement le lien "Projet/Accueil"
  const [navDestination, setNavDestination] = useState('/project');
  const [navLabel, setNavLabel] = useState('Projets');
  const [navIcon, setNavIcon] = useState(faFolder);

  // Création du tableau contenant les informations de chaque lien de navigation
  const navList: NavList[] = [
    { destination: navDestination, label: navLabel, icon: navIcon },
    { destination: '/#about', label: 'À propos', icon: faAddressCard },
    { destination: '/#skills', label: 'Compétences', icon: faGear },
    { destination: '/#contact', label: 'Contact', icon: faPaperPlane },
  ];

  // Modifie le lien "Projet" en "Accueil" en fonction de la page visitée
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/project') {
      setNavDestination('/#banner');
      setNavLabel('Accueil');
      setNavIcon(faHouse);
    } else {
      setNavDestination('/project');
      setNavLabel('Projets');
      setNavIcon(faFolder);
    }
  }, [location.pathname]);

  return (
    <header>
      <span className="font-syne text-sm font-extrabold">Aurelien Arnaud</span>
      <NavDesktop navList={navList} />
      <NavMobile navList={navList} />
    </header>
  );
}

export default Header;
