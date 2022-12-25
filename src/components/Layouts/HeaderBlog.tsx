import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { faHSquare, faSun, faMoon } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import { ThemeContext } from '../Layout';
import { Link } from 'gatsby';
import LocalizedLink from '../LocalizedLink';

const HeaderBlog = (): JSX.Element => {
  const context = useContext(ThemeContext);
  const navbarClass = classNames(
    'fixed flex flex-row w-screen h-16 px-5 md:px-8 justify-between z-20 transition duration-200 ease-in-out',
    {
      'bg-white shadow-xl': context.isLightTheme,
      'bg-gray-800': !context.isLightTheme,
    },
  );
  const stylesText = {
    'text-white': !context.isLightTheme,
    'text-black': context.isLightTheme,
  };
  const stylesLink = classNames('mr-3 uppercase', stylesText);

  return (
    <nav className={navbarClass}>
      <div className="flex flex-row items-center">
        <LocalizedLink to="blog" className={classNames('mr-3', stylesText)}>
          <FontAwesomeIcon icon={faHSquare} size="2x" />
        </LocalizedLink>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row justify-between items-center h-full">
          <li key="en">
            <Link to="/blog" className={stylesLink}>
              EN
            </Link>
          </li>
          <li key="es">
            <Link to="/blog/es" className={stylesLink}>
              ES
            </Link>
          </li>
          <li key="fr">
            <Link to="/blog/fr" className={stylesLink}>
              FR
            </Link>
          </li>
          <li key="pt">
            <Link to="/blog/pt" className={stylesLink}>
              PT
            </Link>
          </li>
        </ul>
        <button className={classNames('cursor-pointer w-10 h-full', stylesText)} onClick={context.toggleTheme}>
          {context.isLightTheme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
      </div>
    </nav>
  );
};

export default HeaderBlog;
