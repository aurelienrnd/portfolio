import { Link } from 'react-router';
import { useEffect, useState } from 'react';

/** Affiche un questionaire de navigation avec un style de terminal
 * @description Utilise un tableaux de question et le useState pour gérer l'affichage de la question
 * Redirige vers la section correspondante si l'utilisateur clique sur le bouton "oui"
 * Affiche la question suivante si l'utilisateur clique sur le bouton "non"
 * @returns {JSX.Element} - Questionaire de navigation
 */
function Cmd(): React.JSX.Element {
  const [questionLength, setQuestionLength] = useState(1);
  const questionList = [
    { question: 'Vous souhaitez me contacter ?', direction: '#footer' },
    {
      question: 'En savoir plus à propos de moi ?',
      direction: '#about',
    },
    { question: 'Connaitre mes compétences ?', direction: '#skilles' },
  ];

  return (
    <div>
      {questionList.map((element, index) => (
        <div
          key={`question-${index}`}
          className={`${questionLength === index ? 'not-sr-only' : 'sr-only'} flex flex-col md:flex-row justify-center items-center gap-4`}
        >
          <div className="flex justify-center items-center gap-4">
            <div className="slide-top hidden md:block">⬜</div>
            <p className="text-center">{element.question}</p>
          </div>

          <div className="flex gap-4">
            <a href={element.direction} className="hover:border-b-1">
              oui\
            </a>
            <button
              onClick={() =>
                setQuestionLength((questionLength + 1) % questionList.length)
              }
              className="cursor-pointer hover:border-b-1"
            >
              non\
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function FakeLoader(): React.JSX.Element {
  return <div className="bg-color-three h-1 fake-loader rounded-md"></div>;
}

/** Section Banner
 * @description Affiche la section Banner à l'interieur de HomePage
 * @returns {JSX.Element} - Section Banner
 * @component Cmd - Affiche un questionaire de navigation avec un style de terminal
 */
function Banner(): React.JSX.Element {
  const text =
    'Passionné par le code. Mon parcours atypique m’a appris à apprendre vite, partout dans le monde. Aujourd’hui, je crée des interfaces claires et responsives avec React';

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1250);
  }, []);

  return (
    <section id="banner" className="h-screen flex flex-col pb-16">
      <div className="flex flex-col items-center md:items-start justify-around md:justify-center md:gap-4 h-2/3 md:h-1/2 text-center md:text-left">
        <h1>Aurélien Arnaud</h1>
        <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-8">
          <h2>Développeur d'aplication web</h2>
          <Link to="project" className="btn md:mr-16">
            Voir mes projets
          </Link>
        </div>

        <p className="md:w-2/3">{text}</p>
      </div>
      <div className="h-1/3 font-code flex justify-center items-center">
        {isLoading ? <FakeLoader /> : <Cmd />}
      </div>
    </section>
  );
}
export default Banner;
