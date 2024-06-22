import React from 'react'
import { PRIVACY, SECURITY, TERMS }
from '../../../../routes/RouteConstants'
import { InternalNavlink } from '../../../../components/Link/Link'



const Copyrightlinks = [
    {
        title: "Privacy",
        link: PRIVACY
    },
    {
        title: "Security",
        link: SECURITY
    },
    {
        title: "Terms",
        link: TERMS
    }
]
const Copyright = () => {
  return (
    <div className="dark:bg-gray-800 bg-brandWhite">
    <div className="container">
        <div className="text-sm lg:text-md flex items-center justify-between
            text-black dark:text-white py-4 px-6 text-center ">
            <p className="truncate">&copy; 2023 OneKey Bags. All rights reserved.</p>
            <ul className="flex last:mr-12">
                {Copyrightlinks.map((item, index) => (
                    <InternalNavlink to={item.link} key={index}>
                        <li className="px-1 sm:px-4 text-gray-600 dark:text-gray-400
                            hover:dark:text-white hover:text-black duration-300"
                        >
                            {item.title}
                        </li>
                    </InternalNavlink>
                ))}
            </ul>
        </div>
    </div>
</div>
  )
}

export default Copyright
