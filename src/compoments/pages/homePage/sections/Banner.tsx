import { Link } from 'react-router';
import { useState } from 'react';

function Cmd() {
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
    <div className="font-code ">
      {questionList.map((element, index) => (
        <div
          key={`question-${index}`}
          className={`${questionLength === index ? 'not-sr-only' : 'sr-only'} flex justify-center items-center gap-4`}
        >
          <div className="slide-top">⬜</div>
          <p>{element.question}</p>
          <a href={element.direction}>oui\</a>
          <button
            onClick={() =>
              setQuestionLength((questionLength + 1) % questionList.length)
            }
            className="cursor-pointer"
          >
            non\
          </button>
        </div>
      ))}
    </div>
  );
}

function Banner() {
  const text =
    'Passionné par le code. Mon parcours atypique m’a appris à apprendre vite, partout dans le monde. Aujourd’hui, je crée des interfaces claires et responsives avec React';

  return (
    <section id="banner" className="h-screen flex flex-col">
      <div className=" h-3/5 flex items-center justify-center gap-4">
        <div className="w-2/3 flex flex-col space-y-6">
          <h1 className="title">Aurélien Arnaud</h1>
          <h2 className="title">Développeur d'aplication web</h2>
          <p>{text}</p>
        </div>
        <Link to="project" className="btn">
          Voir mes projets
        </Link>
      </div>
      <Cmd />
    </section>
  );
}
export default Banner;
