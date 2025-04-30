/**Affiche la page Projet
 * @description Contient un text d'untroduction
 * @returns {JSX.Element} - Page Projet du site
 */
function Banner(): React.JSX.Element {
  return (
    <section className="">
      <h1>Mes projets web</h1>
      <p>
        Découvrez une sélection de projets réalisés durant ma formation
        OpenClassrooms et en autonomie. Chaque projet reflète mes compétences en
        intégration, en JavaScript, en React et bien plus encore.
      </p>
    </section>
  );
}

export default Banner;
