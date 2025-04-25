import photoProfile from '../../../../assets/photo-test.webp';

function About(): React.JSX.Element {
  const TextUn = (): React.JSX.Element => (
    <p className="w-1/2 border-1 border-indigo-500">
      Après 10 ans dans l’industrie en tant qu’opérateur et pilote de ligne
      industriel, j’ai décidé de donner un nouveau souffle à mon parcours. En
      quête de sens et de défis, j’ai entrepris un tour du monde de l’Asie
      centrale à l’Amérique latine. Cette aventure m’a permis de développer mon
      autonomie, mon adaptabilité et mon envie constante d’apprendre. C’est au
      retour que j’ai choisi de me reconvertir dans le développement web, un
      domaine qui allie logique technique et création.
    </p>
  );

  const TextDeux = (): React.JSX.Element => (
    <p className="border-1 border-indigo-500">
      J’ai alors suivi une formation à distance tout en vivant à l’étranger, ce
      qui m’a appris à travailler de manière disciplinée et autonome dans tous
      les contextes. Aujourd’hui, je conçois des sites et applications web
      modernes, performants et centrés utilisateur avec des technologies comme
      HTML, CSS, JavaScript, React et Node.js. Curieux, adaptable et rigoureux,
      je suis à la recherche d’un poste ou de missions freelance pour continuer
      à évoluer et contribuer à des projets concrets.
    </p>
  );

  return (
    <section id="about" className="">
      <div className="flex justify-between">
        <ProfilCard />
        <TextUn />
      </div>
    </section>
  );
}
export default About;

function ProfilCard(): React.JSX.Element {
  return (
    <article className="w-1/3 border-1 border-indigo-500">
      <img src={photoProfile} alt="Photo de aurélien Arnaud" className=""></img>
      <div className="">
        <span>Développeur web</span>
        <button className="btn">Télécharger mon CV</button>
      </div>
    </article>
  );
}
