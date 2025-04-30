// Components
import FormContact from '../utility/FormContact';
//Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/** Gestion du footer du site
 * @description - Affiche le footer de la page
 * @returns {JSX.Element} - le footer du site
 * @component FormContact - Affiche un formulaire que preremplie un email une fois validé
 */
function Footer(): React.JSX.Element {
  return (
    <footer id="contact">
      <h2>Contact</h2>
      <div className="flex flex-col-reverse gap-8">
        <div className="flex justify-between items-center">
          <span className="font-syne text-sm font-extrabold">
            Aurelien Arnaud
          </span>

          <div className="flex text-5xl gap-8">
            <a href="https://github.com/aurelienrnd" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-color-three"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/aur%C3%A9lien-arnaud-99bba6350/"
              target="_blank"
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
