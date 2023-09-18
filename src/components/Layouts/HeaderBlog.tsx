import React, { ReactElement, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHSquare, faMoon, faSun } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import { ThemeContext } from '../Layout';
import { Link } from 'gatsby';
import LocalizedLink from '../LocalizedLink';

const HeaderBlog = ({ iconLink }: { iconLink?: string }): ReactElement => {
  const context = useContext(ThemeContext);

  return (
    <nav className="fixed flex flex-row w-screen h-16 px-5 md:px-8 justify-between z-20 transition duration-200 ease-in-out bg-white shadow-xl dark:bg-gray-800">
      <div className="flex flex-row items-center">
        <LocalizedLink to={iconLink ?? '/blog'} className="mr-3 text-black dark:text-white">
          <FontAwesomeIcon icon={faHSquare} size="2x" />
        </LocalizedLink>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row justify-between items-center h-full">
          <li key="en">
            <Link to="/blog" className="mr-3 uppercase text-black dark:text-white">
              EN
            </Link>
          </li>
          <li key="es">
            <Link to="/blog/es" className="mr-3 uppercase text-black dark:text-white">
              ES
            </Link>
          </li>
          <li key="fr">
            <Link to="/blog/fr" className="mr-3 uppercase text-black dark:text-white">
              FR
            </Link>
          </li>
          <li key="pt">
            <Link to="/blog/pt" className="mr-3 uppercase text-black dark:text-white">
              PT
            </Link>
          </li>
        </ul>
        <button className="cursor-pointer w-10 h-full text-black dark:text-white" onClick={context.toggleTheme}>
          {context.isLightTheme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
      </div>
    </nav>
  );
};

export default HeaderBlog;
