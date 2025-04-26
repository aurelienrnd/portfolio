function About(): React.JSX.Element {
  const santanceList = [
    {
      text: 'Après 10 ans dans l’industrie en tant qu’opérateur et pilote de ligne industriel, j’ai décidé de donner un nouveau souffle à mon parcours.',
      classStyle: '',
      key: 'santance0',
    },
    {
      text: 'En quête de sens et de défis, j’ai entrepris un tour du monde. Cette aventure m’a permis de développer mon autonomie, mon adaptabilité et mon envie constante d’apprendre.',
      classStyle: 'self-end',
      key: 'santance1',
    },
    {
      text: 'C’est au retour que j’ai choisi de me reconvertir dans le développement web, un domaine qui allie logique technique et création.',
      classStyle: '',
      key: 'santance2',
    },
    {
      text: 'J’ai alors suivi une formation à distance tout en vivant à l’étranger, ce qui m’a appris à travailler de manière disciplinée et autonome dans tous les contextes.',
      classStyle: 'self-end',
      key: 'santance3',
    },
    {
      text: 'Aujourd’hui, je conçois des sites et applications web modernes, performants et centrés utilisateur avec des technologies comme HTML, CSS, JavaScript, React et Node.js.',
      classStyle: '',
      key: 'santance4',
    },
    {
      text: 'Curieux, adaptable et rigoureux, je suis à la recherche d’un poste ou demissions freelance pour continuer à évoluer et contribuer à des projets concrets.',
      classStyle: 'self-end',
      key: 'santance5',
    },
  ];

  return (
    <section id="about" className="flex flex-col gap-8 md:gap-16 ">
      <h2 className="">Trouver un Titrre</h2>

      <div className="h-full flex flex-col gap-4 md:gap-0 md:justify-between pb-4">
        {santanceList.map(santance => (
          <span
            key={santance.key}
            className={`${santance.classStyle} w-2/3 md:text-center`}
          >
            {santance.text}
          </span>
        ))}
      </div>
    </section>
  );
}
export default About;
