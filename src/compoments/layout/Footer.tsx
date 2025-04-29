import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer
      id="contact"
      className="h-16 w-full flex justify-between items-center px-8 border-t"
    >
      <span className="font-syne text-sm font-extrabold tracking-wide">
        Aurélien Arnaud
      </span>

      <a
        href="mailto:tonemail@example.com"
        className="hover:text-color-three flex gap-2"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-xl text-color-twoo"
        />
        Contactez moi: aurelienarnaud921@gmail.com
      </a>

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
