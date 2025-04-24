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
    <div className="font-code">
      {questionList.map((element, index) => (
        <div
          key={`question-${index}`}
          className={`${questionLength === index ? 'not-sr-only' : 'sr-only'} flex justify-center items-center gap-4`}
        >
          <div className="slide-top">⬜</div>
          <p>{element.question}</p>
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
      ))}
    </div>
  );
}

function FakeLoader(): React.JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="bg-color-three h-1 fake-loader rounded-md"></div>
    </div>
  );
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
    <section id="banner" className="h-screen flex flex-col">
      <div className=" h-3/5 flex items-center justify-center gap-4">
        <div className="w-2/3 flex flex-col space-y-6">
          <h1>Aurélien Arnaud</h1>
          <h2>Développeur d'aplication web</h2>
          <p>{text}</p>
        </div>
        <Link to="project" className="btn">
          Voir mes projets
        </Link>
      </div>
      {isLoading ? <FakeLoader /> : <Cmd />}
    </section>
  );
}
export default Banner;
