import React from 'react'
import Slider from 'react-slick'
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

  const slidesMapped = slides.map((slide) => {
    const backend = slide.backend ? (
      <div className="px-1">
        <span className="bg-gray-200 text-sm p-1 rounded-l">Backend</span>
        <span className="bg-black text-white text-sm p-1 rounded-r">
          {slide.backend}
        </span>
      </div>
    ) : null

    const frontend = slide.frontend ? (
      <div className="px-1">
        <span className="bg-gray-200 text-sm p-1 rounded-l">Frontend</span>
        <span className="bg-black text-white text-sm p-1 rounded-r">
          {slide.frontend}
        </span>
      </div>
    ) : null

    return (
      <div className="bg-white" key={slide.id}>
        <div className="relative">
          <figure className="image">
            {slide.image}
            <div className="image-overlay" />
          </figure>
        </div>
        <div className="border text-center h-40">
          <h3 className="text-3xl font-semibold mt-3">{slide.name}</h3>
          <h4 className="text-xl">{slide.subtitle}</h4>
          <div className="flex justify-center mt-3">
            {backend}
            {frontend}
          </div>
        </div>
        <div className="block p-5 border text-center">
          <a
            href={slide.url}
            target="_blank"
            className="font-semibold bg-black text-white rounded-full px-3 py-2 mr-1"
            rel="noopener noreferrer"
          >
            Visit site
          </a>
          <a
            href={slide.codeUrl}
            target="_blank"
            className="font-semibold border-black border rounded-full px-3 py-2 ml-1"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    )
  })

  return (
    <section className="bg-gray-200 ">
      <div className="container mx-auto py-10">
        <h2 className="text-5xl font-semibold text-center pb-4">
          Code Samples
        </h2>
        <Slider {...sliderSettings}>{slidesMapped}</Slider>
      </div>
    </section>
  )
}

export default FreeProjects
