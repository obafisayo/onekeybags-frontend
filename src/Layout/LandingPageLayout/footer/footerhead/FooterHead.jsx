import React from 'react'
import { InternalNavlink } from '../../../../components/Link/Link'
import CompanyLogo from '../../../../components/companyLogo/CompanyLogo'

const FooterHead = () => {
  return (
    <div className="py-8 px-4">
        <CompanyLogo img 
            classname={"h-auto w-48 dark:fill-primary"}
        />
        <p className="text-gray-600 dark:text-white/70
        lg:pr-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum, fugit.
        </p>
        <InternalNavlink to={"#"} target="_blank"
            className={"inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"}
        >
            Visit our Instagram Page
        </InternalNavlink>
    </div>
  )
}

export default FooterHead