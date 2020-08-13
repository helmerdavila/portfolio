import React from 'react'
import Slider from 'react-slick'
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

  const SlideCard = (slide) => {
    return (
      <div className="bg-white" key={slide.id}>
        <div className="relative">
          <figure className="image">
            {slide.image}
            <div className="image-overlay" />
          </figure>
        </div>
        <div className="flex flex-col justify-center border text-center h-32">
          <h3 className="text-3xl font-semibold text-center">{slide.name}</h3>
          <div className="flex justify-center mt-3">
            <div className="px-1">
              <span className="bg-gray-200 text-sm p-1 rounded-l">Backend</span>
              <span className="bg-black text-white text-sm p-1 rounded-r">
                {slide.backend}
              </span>
            </div>
            <div className="px-1">
              <span className="bg-gray-200 text-sm p-1 rounded-l">
                Frontend
              </span>
              <span className="bg-black text-white text-sm p-1 rounded-r">
                {slide.frontend}
              </span>
            </div>
          </div>
        </div>
        <div className="block p-5 border text-center">
          <a
            href={slide.url}
            target="_blank"
            className="bg-black text-white rounded-full px-5 py-2 mr-1 font-semibold"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </div>
      </div>
    )
  }

  const slidesMobile = slidesNative.map((slide) => SlideCard(slide))
  const slidesMapped = slidesDesktop.map((slide) => SlideCard(slide))

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-semibold mb-3">
          Mobile & Web Projects
        </h1>
        <div className="py-4">
          <Slider {...sliderMobileSettings}>{slidesMobile}</Slider>
        </div>
        <div className="py-4">
          <Slider {...sliderDesktopSettings}>{slidesMapped}</Slider>
        </div>
      </div>
    </section>
  )
}

export default Projects
