import React from 'react';
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

const MyStackSection = (props: { title: string; description: string; icons: IconDefinition[] }) => (
  <div className="flex flex-col items-center my-4">
    <div className="icon-spacer mb-3">
      {props.icons.map((icon) => (
        <FontAwesomeIcon key={uuidv4()} icon={icon} size="3x" />
      ))}
    </div>
    <h4 className="text-2xl font-semibold">{props.title}</h4>
    <span>{props.description}</span>
  </div>
);

const MyStack = () => (
  <section id="my_stack" className="py-10">
    <div className="container mx-auto">
      <h1 className="text-5xl font-semibold text-center mb-3">My stack</h1>
      <div className="flex flex-row flex-wrap justify-around">
        <MyStackSection icons={[faPhp, faNodeJs]} title="PHP | NodeJS" description="Backend" />
        <MyStackSection icons={[faReact, faAngular, faVuejs]} title="VueJs | Angular | React" description="Frontend" />
        <MyStackSection icons={[faAws, faDocker]} title="AWS | Docker" description="Server managment | Devops" />
      </div>
    </div>
  </section>
);

export default MyStack;
