import React, { useContext } from 'react';
import Header from '../Layouts/Header';
import classNames from 'classnames';
import useTranslations from '../UseTranslations';
import { ThemeContext } from '../Layout';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { TypeAnimation } from 'react-type-animation';

const Presentation = (props: { backgroundImage: IGatsbyImageData }): JSX.Element => {
  const context = useContext(ThemeContext);
  const {
    hi_my_name_is,
    software_engineer,
    and_i_build,
    ecommerce_websites,
    landing_pages,
    web_applications,
    mobile_applications,
  } = useTranslations();
  const image = getImage(props.backgroundImage);
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage Tag="section" className="first-section" {...bgImage} preserveStackingContext>
      <Header />
      <div id="who_am_i" className="min-h-screen flex justify-center items-center">
        <div className={classNames({ overlay: context.isLightTheme, 'overlay-night': !context.isLightTheme })} />
        <div className="text-center z-10">
          <h3 className="text-3xl font-bold text-white">{hi_my_name_is}</h3>
          <h1 className="text-6xl font-bold text-white">Helmer Dávila</h1>
          <h3 className="text-3xl font-bold text-white">{software_engineer}</h3>
          <h2 className="text-5xl font-bold inline-block text-white">
            <span>{and_i_build}</span>
            <TypeAnimation
              cursor={true}
              sequence={[ecommerce_websites, 2000, landing_pages, 2000, web_applications, 2000, mobile_applications]}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Presentation;
