import phtoProfil from '../../../../assets/Screenshot_20250428-230534.png';

/** Section About
 * @description Affiche la section About
 */
function About(): React.JSX.Element {
  return (
    <section id="about">
      <h2>Mon parcours de développeur</h2>
      <div className="flex flex-col-reverse items-center gap-4 md:my-4 md:flex-row md:h-full">
        <div className="flex flex-col gap-4 md:h-full md:justify-between">
          <p>
            Après 10 ans dans l’industrie en tant qu’opérateur et pilote de
            ligne, j’ai décidé de donner un nouveau souffle à mon parcours.
          </p>
          <p>
            En quête de sens et de défis, j’ai entrepris un tour du monde à
            travers l’Asie, l’Amérique latine et l’Asie centrale. Cette aventure
            m’a permis de développer mon autonomie, mon adaptabilité et mon
            envie constante d’apprendre. C’est au retour que j’ai choisi de me
            reconvertir dans le développement web, un domaine qui allie logique
            technique et création. J’ai suivi une formation à distance tout en
            vivant à l’étranger (Thaïlande, Vietnam, Taïwan), ce qui m’a appris
            à travailler de manière disciplinée et autonome dans tous les
            contextes.
          </p>
          <p>
            Aujourd’hui, je conçois des sites et applications web modernes,
            performants et centrés utilisateur avec des technologies comme HTML,
            CSS, JavaScript, React et Node.js. Curieux, adaptable et rigoureux,
            je suis à la recherche d’un poste ou de missions freelance pour
            continuer à évoluer et contribuer à des projets concrets.
          </p>
        </div>

        <img
          src={phtoProfil}
          alt="photo Aurélien Aranud"
          className="w-2/3 md:w-1/3 md:h-full object-cover"
        />
      </div>
    </section>
  );
}
export default About;
