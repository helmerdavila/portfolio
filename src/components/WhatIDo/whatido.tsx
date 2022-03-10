import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import { faBrowser, faCode, faMobile, faServer } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import useTranslations from '../UseTranslations';
import { ThemeContext } from '../Layout';

const WhatIDoSection = (props: { icon: IconDefinition; title: string; content: string }) => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <div className="text-center px-4 py-4 w-full sm:w-1/2 md:w-1/2 xl:w-1/4">
      <div
        className={classNames('py-8 px-6 rounded shadow-xl h-full', {
          'bg-white': context.isLightTheme,
          'bg-gray-800': !context.isLightTheme,
        })}
      >
        <span className={classNames(textColor)}>
          <FontAwesomeIcon icon={props.icon} size="3x" />
        </span>
        <div className="content">
          <h3 className={classNames('font-semibold uppercase text-2xl mt-4', textColor)}>{props.title}</h3>
          <p className={classNames(textColor)}>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

const WhatIDo = (): JSX.Element => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const { what_i_do, what_i_do_mobile, what_i_do_frontend, what_i_do_backend, what_i_do_sysops } = useTranslations();

  return (
    <section
      id="what_i_do"
      className={classNames('py-10', { 'bg-gray-200': context.isLightTheme, 'bg-gray-900': !context.isLightTheme })}
    >
      <div className="container mx-auto 2xl:max-w-7xl">
        <h2 className={classNames('text-5xl font-semibold text-center mb-4', textColor)}>{what_i_do}</h2>
        <div className="flex flex-wrap">
          <WhatIDoSection icon={faMobile} title="Mobile" content={what_i_do_mobile} />
          <WhatIDoSection icon={faBrowser} title="Frontend" content={what_i_do_frontend} />
          <WhatIDoSection icon={faCode} title="Backend" content={what_i_do_backend} />
          <WhatIDoSection icon={faServer} title="SysOps" content={what_i_do_sysops} />
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
