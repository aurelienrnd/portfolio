import FormContact from '../utility/FormContact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-16 w-full flex justify-between items-center px-8 border-t"
    >
      <span className="">Aurélien Arnaud</span>

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
