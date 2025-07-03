/** Affiche la bannière de la page Projet
 * @description - Contient un texte d’introduction.
 * @returns {JSX.Element} - La bannière de la page Projet du site.
 */
function BannerProject(): React.JSX.Element {
  return (
    <section id="banner-project" className="">
      <h1>Mes projets web</h1>
      <p>
        Découvrez une sélection de projets réalisés durant ma formation
        OpenClassrooms et en autonomie. Chaque projet reflète mes compétences en
        intégration, en JavaScript, en React et bien plus encore.
      </p>
    </section>
  );
}

export default BannerProject;
