import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome } from '@fortawesome/free-brands-svg-icons'
import { faCode, faMobile, faServer } from '@fortawesome/free-solid-svg-icons'

const WhatIDoSection = (props) => (
  <div className="text-center mx-4">
    <div className="bg-white py-8 px-6 rounded shadow-xl">
      <span>
        <FontAwesomeIcon icon={props.icon} size="3x" />
      </span>
      <div className="content">
        <h3 className="font-semibold uppercase text-2xl mt-4">{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  </div>
)

const WhatIDo = () => (
  <section id="what_i_do" className="bg-gray-200 py-10">
    <div className="container mx-auto">
      <h2 className="text-5xl font-semibold text-center mb-4">What I do</h2>
      <div className="flex">
        <WhatIDoSection
          icon={faMobile}
          title="Mobile"
          content="Use of the frameworks like React Native & Ionic to create screens
          and navigation similar to native behavior.
          Deployment process for both stores (Play Store and App Store)."
        />
        <WhatIDoSection
          icon={faChrome}
          title="Frontend"
          content="Use of the languages like HTML(5), CSS(3) and JavaScript to
          create useful UI in different projects. Building sites from
          scratch, with or without frameworks."
        />
        <WhatIDoSection
          icon={faCode}
          title="Backend"
          content="Code the requirements and restrictions for the business, using
          backend frameworks with good scalability option and quick
          development of new features."
        />
        <WhatIDoSection
          icon={faServer}
          title="SysOps"
          content="Deploy new updates with pipelines, setting test and production
          environments. Use of logging tools, checking where and when the
          code failed."
        />
      </div>
    </div>
  </section>
)

export default WhatIDo
