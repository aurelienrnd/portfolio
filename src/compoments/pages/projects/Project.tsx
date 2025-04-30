// Compoments
import Banner from './sections/Banner.tsx';
import Cards from './sections/Cards.tsx';

/**Affiche la page Projet
 * @description Contient les sections Banner, Cards
 * @returns {JSX.Element} - Page Projet du site
 * @component Banner - Section d'accueil
 * @component Cards - Section Cards
 */
function Project(): React.JSX.Element {
  return (
    <main>
      <Banner />
      <Cards />
    </main>
  );
}

export default Project;
