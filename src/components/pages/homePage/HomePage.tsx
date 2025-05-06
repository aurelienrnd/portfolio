// Components
import Banner from './sections/Banner.tsx';
import About from './sections/About.tsx';
import Skills from './sections/Skills.tsx';

/** Affiche la page d'accueil du site
 * @description - Contient les sections Banner, About et Skills.
 * @returns {JSX.Element} - La page d'accueil du site.
 * @component Banner - Section d’accueil.
 * @component About - Section À propos.
 * @component Skills - Section Compétences.
 */
function HomePage(): React.JSX.Element {
  return (
    <main id="home-page">
      <Banner />
      <About />
      <Skills />
    </main>
  );
}

export default HomePage;
