// Hooks
import { useEffect, useState } from 'react';
import { SetMultyRefs } from '../../../../utility/SetMultyRefs.tsx';
//Components
import ProfilAndMap from './ProfilAndMap.tsx';
//types
interface TextType {
  key: string;
  paragraphe: string;
}

/** Section À propos
 * @description - Effectue une requête pour récupérer les données textuelles, puis utilise `.map` pour afficher chaque paragraphe,
 * accompagnés d’une photo de profil ou d’une carte du tour du monde.
 * @component ProfilAndMap - Affiche soit la photo de profil, soit la carte du tour du monde.
 * @returns {JSX.Element} - La section À propos du site.
 */
function About(): React.JSX.Element {
  const [text, setText] = useState<TextType[]>([]);
  const { setRef } = SetMultyRefs<HTMLParagraphElement>(text.length);

  useEffect(() => {
    fetch('/datas/about.json')
      .then(res => res.json())
      .then(data => setText(data))
      .catch(err => console.error('Erreur chargement hardskills:', err));
  }, []);

  return (
    <section id="about">
      <h2>Mon parcours de développeur</h2>
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:justify-between md:h-full">
        <div className="flex flex-col gap-4 md:justify-between md:w-2/3 md:h-full md:max-h-150">
          {text.map((item, index) => (
            <p key={item.key} ref={setRef(index)}>
              {item.paragraphe}
            </p>
          ))}
        </div>

        <ProfilAndMap />
      </div>
    </section>
  );
}
export default About;
