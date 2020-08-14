import React, { useContext } from 'react';
import CtbookImage from '../Images/Ctbook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { ProfileContext } from '../../pages';

const MyBook = () => {
  const context = useContext(ProfileContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <div
      className={classNames('py-10', {
        'bg-white': context.isLightTheme,
        'bg-gray-800': !context.isLightTheme,
      })}
    >
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <CtbookImage />
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <h2 className={classNames('text-5xl font-semibold', textColor)}>CTBook</h2>
          <p className={classNames('block mb-3 leading-loose', textColor)}>
            When I first started my career as a developer I saw that there was a gap between technology and business,
            I’ve collected all doubts that non-tech people have about tech startups, that’s how CTBOOK (CTO+Book) born.
            So, if you are starting in the tech startup world (or you know somebody who does), I recommend you this
            book, it’s written in the most simple language possible, avoiding any technical knowledge.
          </p>
          <a
            href="https://leanpub.com/ctbook/read_sample"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames('inline-block rounded-full px-5 py-3', {
              'bg-black text-white': context.isLightTheme,
              'bg-gray-900 text-white': !context.isLightTheme,
            })}
          >
            <FontAwesomeIcon icon={faBook} />
            <span className="ml-3 font-semibold">Read sample</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyBook;
