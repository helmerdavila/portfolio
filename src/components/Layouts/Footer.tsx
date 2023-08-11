import React, { ReactElement, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import { ThemeContext } from '../Layout';
import useTranslations from '../UseTranslations';

const Footer = (): ReactElement => {
  const context = useContext(ThemeContext);
  const { powered_by_gatsby } = useTranslations();

  return (
    <footer className={classNames({ 'bg-black': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}>
      <div className="container flex flex-col items-center py-6 mx-auto">
        <div className="flex flex-row pt-5">
          <a
            className="bg-white p-3 rounded-full mr-2 w-10 h-10 flex justify-center items-center"
            href="https://www.linkedin.com/in/helmerdavila/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className="bg-white p-3 rounded-full ml-2 w-10 h-10 flex justify-center items-center"
            href="https://www.github.com/helmerdavila"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p className="block text-white pt-6">
          <span>© {new Date().getFullYear()}</span> -- <span>Helmer Dávila</span> -- <span>{powered_by_gatsby}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
