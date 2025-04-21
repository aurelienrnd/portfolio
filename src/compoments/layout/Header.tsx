import { Link } from 'react-router';
function NavDesktop() {
  return (
    <nav className="md:flex hidden border-1 border-green-500">
      <ul className="flex gap-1">
        <li className="border-1 border-blue-500">
          <Link to="/">Acceuil</Link>
        </li>
        <li className="border-1 border-blue-500">A propos</li>
        <li className="border-1 border-blue-500">Compétences</li>
        <li className="border-1 border-blue-500">
          <Link to="project">Projet</Link>
        </li>
        <li className="border-1 border-blue-500">Contactez moi</li>
      </ul>
    </nav>
  );
}

function NavMobil() {
  return (
    <button className="flex md:hidden border-1 border-green-500">Nav</button>
  );
}

function Header() {
  return (
    <header className="w-full flex justify-between px-8 border-1 border-red-500">
      <span className="border-1 border-green-500">Aurélien Arnaud</span>
      <NavDesktop />
      <NavMobil />
    </header>
  );
}

export default Header;
