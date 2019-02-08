import React from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'
import styles from './freeprojects.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ReactibookImage from '../Images/ReactibookImage'
import RoomieImage from '../Images/RoomieImage'
import BattleshipImage from '../Images/BattleshipImage'

const FreeProjects = () => {
  const slides = [
    {
      id: 1,
      name: 'Reactibook',
      subtitle: 'Facebook Mini-clone',
      url: 'http://reactibook.helmerdavila.com/',
      codeUrl: 'https://github.com/helmerdavila/reactibook',
      backend: 'Firebase',
      frontend: 'React',
      image: <ReactibookImage />,
    },
    {
      id: 2,
      name: 'Roomie',
      subtitle: 'Roomie payment calculator',
      url: 'http://roomie.helmerdavila.com/',
      codeUrl: 'https://github.com/helmerdavila/payment-roomie',
      backend: null,
      frontend: 'Vue',
      image: <RoomieImage />,
    },
    {
      id: 2,
      name: 'Battleship',
      subtitle: 'Simple game demo',
      url: 'http://battleship.helmerdavila.com/',
      codeUrl: 'https://github.com/helmerdavila/battleship',
      backend: null,
      frontend: 'React',
      image: <BattleshipImage />,
    },
  ]
  const sliderSettings = {
    className: 'freeprojects_slider',
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

  const slidesMapped = slides.map(slide => {
    const backend = slide.backend ? (
      <div className="control">
        <div className="tags has-addons">
          <span className="tag">Backend</span>
          <span className="tag is-black">{slide.backend}</span>
        </div>
      </div>
    ) : null

    const frontend = slide.frontend ? (
      <div className="control">
        <div className="tags has-addons">
          <span className="tag">Frontend</span>
          <span className="tag is-black">{slide.frontend}</span>
        </div>
      </div>
    ) : null

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
          <h4 className="is-6 subtitle">{slide.subtitle}</h4>
          <div
            className={classNames(styles.project_content, 'field is-grouped')}
          >
            {backend}
            {frontend}
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <div className="buttons">
              <a
                href={slide.url}
                target="_blank"
                className="button is-small is-rounded is-primary"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
              <a
                href={slide.codeUrl}
                target="_blank"
                className="button is-small is-rounded is-outlined is-primary"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className={classNames(styles.section_projects, 'section')}>
      <div className="container">
        <h1 className="title is-1 has-text-centered">Code Samples</h1>
        <Slider {...sliderSettings}>{slidesMapped}</Slider>
      </div>
    </section>
  )
}

export default FreeProjects
