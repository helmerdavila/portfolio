import React from 'react'
import CtbookImage from '../Images/Ctbook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const MyBook = () => (
  <div className="bg-white py-10">
    <div className="container mx-auto flex">
      <div className="w-1/2">
        <CtbookImage />
      </div>
      <div className="w-1/2">
        <h2 className="text-5xl font-semibold">CTBook</h2>
        <p className="block mb-3 leading-loose">
          When I first started my career as a developer I saw that there was a
          gap between technology and business, I’ve collected all doubts that
          non-tech people have about tech startups, that’s how CTBOOK (CTO+Book)
          born. So, if you are starting in the tech startup world (or you know
          somebody who does), I recommend you this book, it’s written in the
          most simple language possible, avoiding any technical knowledge.
        </p>
        <a
          href="https://leanpub.com/ctbook/read_sample"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white rounded-full px-5 py-3"
        >
          <FontAwesomeIcon icon={faBook} />
          <span className="ml-3 font-semibold">Read sample</span>
        </a>
      </div>
    </div>
  </div>
)

export default MyBook
