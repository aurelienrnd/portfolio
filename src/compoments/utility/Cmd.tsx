// Hooks
import { useState } from 'react';

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

export default Cmd;
