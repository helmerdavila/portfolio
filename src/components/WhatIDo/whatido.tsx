import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { ProfileContext } from '../../pages';
import classNames from 'classnames';
import { faBrowser, faCode, faMobile, faServer } from '@fortawesome/pro-duotone-svg-icons';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const WhatIDoSection = (props: { icon: IconDefinition; title: string; content: string }) => {
  const context = useContext(ProfileContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <div className="text-center px-4 py-4 w-full sm:w-1/2 md:w-1/2 xl:w-1/4">
      <div
        className={classNames('py-8 px-6 rounded shadow-xl', {
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
  const context = useContext(ProfileContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const { t } = useTranslation();

  return (
    <section
      id="what_i_do"
      className={classNames('py-10', { 'bg-gray-200': context.isLightTheme, 'bg-gray-900': !context.isLightTheme })}
    >
      <div className="container mx-auto">
        <h2 className={classNames('text-5xl font-semibold text-center mb-4', textColor)}>{t('what_i_do')}</h2>
        <div className="flex flex-wrap">
          <WhatIDoSection
            icon={faMobile}
            title="Mobile"
            content="Use of the frameworks like React Native & Ionic to create screens
          and navigation similar to native behavior.
          Deployment process for both stores (Play Store and App Store)."
          />
          <WhatIDoSection
            icon={faBrowser}
            title="Frontend"
            content="Use of the languages like HTML(5), CSS(3) and JavaScript to
          create useful UI in different projects. Building sites from
          scratch, with or without frameworks."
          />
          <WhatIDoSection
            icon={faCode}
            title="Backend"
            content="Code the requirements and restrictions for the business, using
          backend frameworks with good scalability option and quick
          development of new features."
          />
          <WhatIDoSection
            icon={faServer}
            title="SysOps"
            content="Deploy new updates with pipelines, setting test and production
          environments. Use of logging tools, checking where and when the
          code failed."
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
