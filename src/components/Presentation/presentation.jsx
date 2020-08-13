import React from 'react'
import Header from '../Layouts/header'
import Typing from 'react-typing-animation'

const Presentation = () => (
  <div className="min-h-screen w-full first-section bg-black">
    <Header />
    <div
      id="who_am_i"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="overlay" />
      <div className="text-center z-10">
        <h3 className="text-3xl font-bold text-white">Hi, my name is</h3>
        <h1 className="text-6xl font-bold text-white">Helmer Dávila</h1>
        <h3 className="text-3xl font-bold text-white">
          Software Engineer and Fullstack Developer
        </h3>
        <h2 className="text-5xl font-bold inline-block text-white">
          <span>and I build </span>
          <Typing loop speed={50}>
            <span>e-commerce websites</span>
            <Typing.Reset count={1} delay={1000} />
            <span>landing pages</span>
            <Typing.Reset count={1} delay={2000} />
            <span>web applications</span>
            <Typing.Reset count={1} delay={300} />
            <span>mobile applications</span>
            <Typing.Reset delay={4000} />
          </Typing>
        </h2>
      </div>
    </div>
  </div>
)

export default Presentation
