import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className="bg-black">
    <div className="container mx-auto flex flex-col items-center py-6">
      <div className="flex flex-row pt-5">
        <a
          className="bg-white p-3 rounded-full mr-2 w-10 h-10 flex justify-center items-center"
          href="https://www.linkedin.com/in/helmerdavila/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className="bg-white p-3 rounded-full ml-2 w-10 h-10 flex justify-center items-center"
          href="https://www.github.com/helmerdavila"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className="block text-white pt-6">
        <span>© {new Date().getFullYear()}</span> -- <span>Helmer Dávila</span>{' '}
        -- <span>Powered by Gatsby</span>
      </p>
    </div>
  </footer>
)

export default Footer
