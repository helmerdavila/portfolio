import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import useTranslations from '../UseTranslations';
import { StaticImage } from 'gatsby-plugin-image';

const MyBook = (): ReactElement => {
  const { ctbook_description, ctbook_readsample } = useTranslations();

  return (
    <div className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="flex-1 p-10">
          <StaticImage
            src="../../images/ctbook.png"
            className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
            layout="fullWidth"
            alt="Ctbook"
          />
        </div>
        <div className="flex-1 p-6">
          <h2 className="text-5xl font-semibold text-black dark:text-white">CTBook</h2>
          <p className="block mb-3 leading-loose text-black dark:text-white">{ctbook_description}</p>
          <a
            href="https://leanpub.com/ctbook/read_sample"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-5 py-3 bg-black text-white dark:bg-gray-900 dark:text-white"
          >
            <FontAwesomeIcon icon={faBook} />
            <span className="ml-3 font-semibold">{ctbook_readsample}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyBook;
