import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faAws,
  faDocker,
  faNodeJs,
  faPhp,
  faReact,
  faVuejs,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { ProfileContext } from '../../pages';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const MyStackSection = (props: { title: string; description: string; icons: IconDefinition[] }) => {
  const context = useContext(ProfileContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <div className="flex-1 flex flex-col items-center my-4">
      <div className={classNames('icon-spacer mb-3', textColor)}>
        {props.icons.map((icon) => (
          <FontAwesomeIcon key={uuidv4()} icon={icon} size="3x" />
        ))}
      </div>
      <h4 className={classNames('text-2xl font-semibold', textColor)}>{props.title}</h4>
      <span className={classNames(textColor)}>{props.description}</span>
    </div>
  );
};

const MyStack = (): JSX.Element => {
  const context = useContext(ProfileContext);
  const { t } = useTranslation();
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <section
      id="my_stack"
      className={classNames('py-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    >
      <div className="container mx-auto">
        <h1 className={classNames('text-5xl font-semibold text-center mb-3', textColor)}>{t('my_stack')}</h1>
        <div className="flex flex-col sm:flex-row justify-around">
          <MyStackSection icons={[faPhp, faNodeJs]} title="PHP | NodeJS" description={t('my_stack_backend')} />
          <MyStackSection
            icons={[faReact, faAngular, faVuejs]}
            title="VueJs | Angular | React"
            description={t('my_stack_frontend')}
          />
          <MyStackSection icons={[faAws, faDocker]} title="AWS | Docker" description={t('my_stack_sysops')} />
        </div>
      </div>
    </section>
  );
};

export default MyStack;
