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
    <footer id="contact" className="">
      <span className="font-syne text-sm font-extrabold">Aurelien Arnaud</span>

      <FormContact />

      <div className="flex gap-4">
        <a href="https://github.com/aurelienrnd">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-3xl text-color-twoo hover:text-color-three flex gap-2"
          />
        </a>

        <a href="https://www.linkedin.com/in/aur%C3%A9lien-arnaud-99bba6350/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl text-color-twoo hover:text-color-three flex gap-2"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
