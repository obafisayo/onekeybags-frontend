import React from 'react'
import { InternalNavlink } from '../../../../components/Link/Link'
import PropTypes from "prop-types"


const FooterLinks = ({title, configFile}) => {
  return (
    <div className="py-8 px-4">
        <h1 className="text-xl font-bold sm:text-left mb-3">
            {title}
        </h1>
        <ul className="space-y-3">
            {configFile.map((data, index) => (
                <li key={index}>
                    <InternalNavlink to={data.link}
                    className="text-gray-600 dark:text-gray-400
                    hover:dark:text-white
                    hover:text-black duration-300">
                        {data.title}
                    </InternalNavlink>
                </li>
            ))}
        </ul>
    </div>
  )
}

FooterLinks.prototypes = {
    title: PropTypes.string.isRequired,
    configFile: PropTypes.array.isRequired
}

export default FooterLinks
