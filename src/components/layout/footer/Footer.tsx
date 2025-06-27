// Components
import FormContact from './FormContact.tsx';
//Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/** Gestion du pied de page du site
 * @description - Affiche le pied de page de la page.
 * @returns {JSX.Element} - Le composant footer du site.
 * @component FormContact - Affiche un formulaire qui préremplit un e-mail une fois validé.
 */
function Footer(): React.JSX.Element {
  return (
    <footer id="contact">
      <FormContact />

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between w-full">
        <div className="flex flex-col-reverse md:flex-row-reverse gap-4 items-center justify-between w-full">
          <a
            className="cursor-pointer hover:text-color-three border-2 hover:border-color-three rounded-lg px-4 py-2"
            href="/cv/cv-aurelien-arnaud.pdf"
            download
          >
            Obtenir mon CV
          </a>
          <span className="font-syne text-sm font-extrabold">
            Aurelien Arnaud
          </span>
        </div>

        <div className="flex text-5xl gap-8 justify-center items-center">
          <a
            href="https://github.com/aurelienrnd"
            target="_blank"
            aria-label="github"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-color-three"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/aur%C3%A9lien-arnaud-99bba6350/"
            target="_blank"
            aria-label="linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-color-three"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
