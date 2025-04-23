import { Link } from 'react-router';

// Tableaux contenant les informations afin de créer les liens de navigation
const navList = [
  { destination: 'project', label: 'Projets' },
  { destination: '/#about', label: 'A propos' },
  { destination: '/#skilles', label: 'Compétences' },
  { destination: '/#footer', label: 'Contact' },
];

/** Menu de navigation pour les écrans larges
 * @description Utilise .map sur le tableau navList pour créer une de balise Link pour chaque élément
 * @returns {JSX.Element} - Menu de navigation pour les écrans larges
 */
function NavDesktop(): React.JSX.Element {
  const classStyle = 'flex items-center h-full';
  return (
    <nav className="md:flex md:items-center h-full hidden">
      <ul className={`${classStyle} gap-3`}>
        {navList.map(nav => (
          <li key={nav.label} className={`${classStyle}`}>
            <Link
              to={nav.destination}
              className={`${classStyle} hover:items-start py-2`}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Menu de navigation pour les écrans mobiles
 * @returns {JSX.Element} - Menu de navigation pour les écrans mobiles
 */
function NavMobil(): React.JSX.Element {
  return <button className="flex md:hidden px-16">Nav</button>;
}

/** Gestion de l'entête du site
 * @description Affiche le nom prénon et le menu de navigation
 * @returns {JSX.Element} - Header du site
 * @component NavDesktop - Menu de navigation pour les écrans larges
 * @component NavMobil - Menu de navigation pour les écrans mobiles
 */
function Header(): React.JSX.Element {
  return (
    <header className="h-16 w-full flex justify-between items-center px-8 sticky top-0 bg-color-one z-9999">
      <span className="font-syne text-xl font-extrabold tracking-wide">
        Aurélien Arnaud
      </span>
      <NavDesktop />
      <NavMobil />
    </header>
  );
}

export default Header;
