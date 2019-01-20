import React from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'
import styles from './projects.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AmbreaImage from '../Images/AmbreaImage'
import BipolarImage from '../Images/BipolarImage'
import FitnesspassImage from '../Images/FitnesspassImage'
import SpoontopImage from '../Images/SpoontopImage'

const Projects = () => {
  const slides = [
    {
      id: 1,
      name: 'Ambrea',
      url: 'http://ambrea.pe',
      backend: 'Laravel',
      frontend: 'Vue, Vuex',
      image: <AmbreaImage/>
    },
    {
      id: 2,
      name: 'Bipolar',
      url: 'http://bipolar.com.pe',
      backend: 'Laravel',
      frontend: 'React',
      image: <BipolarImage/>
    },
    {
      id: 3,
      name: 'Fitnesspass',
      url: 'http://fitnesspass.pe',
      backend: 'Express',
      frontend: 'React',
      image: <FitnesspassImage/>
    },
    {
      id: 4,
      name: 'Spoontop',
      url: 'http://spoontop.com',
      backend: 'Laravel',
      frontend: 'Angular, Ionic',
      image: <SpoontopImage/>
    },
  ]
  const sliderSettings = {
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const slidesMapped = slides.map(slide => (
    <div className="card" key={slide.id}>
      <div className="card-image">
        <figure className={classNames(styles.image, 'image')}>
          {slide.image}
          <div className={styles.image_overlay} />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <h3 className="is-3 title">{slide.name}</h3>
        <div className={classNames(styles.project_content, 'field is-grouped')}>
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
  ))

  return (
    <section className={classNames(styles.section_projects, 'section')}>
      <div className="container">
        <h1 className="title is-1 has-text-centered">My projects</h1>
        <Slider {...sliderSettings}>{slidesMapped}</Slider>
      </div>
    </section>
  )
}

export default Projects
