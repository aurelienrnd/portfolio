import BannerProject from './sections/banner-project/BannerProject.tsx';
import MyProject from './sections/my-project/MyProject.tsx';

/** Affiche la page Projet
 * @description - Contient les sections Banner et Cards.
 * @returns {JSX.Element} - La page Projet du site.
 * @component Banner - Section d’accueil.
 * @component Cards - Section des cartes projets.
 */
function Project(): React.JSX.Element {
  return (
    <main id="project">
      <BannerProject />
      <MyProject />
    </main>
  );
}

export default Project;
