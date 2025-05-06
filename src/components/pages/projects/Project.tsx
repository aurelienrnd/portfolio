// Compoments
import Banner from './sections/Banner-project.tsx';
import Cards from './sections/Cards.tsx';

/** Affiche la page Projet
 * @description - Contient les sections Banner et Cards.
 * @returns {JSX.Element} - La page Projet du site.
 * @component Banner - Section d’accueil.
 * @component Cards - Section des cartes projets.
 */
function Project(): React.JSX.Element {
  return (
    <main id="project">
      <Banner />
      <Cards />
    </main>
  );
}

export default Project;
