// Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
// Hooks
import { useState } from 'react';
import { Link } from 'react-router';

type QuestionList = {
  question: string; // Question à afficher
  direction?: string; // Lien de redirection (optionnel)
  path?: string; // Chemin de téléchargement (optionnel)
};

/** Affiche un questionnaire de navigation avec un style terminal
 * @description - Utilise un tableau de questions et le hook useState pour gérer l'affichage des questions.
 * Redirige vers la section correspondante si l'utilisateur clique sur "oui".
 * Affiche la question suivante si l'utilisateur clique sur "non".
 * @returns {JSX.Element} - Questionnaire de navigation.
 */
function Cmd(): React.JSX.Element {
  const [questionLength, setQuestionLength] = useState(1);
  const questionList: QuestionList[] = [
    { question: 'Vous souhaitez me contacter ?', direction: '/#contact' },
    {
      question: 'En savoir plus à propos de moi ?',
      direction: '/#about',
    },
    { question: 'Connaitre mes compétences ?', direction: '/#skills' },
    { question: 'Télécharger mon CV ?', path: '/cv/cv-aurelien-arnaud.pdf' },
  ];

  return (
    <div className=" h-1/3 flex justify-center items-center md:font-code scale-in-ver-center">
      {questionList.map((element, index) => (
        <div
          key={`question-${index}`}
          className={`${questionLength === index ? 'not-sr-only' : 'sr-only'} flex flex-col gap-4`}
        >
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faSquare} className="slide-top" />
            <p>{element.question}</p>
          </div>

          <div className=" flex gap-8 justify-center">
            {element.path ? (
              <a href={element.path} download className="hover:border-b-1">
                oui\
              </a>
            ) : (
              <Link to={element.direction ?? '#'} className="hover:border-b-1">
                oui\
              </Link>
            )}

            <button
              className="cursor-pointer hover:border-b-1"
              onClick={() =>
                setQuestionLength((questionLength + 1) % questionList.length)
              }
            >
              non\
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cmd;
