import React from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'
import styles from './projects.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AmbreaImage from '../Images/AmbreaImage'
import BipolarImage from '../Images/BipolarImage'
import BitelineImage from '../Images/BitelineImage'
import FitnesspassImage from '../Images/FitnesspassImage'
import FitnesspassMobileImage from '../Images/FitnesspassMobileImage'
import SpoontopImage from '../Images/SpoontopImage'
import VicunaImage from '../Images/VicunaImage'

const Projects = () => {
  const slidesNative = [
    {
      id: 1,
      name: 'Biteline',
      url: 'https://biteline.net',
      backend: 'NodeJS, ExpressJS',
      frontend: 'Ionic',
      image: <BitelineImage />,
    },
    {
      id: 2,
      name: 'Fitnesspass (App)',
      url: 'https://apps.apple.com/us/app/fitness-pass/id1442657269',
      backend: 'NodeJS, ExpressJS',
      frontend: 'React Native',
      image: <FitnesspassMobileImage />,
    },
  ]
  const slidesDesktop = [
    {
      id: 1,
      name: 'Ambrea',
      url: 'https://ambrea.helmerdavila.com/menu/#/dia/1/turno/dia',
      backend: 'Laravel',
      frontend: 'Vue, Vuex',
      image: <AmbreaImage />,
    },
    {
      id: 2,
      name: 'Bipolar',
      url: 'https://bipolar.com.pe',
      backend: 'Laravel',
      frontend: 'React',
      image: <BipolarImage />,
    },
    {
      id: 3,
      name: 'Fitnesspass',
      url: 'https://fitnesspass.pe',
      backend: 'Express',
      frontend: 'React',
      image: <FitnesspassImage />,
    },
    {
      id: 4,
      name: 'Spoontop',
      url: 'http://spoontop.com',
      backend: 'Laravel',
      frontend: 'Angular, Ionic',
      image: <SpoontopImage />,
    },
    {
      id: 5,
      name: 'Vicuña Beer',
      url: 'https://vicuna.cervezacandelaria.com',
      backend: 'Laravel',
      frontend: 'JS, CSS',
      image: <VicunaImage />,
    },
  ]
  const sliderDesktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const sliderMobileSettings = {
    ...sliderDesktopSettings,
    slidesToShow: 2,
  }

  const SlideCard = slide => {
    return (
      <div className="card" key={slide.id}>
        <div className="card-image">
          <figure className={classNames(styles.image, 'image')}>
            {slide.image}
            <div className={styles.image_overlay} />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <h3 className="is-3 title">{slide.name}</h3>
          <div
            className={classNames(styles.project_content, 'field is-grouped')}
          >
            <div className="control">
              <div className="tags has-addons">
                <span className="tag">Backend</span>
                <span className="tag is-black">{slide.backend}</span>
              </div>
            </div>
            <div className="control">
              <div className="tags has-addons">
                <span className="tag">Frontend</span>
                <span className="tag is-black">{slide.frontend}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <a
              href={slide.url}
              target="_blank"
              className="button is-small is-rounded is-primary"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>
    )
  }

  const slidesMobile = slidesNative.map(slide => SlideCard(slide))
  const slidesMapped = slidesDesktop.map(slide => SlideCard(slide))

  return (
    <section className={classNames(styles.section_projects, 'section')}>
      <div className="container">
        <h1 className="title is-1 has-text-centered">Mobile & Web Projects</h1>
        <div className={styles.slider_container}>
          <Slider {...sliderMobileSettings}>{slidesMobile}</Slider>
        </div>
        <div className={styles.slider_container}>
          <Slider {...sliderDesktopSettings}>{slidesMapped}</Slider>
        </div>
      </div>
    </section>
  )
}

export default Projects
