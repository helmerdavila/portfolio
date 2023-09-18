import React, { ReactElement } from 'react';
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
import useTranslations from '../UseTranslations';

export const MyStackSection = (props: { title: string; description: string; icons: IconDefinition[] }) => {
  return (
    <div className="flex-1 flex flex-col items-center my-4">
      <div className="icon-spacer mb-3 text-black dark:text-white" data-testid="icon-spacer">
        {props.icons.map((icon) => (
          <FontAwesomeIcon key={uuidv4()} icon={icon} size="3x" />
        ))}
      </div>
      <h4 className="text-2xl font-semibold text-black dark:text-white">{props.title}</h4>
      <span className="text-black dark:text-white">{props.description}</span>
    </div>
  );
};

const MyStack = (): ReactElement => {
  const { my_stack, my_stack_backend, my_stack_frontend, my_stack_sysops } = useTranslations();

  return (
    <section id="my_stack" className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold text-center mb-3 text-black dark:text-white">{my_stack}</h1>
        <div className="flex flex-col sm:flex-row justify-around">
          <MyStackSection icons={[faPhp, faNodeJs]} title="PHP | NodeJS" description={my_stack_backend} />
          <MyStackSection
            icons={[faReact, faAngular, faVuejs]}
            title="VueJs | Angular | React"
            description={my_stack_frontend}
          />
          <MyStackSection icons={[faAws, faDocker]} title="AWS | Docker" description={my_stack_sysops} />
        </div>
      </div>
    </section>
  );
};

export default MyStack;
