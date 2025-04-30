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
    { question: 'Vous souhaitez me contacter ?', direction: '#contact' },
    {
      question: 'En savoir plus à propos de moi ?',
      direction: '#about',
    },
    { question: 'Connaitre mes compétences ?', direction: '#skilles' },
  ];

  return (
    <div className=" h-1/3 flex justify-center items-center">
      {questionList.map((element, index) => (
        <div
          key={`question-${index}`}
          className={`${questionLength === index ? 'not-sr-only' : 'sr-only'} flex flex-col gap-4`}
        >
          <div className="flex gap-4">
            <div className="slide-top">⬜</div>
            <p>{element.question}</p>
          </div>

          <div className=" flex gap-8 justify-center">
            <a href={element.direction}>oui\</a>
            <button
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
