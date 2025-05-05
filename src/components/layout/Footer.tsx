// Components
import FormContact from '../utility/FormContact';
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
      <div className="flex flex-col-reverse md:flex-row-reverse gap-8">
        <div className="flex md:flex-row-reverse justify-between md:justify-start items-center md:items-end md:gap-8 md:w-1/3">
          <span className="font-syne text-sm font-extrabold">
            Aurelien Arnaud
          </span>

          <div className="flex text-5xl gap-8">
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

        <FormContact />
      </div>
    </footer>
  );
}

export default Footer;
