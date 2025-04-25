// Compoments
import Banner from './sections/Banner.tsx';
import About from './sections/About.tsx';
import Skill from './sections/Skilles.tsx';

/**Affiche la page d'accueil du site
 * @description Contient les sections Banner, About et Skill
 *
 * @returns {JSX.Element} - Page d'accueil du site
 * @component Banner - Section d'accueil
 * @component About - Section à propos
 * @component Skill - Section compétences
 */
function HomePage(): React.JSX.Element {
  return (
    <main>
      <Banner />
      <About />
      <Skill />
    </main>
  );
}

export default HomePage;
