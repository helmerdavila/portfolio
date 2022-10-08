import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { faHSquare } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import DarkModeToggle from 'react-dark-mode-toggle';
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
  const stylesLink = classNames('mr-3 uppercase', {
    'text-white': !context.isLightTheme,
    'text-black': context.isLightTheme,
  });

  return (
    <nav className={navbarClass}>
      <div className="flex flex-row items-center">
        <LocalizedLink
          to="/blog"
          className={classNames('mr-3', {
            'text-white': !context.isLightTheme,
            'text-black': context.isLightTheme,
          })}
        >
          <FontAwesomeIcon icon={faHSquare} size="2x" />
        </LocalizedLink>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row justify-between">
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
        <DarkModeToggle size={50} onChange={context.toggleTheme} checked={!context.isLightTheme} />
      </div>
    </nav>
  );
};

export default HeaderBlog;
