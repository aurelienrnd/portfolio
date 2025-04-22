import { Link } from 'react-router';
const navList = [
  { destination: '/', label: 'Acceuil' },
  { destination: '/#about', label: 'A propos' },
  { destination: '/#skilles', label: 'Compétences' },
  { destination: 'project', label: 'Projets' },
  { destination: '/#footer', label: 'Contact' },
];

function NavDesktop() {
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

function NavMobil() {
  return <button className="flex md:hidden px-16">Nav</button>;
}

function Header() {
  return (
    <header className="h-16 w-full flex justify-between items-center px-8 sticky top-0 bg-color-one border-1 border-indigo-500">
      <span className="font-syne text-xl font-extrabold tracking-wide">
        Aurélien Arnaud
      </span>
      <NavDesktop />
      <NavMobil />
    </header>
  );
}

export default Header;
